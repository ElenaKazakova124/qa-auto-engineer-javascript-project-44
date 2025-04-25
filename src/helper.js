export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  export const getRandomOperator = () => {
    {
      const operators = ['+', '-', '*', '/']
      const randomIndex = Math.floor(Math.random() * operators.length);
      return operators[randomIndex];
    }
  }