function disemvowel(str) {
  return str.split('').filter(char => !['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())).join('');;
}
