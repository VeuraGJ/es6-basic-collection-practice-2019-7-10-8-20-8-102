'use strict';

module.exports = function countSameElements(collection) {
  return collection.reduce((pre,cur) =>{
    const name = cur.match(/[-:[]/) ? cur.split(/[-:[]/)[0] : cur;
    const summary = cur.match(/[-:[]/) ? parseInt(cur.match(/\d+/g)) : 1;
    const item = pre.find(it => it.name == name);
    item ? item.summary = item.summary + summary : pre.push({'name': name, 'summary': summary});
    return pre; 
  },[]);
}
