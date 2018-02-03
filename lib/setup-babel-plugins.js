module.exports = function(addon, plugins) {
  plugins = plugins || [];

  addon.options = addon.options || {};
  addon.options.babel = addon.options.babel || {};
  addon.options.babel.plugins = addon.options.babel.plugins || [];

  plugins.forEach((plugin) => {
    plugin = typeof plugin === 'string' ? plugin : null;

    if (plugin && addon.options.babel.plugins.indexOf(plugin) === -1) {
      addon.options.babel.plugins.push(plugin);
    }
  });
};
