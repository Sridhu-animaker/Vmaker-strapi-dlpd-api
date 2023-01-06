'use strict';

/**
 * vmaker controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vmaker.vmaker', ({ strapi }) => ({
    async findOne(ctx) {
        const { slug } = ctx.params;

        const entity = await strapi.db.query('api::vmaker.vmaker').findOne({
            where: { slug }
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity)
    }
}));
