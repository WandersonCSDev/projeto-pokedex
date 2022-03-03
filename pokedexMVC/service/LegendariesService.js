const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
<<<<<<< HEAD
    listLegendaries: () => {
        const Mew = new LegendaryModel(
            1,
            'Mew',
            'Mew é um Pokémon muito curioso e fofo que pode se transformar em qualquer outro tipo de Pokémon Pokémon. É um Pokémon de tipo psíquico.',
            'Psychic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
        )
        return [Mew]
    }
=======
  listLegendaries: () => {
    const pokemon1 = new LegendaryModel(1, 'Pokemon Zika','Morador da ZL', 'Maloca')
    const pokemon2 = new LegendaryModel(1, 'Pokemon','Barra funda', 'Sem mundial')
    return [pokemon1, pokemon2]
  }
>>>>>>> cdcf5ca43d92ed3d052466d7e29f9828e908c2e7
}

module.exports = LegendariesService;