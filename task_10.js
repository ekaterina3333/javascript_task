function validBraces(braces){
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  
  const stack = [];
  
  for (const ch of braces) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
