const db = require('../models');
const sequelize = require('sequelize');
const equipment = db.equipment;

const getInfoAll = async (req, res) => {
    let response = await equipment.findAll();
    res.status(200).send(response);
};

const getInfoById = async (req, res) => {
    let eId = req.params.eId;
    let response = await equipment.findOne({where: {eId: eId}});
    console.log(response)
    if (!response) {
        return res.status(400).send({ error: 'Equipment id not found' });
    }
    res.status(200).render("equipment",{response: response});
};

const updateAvailability = async (req, res) => {
    let eId = req.params.eId;
    let availability = req.params.availability;
    let response = await equipment.update(
        { isAvailable: availability },
        { where: { eId: eId }}
    )
    if (response == 0) {
        res.status(304).send() // Not modified
    }
    else if (response == 1) {
        res.status(200).send( "Equipment availability has been successfully updated." );
    }
}

const updateUnderMaintenance = async (req, res) => {
    let eId = req.params.eId;
    let underMaintenance = req.params.underMaintenance;
    let response = await equipment.update(
        { needsMaintenance: underMaintenance },
        { where: { eId: eId }}
    )
    console.log("CONSOLE LOG: " + response)
    if (response == 0) {
        res.status(304).send() // Not modified
    }
    else if (response == 1) {
        res.status(200).send( "Equipment maintenance status has been successfully updated." );
    }
}

const getMap = async (req, res) =>{
    let equipment_list = await equipment.findAll();
    res.render('equipment_list', {title: "Equipment list", equipment_list: equipment_list})
}

module.exports = {
    getInfoById,
    getInfoAll,
    updateAvailability,
    updateUnderMaintenance, getMap
}
