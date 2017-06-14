function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n

}
/**
  *
  * json转字符串
  */
  function stringToJson(data){
    return JSON.parse(data);
  }
  /**
  *字符串转json
  */
  function jsonToString(data){
    return JSON.stringify(data);
  }
  /**
  *map转换为json
  */
  function mapToJson(map) {
  return JSON.stringify(strMapToObj(map));
  }
  /**
  *json转换为map
  */
  function jsonToMap(jsonStr){
    return  objToStrMap(JSON.parse(jsonStr));
  }
 
 
 /**
 *map转化为对象（map所有键都是字符串，可以将其转换为对象）
 */
 function strMapToObj(strMap){
    let obj= Object.create(null);
    for (let[k,v] of strMap) {
      obj[k] = v;
    }
    return obj;
  }
 
/**
*对象转换为Map
*/
 function  objToStrMap(obj){
  let strMap = new Map();
  for (let k of Object.keys(obj)) {
    strMap.set(k,obj[k]);
  }
  return strMap;
}
function json2Form(json) { 
  var str = []; 
  for(var p in json){ 
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p])); 
  } 
  return str.join("&"); 
} 
module.exports = { 
 json2Form:json2Form, 
}
module.exports = {
  stringToJson: stringToJson,
    jsonToString:jsonToString,
    mapToJson:mapToJson,
    jsonToMap:jsonToMap,
    strMapToObj:strMapToObj,
    objToStrMap:objToStrMap,
  formatTime: formatTime
}
