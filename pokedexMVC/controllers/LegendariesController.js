const LegendariesService = require('../service/LegendariesService');

const controller = {
    index: (req, res) => {
        const { name } = req.query;

        const legendary = LegendariesService.listPokemonData(name);

        return res.render('legendaries', {
            legendary
        });
    },

    //função responsável por receber as requisições do corpo da 
    //requisição "body" para criação de um legendary.
    create: (req, res) => {
        const {
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense,
        } = req.body;

        // eu trato as informações que vem do corpo "body" 
        //e consigo fazer as tratativas
        const legendary = LegendariesService.createLegendary(
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense,
        );

        return res.json(legendary)
    }
}

module.exports = controller;