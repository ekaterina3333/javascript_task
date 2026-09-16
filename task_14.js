function findEvenIndex(arr) {
  const total = arr.reduce((sum, n) => sum + n, 0);
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    const right = total - left - arr[i];

    if (left === right) return i;

    left += arr[i];
  }

  return -1;
}
