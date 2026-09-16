function gps(s, x) {
  if (x.length < 2) return 0;
  const max_speed = [];
  for (let i = 1; i < x.length; i++) {
    const speed = (3600 * (x[i] - x[i - 1])) / s;
    max_speed.push(speed);
}
  return Math.max.apply(0, max_speed)
}
