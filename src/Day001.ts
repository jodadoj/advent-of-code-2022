function findHighest(input: string):number {
    
    //text input as a string
    const elves:string[] = input.split("\n\n");
    //each elves calories as a string
    const eCalories:number[][] = [];
    const sums:number[] = [];
    let highest:number = 0

    for (let elf of elves) {
        const temp:string[] = elf.split('\n');
        const tempNum:number[] = temp.map( (element) => makeNum(element) );
        eCalories.push(tempNum);
    }

    for (let elf of eCalories) {
        let temp:number = elf.reduce(doSum);
        sums.push(temp);
    }

    for (let elf of sums){
        if (elf > highest){
            highest = elf;
        }
    }
        
    return highest;

};

function makeNum(letters:string):number {
    const asNum:string = 0 + letters;//if empty lline it will register 0, does nothing to sum
    return Number(asNum);
}

function doSum(count:number, current:number):number {
    return count + current;
}

export default findHighest;