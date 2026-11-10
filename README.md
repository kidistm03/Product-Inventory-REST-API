# Product Inventory REST API

## Project Description

The Product Inventory REST API is a backend application built using Node.js and Express.js. It allows users to manage products in an inventory through RESTful API endpoints.

This project uses a JavaScript array to store product information. No database is used.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman

## Project Structure

```text
product-inventory-api/
│
├── controllers/
│   └── productController.js
│
├── data/
│   └── products.js
│
├── routes/
│   └── productRoutes.js
│
├── app.js
├── package.json
└── README.md
```

## Start the server:

   ```bash
   node app.js
   ```

The server runs at:

`http://localhost:3000`

## Product Information

Each product contains:

- id
- name
- price
- quantity
- category

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create a product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |
| GET | `/products/search?name=laptop` | Search by name |
| GET | `/products/category/:category` | Filter by category |
| GET | `/products/price/:price` | Find products below a price |
| GET | `/products/low-stock` | Get products with quantity below 5 |
| GET | `/products/value` | Calculate total inventory value |

## Product Request Example

```json
{
  "name": "Keyboard",
  "price": 40,
  "quantity": 10,
  "category": "Electronics"
}
```

## Validation

The API validates product information before creating or updating products.

- Product name is required.
- Price must be a positive number.
- Quantity must be zero or greater.
- Category is required.
- Request body must not be empty.

Invalid requests return HTTP status `400`.

A product that cannot be found returns HTTP status `404`.

## Testing

All API endpoints can be tested using Postman.

## Storage

Product information is stored in an in-memory JavaScript array. Data resets when the server restarts.
