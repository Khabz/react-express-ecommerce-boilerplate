const servings = [{
        "_id": 1,
        "name": "Breakfast"
    },
    {
        "_id": 2,
        "name": "Lunch"
    },
    {
        "_id": 3,
        "name": "Dinner"
    },
    {
        "_id": 4,
        "name": "Beverages"
    },
    {
        "_id": 5,
        "name": "Snack"
    }
]

const price = [{
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "R0 to R199",
        "array": [0, 199]
    },
    {
        "_id": 2,
        "name": "R200 to R249",
        "array": [200, 249]
    },
    {
        "_id": 3,
        "name": "R250 to R279",
        "array": [250, 279]
    },
    {
        "_id": 4,
        "name": "R280 to R299",
        "array": [280, 299]
    },
    {
        "_id": 5,
        "name": "More than R300",
        "array": [300, 1500000]
    }
]

export {
    price,
    servings
}