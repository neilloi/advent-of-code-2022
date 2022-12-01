import { readFileSync } from "node:fs";

const elves = readFileSync('day1.txt', { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, '') // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split('\n\n') // Split on newline

function part1() {
  //do something here

    const calories = elves.map(elf => {
        const calories = elf.split('\n').map(Number);
        return calories.reduce((acc, cur) => acc + cur, 0);
    })

    console.log(calories.sort((a,b) => b - a)[0])
}

function part2() {
    const calories = elves.map(elf => {
        const calories = elf.split('\n').map(Number);
        return calories.reduce((acc, cur) => acc + cur, 0);
    })

    console.log(calories.sort((a,b) => b - a).slice(0,3).reduce((acc, cur) => acc + cur, 0))
}

part1();
part2();