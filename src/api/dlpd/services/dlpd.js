'use strict';

/**
 * dlpd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dlpd.dlpd');
