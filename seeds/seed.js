const sequelize = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

const travellerSeedData = require('./travellerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const travellers = await Traveller.bulkCreate(travellerSeedData);

    const locations = await Location.bulkCreate(locationSeedData);

    for (let i = 0; i < 10; i++) {
        // Get a random traveller's id
        const travellersIndex = Math.floor(Math.random() * travellers.length);
        const { id: randomTravellerId } = travellers[travellersIndex];

        // Get a random location's id
        const locationsIndex = Math.floor(Math.random() * locations.length);
        const { id: randomLocationId } = locations[locationsIndex];

        // Create a new trip with random values
        await Trip.create({
            trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
            traveller_amount: Math.floor(Math.random() * 10) + 1,
            traveller_id: randomTravellerId,
            location_id: randomLocationId
        }).catch((err) => {
            console.log(err);
        });
    }

    process.exit(0);
};

seedDatabase();
