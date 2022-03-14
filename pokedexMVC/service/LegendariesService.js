const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
    listLegendaries: () => {
        const Mew = new LegendaryModel(
            1,
            'Mew-Zika',
            'Monstrinho desgraçado feio pra caramba, daquele desenho.',
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