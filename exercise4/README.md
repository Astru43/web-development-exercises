# Running
Install dependencies by running
``npm install``

After installing dependencies 
``npm start``
will compile and run the application.

# Json examples
## Products route

### Create item json:

```json
{
    "item": "Some title",
    "seller": "Test seller",
    "description": "Some desc",
    "category": [
        "Random 1",
        "Random 2",
        "Random 3"
    ],
    "price": {
        "integer": 999,
        "decimal": 95
    },
    "shipping": {
        "integer": 999,
        "decimal": 99
    },
    "rating": 5,
    "img": "res/test_img_9.jpg"
}
```

### Edit item json:

```json
{
    "item": "Item",
    "seller": "Seller",
    "description": "Desc",
    "category": [
        "Category 1",
        "Category 2"
    ],
    "price": {
        "integer": 199,
        "decimal": 99
    },
    "shipping": {
        "integer": 199,
        "decimal": 9
    },
    "rating": 5,
    "img": "res/test_img_3.jpg"
}
```

## User route

### Create user json:

```json
{
    "firstName": "Test",
    "lastName": "user",
    "address": "Some random address 11 R 22",
    "phone": "+000-0000-000-00",
    "email": "some.email@email.com"
}
```

## invoice route

### Create invoice json:

```json
{
    "user": "cef2b8c4-fc98-48ff-be79-bb24a482cfc6",
    "items": [
        "0fcc4263-e48a-4a4e-9523-29ae2e4c60f0",
        "b42cfe08-674a-4d6e-b630-5bd0da2dc319"
    ]
}
```