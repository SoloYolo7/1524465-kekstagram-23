function getRandomNumber(minValue, maxValue) {
    // Применение модуля для ограничения диапазона только неотрицательными значениями
    minValue = Math.abs(minValue);
    maxValue = Math.abs(maxValue);
  
    // На случай, если значение "от" больше значения "до" (если меньше или равно, то стандартное поведение)
    const swap = minValue > maxValue ? minValue : false;
    minValue = swap ? maxValue : minValue;
    maxValue = swap ? swap : maxValue;
  
    const randomNumber = minValue + Math.random() * (maxValue + 1 - minValue);
    return Math.floor(randomNumber);
  }
  
  getRandomNumber(0, 99);
  
  function checkStringLength(stringText, maxLength) {
    return String(stringText).length <= maxLength;
  }
  
  checkStringLength('random comment', 50);
  