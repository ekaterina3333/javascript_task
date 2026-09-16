function isIsogram(str){
  var output = [...new Set(str.toLowerCase())].join('');
  return output == str.toLowerCase();
}
