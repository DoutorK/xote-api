const mongoose = require('mongoose');

// Validador de data usando o tipo Date
const validateDate = (date) => {
    return !isNaN(Date.parse(date)); // Valida a data de acordo com o formato Date
};

const validateTime = (time) => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Formato HH:MM
    return regex.test(time);
};

const eventSchema = new mongoose.Schema({
    image_url: {
        type: String,
        required: true,
        validate: {
            validator: (url) => /^https?:\/\/.+\..+$/.test(url), 
            message: "URL inválida."
        }
    }, 
    title: { 
        type: String, 
        required: true, 
        minlength: 5, 
        maxlength: 100 
    },
    description: { 
        type: String, 
        required: true,
        minlength: 1,
        maxlength: 1000 
    },
    date: { 
        type: Date, 
        required: true,
        validate: {
            validator: validateDate,
            message: "Data inválida."
        }
    },
    time: { 
        type: String, 
        required: true,
        validate: {
            validator: validateTime,
            message: "Hora inválida. Use o formato HH:MM."
        }
    },
    type: { 
        type: String, 
        required: true 
    },
    pay: { 
        type: Boolean, 
        required: true 
    },
    price: { 
        type: Number, 
        required: function() { return this.pay; }, 
        min: 0 
    },
    localgoogleurl: { 
        type: String, 
        required: true,
        validate: {
            validator: (url) => /^(https?:\/\/)?(maps\.google\.com\/maps\?q=|maps\.app\.goo\.gl\/).+$/.test(url),
            message: "URL do local no Google Maps inválida."
        }
    },
}, { timestamps: true }); 

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
