<<<<<<< HEAD
function LegendaryModel(id, name, description, type,
    healthPoints, specialAttack, defense, attack, experience,
    specialDefense) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.healthPoints = healthPoints;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.experience = experience;
    this.specialDefense = specialDefense;
}

module.exports = LegendaryModel;

//TABLE - LEGENDARIES
=======
function LegendaryModel(id, name, description, type) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.type = type;
}

module.exports = LegendaryModel;
>>>>>>> cdcf5ca43d92ed3d052466d7e29f9828e908c2e7
