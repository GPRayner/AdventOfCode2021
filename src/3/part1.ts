export const part1 = (input: string[]) => {
  const bitLenght = input[0].length;
  let gamma = "";
  let epsilon = "";
  for (let index = 0; index < bitLenght; index++) {
    let trueCount = 0;
    let falseCount = 0;
    input.forEach(line => {
      const bit = line[index];
      if (bit === "1") {
        trueCount++;
      } else {
        falseCount++;
      }
    });
    if (trueCount > falseCount) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};
