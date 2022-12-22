import sectionClean from './Day004';
import fs from 'fs/promises';

test("test the thing", async () => {

    const input:string =  await fs.readFile("inputs/004-E.txt", { encoding: 'utf8' });  

    expect(sectionClean(input)).toBe(4);

})

test("do the thing", async () => {

    const input:string =  await fs.readFile("inputs/004-RA.txt", { encoding: 'utf8' });  

    console.log(sectionClean(input));

})