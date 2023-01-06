'use strict';

/**
 * dlpd controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dlpd.dlpd', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::dlpd.dlpd').findOne({
            where: { slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity)
    }
}));
