const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
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
}

module.exports = LegendariesService;