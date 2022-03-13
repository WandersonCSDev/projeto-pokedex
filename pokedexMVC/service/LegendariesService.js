const LegendaryModel = require('../models/LegendaryModel');

const LegendariesService = {
  listLegendaries: () => {
    const Mew = new LegendaryModel(
      1,
      'Mew',
      'Its DNA is almost the same as Mews. However, its size and disposition are vastly different.',
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