const LegendariesService = require('../service/LegendariesService');

const controller = {
<<<<<<< HEAD
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);

        return res.render('legendaries', {
            legendary
        });
    }
=======
  index: (request, response) => {
    const legendariesList = LegendariesService.listLegendaries()
    return response.json(legendariesList);
  }
>>>>>>> cdcf5ca43d92ed3d052466d7e29f9828e908c2e7
}

module.exports = controller;