const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const addButton = document.getElementById("addButton");

const deleteId = document.getElementById("deleteId");
const deleteButton = document.getElementById("deleteButton");

const updateId = document.getElementById("updateId");
const newName = document.getElementById("newName");
const newCategory = document.getElementById("newCategory");
const newPrice = document.getElementById("newPrice");
const updateButton = document.getElementById("updateButton");

const inventoryList = document.getElementById("inventoryList");

const API_URL = 'http://localhost:3001/appointments';

function renderInventory() {
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            inventoryList.innerHTML = "";

            if (data.length === 0) {
                const li = document.createElement("li");
                li.textContent = "No products available.";
                inventoryList.appendChild(li);
                console.clear();
                console.log("Inventory is empty.");
                return;
            }

            data.forEach(product => {
                const li = document.createElement("li");
                li.textContent = `ID: ${product.id}, Name: ${product.name}, Category: ${product.category}, Price: $${product.price}`;
                inventoryList.appendChild(li);
            });

            console.clear();
            console.table(data);
        })
        .catch(err => {
            console.error("Error loading appointments:", err);
        });
}

addButton.addEventListener('click', () => {
    const id = productId.value.trim();
    const name = productName.value.trim();
    const category = productCategory.value.trim();
    const price = parseFloat(productPrice.value);

    if (!id || !name || !category || isNaN(price)) {
        alert("Please fill out all fields correctly.");
        return;
    }

    fetch(`${API_URL}/${id}`)
        .then(res => {
            if (res.ok) {
                throw new Error("A product with that ID already exists.");
            }

            return fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, name, category, price })
            });
        })
        .then(() => {
            alert("Product added successfully.");
            renderInventory();
            productId.value = "";
            productName.value = "";
            productCategory.value = "";
            productPrice.value = "";
        })
        .catch(err => {
            alert(err.message);
        });
});

deleteButton.addEventListener('click', () => {
    const idToDelete = deleteId.value.trim();

    fetch(`${API_URL}/${idToDelete}`, {
        method: "DELETE"
    })
        .then(res => {
            if (res.ok) {
                alert(`Product with ID ${idToDelete} has been deleted.`);
                renderInventory();
                deleteId.value = "";
            } else {
                alert(`No product found with ID ${idToDelete}.`);
            }
        });
});

updateButton.addEventListener('click', () => {
    const idToUpdate = updateId.value.trim();
    const name = newName.value.trim();
    const category = newCategory.value.trim();
    const price = parseFloat(newPrice.value);

    if (!idToUpdate || !name || !category || isNaN(price)) {
        alert("Please fill all fields to update the product.");
        return;
    }

    const updatedProduct = { id: idToUpdate, name, category, price };

    fetch(`${API_URL}/${idToUpdate}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
    })
        .then(res => {
            if (res.ok) {
                alert("Product updated successfully.");
                renderInventory();
                updateId.value = "";
                newName.value = "";
                newCategory.value = "";
                newPrice.value = "";
            } else {
                alert("Product not found.");
            }
        });
});

renderInventory();
