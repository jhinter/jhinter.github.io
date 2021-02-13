'use strict';

define("@example/ember/tests/integration/components/ember-context-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | ember-context', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <EmberContext />
      */
      {
        "id": "7LxEcrdZ",
        "block": "{\"symbols\":[],\"statements\":[[8,\"ember-context\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <EmberContext>
              template block text
            </EmberContext>
          
      */
      {
        "id": "6umwxi42",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"ember-context\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("@example/ember/tests/test-helper", ["@example/ember/app", "@example/ember/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("@example/ember/tests/unit/controllers/application-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('@example/ember/config/environment', [], function() {
  var prefix = '@example/ember';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('@example/ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
