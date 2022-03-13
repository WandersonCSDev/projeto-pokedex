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

module.exports = controller;