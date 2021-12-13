export const part1 = (input: string[]) => {
  let depth = 0;
  let horizontal = 0;

  input.forEach(command => {
    const parts = command.split(" ");
    var direction = parts[0];
    var amount = Number(parts[1]);

    switch (direction) {
      case "forward":
        horizontal += amount;
        break;
      case "down":
        depth += amount;
        break;
      case "up":
        depth -= amount;
        break;
    }
  });

  return depth * horizontal;
};
