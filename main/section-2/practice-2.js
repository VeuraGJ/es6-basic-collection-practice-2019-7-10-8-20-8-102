'use strict';

module.exports = function countSameElements(collection) {
  return collection.reduce((pre,cur) =>{
    const key = cur.indexOf('-') == -1? cur : cur.split('-')[0];
    const count = cur.indexOf('-') == -1? 1 : parseInt(cur.split('-')[1]);
    const item = pre.find(it => it.key == key);
    item ? item.count = item.count + count : pre.push({'key': key, 'count': count});
    return pre; 
  },[]);
}
