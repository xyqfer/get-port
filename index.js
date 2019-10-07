module.exports = async () => {
    const isProd = process.env.LEANCLOUD_APP_ENV === 'production';

    if (isProd) {
        return parseInt(process.env.LEANCLOUD_APP_PORT || process.env.PORT || 3000);
    } else {
        const portfinder = require('portfinder');
        portfinder.basePort = 3000;
        return await portfinder.getPortPromise();
    }
};