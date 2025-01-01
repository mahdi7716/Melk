'use strict';

/**
 * rs-rent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rs-rent.rs-rent');
