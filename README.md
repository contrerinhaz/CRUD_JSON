# Developer

Juan David Contreras Coronado (contrerinhaz)
GitHub Repository: (https://github.com/contrerinhaz/CRUD_JSON.git)

# Product Appointment Manager

This project is a simple product manager made with HTML, CSS, and JavaScript.
It uses json-server to simulate a real API and store data.

------------------------------

## Features

- Add new product appointments
- Delete a product by ID
- Update a product's information
- Display all products in a list
- Show a product table in the browser console

------------------------------

## Folder Structure

project-folder/
│
├── database.json          - Product data (used by json-server)
├── index.html             - Main web page
├── README.md              - This file
└── src/
    ├── css/
    │   └── styles.css     - Styles for the page
    └── js/
        └── main.js        - JavaScript logic

------------------------------

## How to Start

1. Install json-server (only once)

Open your terminal and run:

    npm install -g json-server

If you see a permission error, try:

    sudo npm install -g json-server

------------------------------

2. Start the json-server

Go to the project folder where `database.json` is located and run:

    json-server --watch database.json --port 3001

This will create an API at:

    http://localhost:3001/appointments

------------------------------

3. Open the Web App

You can open the file `index.html` in your browser directly,
or use the Live Server extension in Visual Studio Code.

------------------------------

## How to Use the App

- Add Product:
  Fill in the ID, Name, Category, and Price.
  Then click the "Submit" button to add it.

  If the ID already exists, the app will show an alert.

- Delete Product:
  Type the ID of the product you want to delete, then click "Delete".
  If the ID exists, it will be removed from the list and the API.

- Update Product:
  Type the existing ID, then enter the new Name, Category, and Price.
  All fields are required to update.
  Click "Update" to save the new data.

- View Inventory:
  The product list is shown at the bottom of the page.
  Every time you add, delete or update, the full list is also shown as a table in the browser console.

------------------------------

## Extra Information

- The app connects to: http://localhost:3001/appointments
- You can change this URL in the `main.js` file if needed.

------------------------------


