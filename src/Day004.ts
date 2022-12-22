
export default function sectionClean(input:string){
    const pairAssignments:string[] = input.split('\n');
    let count:number = 0;
    for (const pair of pairAssignments){
        // console.log('This pair is : '+ pair);
        const assignments:string[] = pair.split(',');
        // console.log('The pairs are: ' + assignments[0]+' and '+assignments[1]);
        const firstAreas = assignments[0].split('-');
        const secondAreas = assignments[1].split('-');
        // console.log('The first elf will clean: '+firstAreas[0]+' and '+firstAreas[1]);
        // console.log('The second elf will clean '+secondAreas[0]+' and '+secondAreas[1]);
        if (checkAnyOverlap(Number(firstAreas[0]),Number(firstAreas[1]),Number(secondAreas[0]),Number(secondAreas[1]))){
            count++;
        }
    }
    return count;
}

function checkFullOverlap(firstStart:number, firstEnd:number, secondStart:number, secondEnd:number){
    if(firstStart>=secondStart){
        if(firstEnd<=secondEnd){
            return true;
        }
    }

    if (secondEnd<=firstEnd){
        if (secondStart>=firstStart){
            return true;
        }
    }
    return false;
}

function checkAnyOverlap(firstStart:number, firstEnd:number, secondStart:number, secondEnd:number){
    if(firstStart<=secondStart){
        if(firstEnd>=secondStart){
            return true;
        }
    }
    if(firstEnd>=secondEnd){
        if(firstStart<=secondEnd){
            return true;
        }
    }

    if (secondEnd>=firstEnd){
        if (secondStart<=firstEnd){
        return true;
        }
    }
    if (secondStart<=firstStart){
        if (secondEnd>=firstStart){
        return true;
        }
    }
    return false;
}