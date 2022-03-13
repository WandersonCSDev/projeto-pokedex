/*
const LegendariesService = require('../service/LegendariesService');

const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);

        return res.render('legendaries', {
            legendary
        });
    },
    index: (request, response) => {
        const legendariesList = LegendariesService.listLegendaries()
        return response.json(legendariesList);
    }
}

*/
const LegendaryModel = require('../models/LegendaryModel');
const LegendariesService = require('../models/LegendaryModel');

const controller = {
    index: (request, response) => {
        const pokemon = new LegendaryModel(1, 'Pokemon', 'Monstrinho dos inferno', 'Maloca')

        return response.json(pokemon)
    }
}

module.exports = controller;