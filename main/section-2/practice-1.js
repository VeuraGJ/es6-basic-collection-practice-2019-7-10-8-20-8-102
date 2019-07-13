'use strict';

module.exports = function countSameElements(collection) {
  return collection.reduce((pre,cur) =>{
    const item = pre.find(it => it.key == cur);
    item ? item.count++ : pre.push({'key': cur, 'count': 1});
    return pre; 
  },[]);
}
