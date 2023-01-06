'use strict';

/**
 * vmaker service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vmaker.vmaker');
