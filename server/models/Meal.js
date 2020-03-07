const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    serving: {
        type: Number,
        default: 1
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })



MealSchema.index({
    title: 'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        description: 1,
    }
})



const Meal = mongoose.model('Meal', MealSchema);

module.exports = { Meal }