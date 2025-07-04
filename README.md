# Author

Juan David Contreras Coronado  
GitHub: https://github.com/contrerinhaz

# Product Inventory Manager

This is a simple web app that lets you add, update, delete, and view products using JSON Server. It's designed for beginners learning how to use JavaScript with RESTful APIs.

## Features

- Add new products (ID, name, category, price)
- Delete products by ID
- Update existing product information
- Display the product inventory
- Responsive design for tablets and mobile devices

## Responsive Design

The layout is fully responsive.  
It adjusts automatically to different screen sizes, including desktops, tablets, and mobile phones.  
Media queries are used to ensure proper visibility and usability on smaller devices.

## Project Structure

project-folder/
|
├── index.html               Main HTML file
├── src/
│   ├── css/
│   │   └── styles.css       Stylesheet
│   └── js/
│       └── main.js          JavaScript logic
└── db.json                  JSON Server database file (you must create this)

## Requirements

- Node.js
- JSON Server (global installation)
- A code editor like Visual Studio Code

## Installation and Usage

1. Install JSON Server globally by running:

   npm install -g json-server

2. In the root folder of the project, create a file named `db.json` and add this content:

   {
     "appointments": []
   }

3. Run JSON Server with the following command in your terminal:

   json-server --watch db.json --port 3001

4. Open the `index.html` file in your browser. You can also use the "Live Server" extension in Visual Studio Code for automatic reload.

## Important Notes

- The project uses the endpoint http://localhost:3001/appointments
- Product IDs must be unique. If an ID already exists, the product will not be added.
- After adding, updating, or deleting, the product list will refresh automatically.

## License

© 2025 contrerinhaz. All rights reserved.

