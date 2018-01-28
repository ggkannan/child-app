define('child-app/adapters/application', ['exports', 'ember-data/adapters/json-api'], function (exports, _jsonApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _jsonApi.default.extend({
    namespace: 'api'
  });
});
define('child-app/config/environment', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var config;

  try {
    var metaName = 'child-app/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports.default = config;
});
define('child-app/engine', ['exports', 'ember-engines/engine', 'ember-resolver', 'ember-load-initializers', 'child-app/config/environment'], function (exports, _engine, _emberResolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var modulePrefix = _environment.default.modulePrefix;

  var Eng = _engine.default.extend({
    modulePrefix: modulePrefix,
    Resolver: _emberResolver.default,
    dependencies: {
      externalRoutes: [],
      services: ['store']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);

  exports.default = Eng;
});
define('child-app/models/house', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _model, _attr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _model.default.extend({
    title: (0, _attr.default)(),
    owner: (0, _attr.default)(),
    city: (0, _attr.default)(),
    category: (0, _attr.default)(),
    image: (0, _attr.default)(),
    bedrooms: (0, _attr.default)(),
    description: (0, _attr.default)()
  });
});
define('child-app/routes', ['exports', 'ember-engines/routes'], function (exports, _routes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _routes.default)(function () {
    this.route('child-home');
    this.route('child-home1');
  });
});
define('child-app/routes/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('child-app/routes/child-home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    store: Ember.inject.service(),
    model: function model() {

      return Ember.get(this, 'store').findAll('house');
    }
  });
});
define('child-app/routes/child-home1', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("child-app/templates/application", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "y6YnesR2", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\\nsfsdf\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "child-app/templates/application.hbs" } });
});
define("child-app/templates/child-home", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "zqMeYXZ1", "block": "{\"symbols\":[\"rental\"],\"statements\":[[6,\"h1\"],[7],[0,\"child home 1\"],[8],[0,\"\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[4,\"each\",[[20,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[6,\"article\"],[9,\"class\",\"listing\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[1,[19,1,[\"title\"]],false],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail owner\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Owner:\"],[8],[0,\" \"],[1,[19,1,[\"owner\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail type\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Type:\"],[8],[0,\" \"],[1,[19,1,[\"category\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail location\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Location:\"],[8],[0,\" \"],[1,[19,1,[\"city\"]],false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"detail bedrooms\"],[7],[0,\"\\n      \"],[6,\"span\"],[7],[0,\"Number of bedrooms:\"],[8],[0,\" \"],[1,[19,1,[\"bedrooms\"]],false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \\n\"]],\"hasEval\":false}", "meta": { "moduleName": "child-app/templates/child-home.hbs" } });
});
define("child-app/templates/child-home1", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "hCNMbkxv", "block": "{\"symbols\":[],\"statements\":[[6,\"h1\"],[7],[0,\"child home 2\"],[8],[1,[18,\"outlet\"],false],[0,\"\\n \\n\"]],\"hasEval\":false}", "meta": { "moduleName": "child-app/templates/child-home1.hbs" } });
});//# sourceMappingURL=engine.map
