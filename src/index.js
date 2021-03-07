module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  let array = [];
  let openBrackets = [];
  let closedBracket = [];
  for(let i = 0; i < bracketsConfig.length; ++i){
    openBrackets.push(bracketsConfig[i][0]);
    closedBracket.push(bracketsConfig[i][1]);
  }
  array.push(str[0]);
  for(let i = 1; i < str.length; ++i){

    if(closedBracket.includes(str[i])){
      let bracketIndex = findBracketPair(str[i], bracketsConfig);
      if(array[array.length -1] === openBrackets[bracketIndex]){
        array.pop();
      }
    }else{
      array.push(str[i]);
    }
  }
  if(!array.length){
    return true;
  }
  return false;
}
function findBracketPair(closeBracket, bracketsConfig){
  for(let i = 0; i < bracketsConfig.length; ++i){
    if(bracketsConfig[i][1] == closeBracket){
      return i;
    }
  }
}