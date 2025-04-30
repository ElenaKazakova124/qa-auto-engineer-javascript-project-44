export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  export const getRandomOperator = () => {
    {
      const operators = ['+', '-', '*']
      const randomIndex = Math.floor(Math.random() * operators.length);
      return operators[randomIndex];
    }
  };

  export const gcd = function NOD (first_number, second_number) {
    if (second_number > first_number) return NOD(second_number, first_number);
    if (!second_number) return first_number;
    return NOD(second_number, first_number % second_number);
  };

  export const progression = function generateProgression(startLimit, stepLimit, lenghtLimit) {
    const start = Math.floor(Math.random() * startLimit) + 1;
    const step = Math.floor(Math.random() * stepLimit) + 1;
    const length = Math.floor(Math.random() * lenghtLimit) + 5;
    const progression = Array.from({ length }, (_, i) => start + i * step);
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenNumber = progression[hiddenIndex];
    const progressionWithHidden = [...progression];
    progressionWithHidden[hiddenIndex] = '..';
    return {
        progression: progressionWithHidden.join(' '), 
        hiddenNumber,
        hiddenIndex
    };
}

export const prime =function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}