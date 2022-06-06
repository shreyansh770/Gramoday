const mongoose = require('mongoose')

mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("indv model connected");
}).catch((err) => {
    console.log(err);
})

const indvSchema = new mongoose.Schema({


    cmdtyName: {
        type: String,
        required: true,
    },

    cmdtyID: {
        type: String,
        required: true,
    },

    marketID: {
        type: String,
        required: true
    },

    marketName: {
        type: String,
        required: true,
    },

    users: [String],

    timestamp: {
        type: String,
    },

    priceUnit: {
        type: String,
        default: "Kg"
    },

    price: {
        type: Number,
        required: true,
    }
})

indvSchema.pre('save', function (next) {
    this.timestamp = Math.floor(Date.now() / 1000);
    next()
})

const indvModel = mongoose.model("indvModel", indvSchema);

module.exports = indvModel;