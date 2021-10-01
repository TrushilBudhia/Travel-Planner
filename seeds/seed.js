const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

const travellerSeedData = require('./travellerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const travellers = await Traveller.bulkCreate(travellerSeedData);

    const locations = await Location.bulkCreate(locationSeedData);

    process.exit(0);
};

seedDatabase();
