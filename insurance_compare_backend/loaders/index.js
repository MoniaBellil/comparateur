const restAPI = require('./restAPI');
const mongoose = require('../loaders/mongoose');
const cors = require('cors');
const cookiesGenrate = require('../loaders/cookiesGenrate');
const superuser = require('../loaders/superuser');
const imports = require('../loaders/imports');
const authRoute = require('../routes/authRoutes');
const offresApi = require('../routes/offresApi');
const postalApi = require('../routes/CodePostalRoutes');
const partenaireRoutes = require('../routes/partenaireRoutes');
const clientRoutes = require('../routes/clientRoutes');
const asurarRoutes = require('../routes/asurarRoutes');
const cron = require('node-cron');
module.exports = async (expressApp) => {

    await restAPI(expressApp);
    await mongoose();
    await cookiesGenrate()
    await cron.schedule('0 */30 * * * *', cookiesGenrate);
    await imports();
    await superuser();
    expressApp.use(cors());
    expressApp.options('*', cors());
    expressApp.use(authRoute);
    expressApp.use(offresApi);
    expressApp.use(postalApi);
    expressApp.use(clientRoutes);
    expressApp.use(partenaireRoutes);
    expressApp.use(asurarRoutes);
};
