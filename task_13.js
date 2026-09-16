function snail(array) {
  const result = [];

  while (array.length) {
    // Верхняя строка — слева направо
    result.push(...array.shift());

    // Правый столбец — сверху вниз
    for (const row of array) {
      result.push(row.pop());
    }

    // Нижняя строка — справа налево (в обратном порядке)
    if (array.length) {
      result.push(...array.pop().reverse());
    }

    // Левый столбец — снизу вверх
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}
