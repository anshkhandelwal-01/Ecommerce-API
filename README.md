# E-commerce-API
This is a very basic E-commerce API that can help the admin to keep a proper record of the products in the inventory.

To run the API, follow the steps written below:
1. run "npm init" in the terminal to install the dependencies.
2. to run the server, type npm start in the terminal.
3. install Postman(if not installed) and use it as frontend.
4. make a GET request localhost:3000/product to see the list of products.
Note: At the time of installation there will not be any product in the DB, so a welcome message will appear on the screen.
5. add the products to the db using the POST request localhost:3000/product/create.
6. to delete a product, use the delete request localhost:3000/product/delete/(id of the product to be deleted)
7. to update the details of any of the products, use the PUT request localhost:3000/product/update/(id of the product to be deleted)
8. to retrieve the details of any of the products, use the GET request localhost:3000/product/(id of the product to be deleted)
