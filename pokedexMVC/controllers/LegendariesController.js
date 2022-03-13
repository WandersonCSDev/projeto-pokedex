const LegendariesService = require('../service/LegendariesService');

const controller = {
    index: (request, response) => {
        const legendariesList = LegendariesService.listLegendaries()
        return response.json(legendariesList);
    }
}

module.exports = controller;