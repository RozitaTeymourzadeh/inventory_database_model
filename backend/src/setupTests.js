console.log('🧪🧪🧪🧪🧪🧪🧪Test suite is running .... 🧪🧪🧪🧪🧪🧪 ');

const db = require('./db');

module.exports = async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
};

