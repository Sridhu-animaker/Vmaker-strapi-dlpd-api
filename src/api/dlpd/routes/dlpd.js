'use strict';

/**
 * dlpd router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dlpd.dlpd');
