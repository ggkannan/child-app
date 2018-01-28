import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | child app');

test('visiting /child-app', function(assert) {
  visit('/child-app');

  andThen(function() {
    assert.equal(currentURL(), '/child-app');
  });
});
