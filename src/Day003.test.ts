import fs from 'fs/promises';

test("test the thing", async () => {

    const input:string =  await fs.readFile("inputs/002-E.txt", { encoding: 'utf8' });  

    //expect( (input)).toBe(12);

})