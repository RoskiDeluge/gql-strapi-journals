'use strict';

/**
 * state-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::state-note.state-note');
