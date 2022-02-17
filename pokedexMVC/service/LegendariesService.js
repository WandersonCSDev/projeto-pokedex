const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
  listLegendaries: () => {
    const pokemon1 = new LegendaryModel(1, 'Pokemon Zika','Morador da ZL', 'Maloca')
    const pokemon2 = new LegendaryModel(1, 'Pokemon','Barra funda', 'Sem mundial')
    return [pokemon1, pokemon2]
  }
}

module.exports = LegendariesService;