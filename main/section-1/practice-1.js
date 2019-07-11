'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(value => collectionB.includes(value));
}
