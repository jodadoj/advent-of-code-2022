import fs from 'fs/promises';
import organiseSacks from './Day003';

test("test the thing", async () => {

    const input:string =  await fs.readFile("inputs/003-E.txt", { encoding: 'utf8' });  

    expect(organiseSacks(input)).toEqual([157, 70]);

})

test("test the thing", async () => {

    const input:string =  await fs.readFile("inputs/003-RA.txt", { encoding: 'utf8' });  

    console.log(organiseSacks(input));

})