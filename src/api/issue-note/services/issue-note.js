'use strict';

/**
 * issue-note service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::issue-note.issue-note');
