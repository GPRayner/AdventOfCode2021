export const part2 = (input: string[]) => {
  let aim = 0;
  let depth = 0;
  let horizontal = 0;

  input.forEach(command => {
    const parts = command.split(" ");
    var direction = parts[0];
    var amount = Number(parts[1]);

    switch (direction) {
      case "forward":
        horizontal += amount;
        depth += aim * amount
        break;
      case "down":
        aim += amount
        break;
      case "up":
        aim -= amount;
        break;
    }
  });

  return depth * horizontal;
};
