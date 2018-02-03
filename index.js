/* eslint-env node */
'use strict';
const EngineAddon = require('ember-engines/lib/engine-addon');
const path = require('path');
const setupDecorators = require('./lib/setup-babel-plugins');
module.exports = EngineAddon.extend({
  name: 'child-app',
  lazyLoading: true,

  isDevelopingAddon() {
    return true;
  },

  init(app) {
    this._super.init && this._super.init.apply(this, arguments);

    setupDecorators(this, ['transform-decorators-legacy']);
  },

  included(app, parentAddon) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    const parentApp = (typeof app.import !== 'function' && app.app) ? app.app : app;

    // see: http://ember-cli.com/extending/#broccoli-build-options-for-in-repo-addons
    parentApp.options = parentApp.options || {};

    // Sass paths
    const childAppSassPath = path.join(this.root, '/addon/styles/');

    parentApp.options.sassOptions = parentApp.options.sassOptions || {};
    parentApp.options.sassOptions.includePaths = parentApp.options.sassOptions.includePaths || [];

    // Import sass dependencies
    parentApp.options.sassOptions.includePaths.push(childAppSassPath);
  },

});
