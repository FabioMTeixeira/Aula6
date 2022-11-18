const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

const PORT = 3000;
const DATABASE_URL = 'mongodb://localhost:27017/awari';

const State = new mongoose.Schema({
    name: {
        type: String
    },
    UF: {
        type: String
    }
});

const City = new mongoose.Schema({
    name: {
        type: String
    },
    state: {
        type: State,
        default: {}
    }
});

const CityModel = mongoose.model("City", City);

const server = async () => {
    try {
        await mongoose.connect(DATABASE_URL);

        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

app.get('/cities', async (req, res) => {
    const collection = await CityModel.find()

    res.status(200).json(collection);
});

app.get('/cities/:id', async (req, res) => {
    const { id } = req.params;

    const document = await CityModel.findById(id);

    if(document) {
        res.status(200).json(document);
    } else {
        res.status(404).json({});
    };
})

app.post('/cities', async (req, res) => {
    const data = { ...req.body };
    const newCity = new CityModel(data);

    const document = await newCity.save();

    res.status(201).json(document);
});

app.put('/cities/:id', async (req, res) => {
    const data = { ...req.body };
    const id = req.params.id;
    const city = await CityModel.findById(id);

    if(!city) {
        return res.status(404).json({});
    }

    city.name = data.name;

    if (data.state) {
        city.state.UF = data.state.UF;
    };

    await city.save();

    res.status(200).json(city);
});

app.delete('/cities/:id', async (req, res) => {
    const id = req.params.id;
    const city = await CityModel.findById(id);

    if(city) {
        await city.delete();
    
        res.status(200).json(city);
    } else {
        res.status(404).json({});
    };
});

server();