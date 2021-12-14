export const part2 = (input: string[]) => {
  const bitLenght = input[0].length;
  let O2List = input.map(x => x);
  let CO2List = input.map(x => x);

  for (let index = 0; index < bitLenght; index++) {
    let trueCount = 0;
    let falseCount = 0;

    O2List.forEach(line => {
      const bit = line[index];
      if (bit === "1") {
        trueCount++;
      } else {
        falseCount++;
      }
    });
    if (trueCount >= falseCount) {
      O2List = O2List.filter(x => x[index] === "1");
    } else {
      O2List = O2List.filter(x => x[index] === "0");
    }

    let trueCo2Count = 0;
    let falseCo2Count = 0;
    CO2List.forEach(line => {
      const bit = line[index];
      if (bit === "1") {
        trueCo2Count++;
      } else {
        falseCo2Count++;
      }
    });
    if (CO2List.length > 1) {
      if (trueCo2Count >= falseCo2Count) {
        CO2List = CO2List.filter(x => x[index] === "0");
      } else {
        CO2List = CO2List.filter(x => x[index] === "1");
      }
    }
  }

  return parseInt(O2List[0], 2) * parseInt(CO2List[0], 2);
};
