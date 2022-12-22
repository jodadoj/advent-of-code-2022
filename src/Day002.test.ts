import RockPaperScissors from "./Day002";
import fs from 'fs/promises';

test("test the thing", async () => {

    const input:string =  await fs.readFile("inputs/002-E.txt", { encoding: 'utf8' });  

    expect(RockPaperScissors(input)).toBe(12);

})

test("do the thing", async () => {

    const input:string =  await fs.readFile("inputs/002-RA.txt", { encoding: 'utf8' });  

    console.log(RockPaperScissors(input));

})