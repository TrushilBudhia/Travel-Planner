const Traveller = require('./travllers');
const Location = require('./locations');
const Trip = require('./trips');
                          
Traveller.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false
},
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  through: {
    model: Trip,
    unique: false
  },
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
