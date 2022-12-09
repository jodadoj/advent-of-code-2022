import findHighest from "./Day001";
import fs from 'fs/promises';

test("test the thing", async () => {

    const input:string =  await fs.readFile("inputs/001-E.txt", { encoding: 'utf8' });  

    expect(findHighest(input)).toBe(24000);

})

test("do the thing", async () => {

    const input:string =  await fs.readFile("inputs/001-RA.txt", { encoding: 'utf8' });  

    console.log(findHighest(input));

})