const express = require('express');
const router = express.Router();

const GardenModel = require("../models").Garden;
const PlantModel = require("../models").Plant;

// SHOW Specific Garden - Postman-GET: http://localhost:3000/api/gardens/profile/1 
router.get("/profile/:id", async (req, res) => {
    let garden = await GardenModel.findByPk(req.params.id, {
        include: [{ model: PlantModel, attributes: ['id', 'name'] }]
    });

    res.json({ garden });
});

// INDEX  - Postman-GET: http://localhost:3000/api/gardens
router.get("/", async (req, res) => {
    let gardens = await GardenModel.findAll({ include: PlantModel });
    res.json({ gardens });
});

// CREATE NEW GARDEN - Postman-POST: http://localhost:3000/api/gardens
router.post("/", async (req, res) => {
    let garden = await GardenModel.create(req.body);
    res.json({ garden });
});

// UPDATE GARDEN - Postman-PUT: lhttp://localhost:3000/api/gardens/profile/7
router.put("/:id", async (req, res) => {
    let garden = await GardenModel.update(req.body, {
        where: { id: req.params.id },
        returning: true
    });

    res.json({ garden });
});

// DELETE GARDEN - Postman-DELETE: http://localhost:3000/api/gardens/profile/8
router.delete("/:id", async (req, res) => {
    await GardenModel.destroy({ where: { id: req.params.id }});
    res.json({ message: `garden with id ${req.params.id} was deleted` });
});

// CREATE NEW PLANT - Postman-POST: http://localhost:3000/api/gardens/7/newplant
router.post("/:id/newplant", async (req, res) => {
    let garden = await GardenModel.findByPk(req.params.id);
    let plant = await garden.createPlant(req.body);
    res.json({ plant });
})



module.exports = router;