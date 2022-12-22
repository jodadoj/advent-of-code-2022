type Rock = "A"|"X";
type Paper = "B"|"Y";
type Scissors = "C"|"Z";
type RPS = Rock|Paper|Scissors;

const Rock = ["A","X"];
const Paper = ["B","Y"];
const Scissors = ["C","Z"];
const RPS = [Rock,Paper,Scissors];

export default function RockPaperScissors(input: string):number{
    //want to seperate each round into two by the new line
    const roundsOfRPS:string[] = input.split('\n');
    // console.log(roundsOfRPS);
    let total=0;
    for (let round of roundsOfRPS){
        const thisRound:string[] = round.split('');
        const theirThrow = thisRound[0] as RPS;
        const yourThrow = thisRound[2] as RPS;
        total += calculateThrow(theirThrow, yourThrow);
    }
    console.log(total);
    return total;
}

function calculateScore(theirThrow:RPS, yourThrow:RPS){
    //console.log('they threw ' + theirThrow + ' and you threw ' + yourThrow + ' yes: ' + yourThrow);
    let score = 0;
    if (Rock.includes(yourThrow)){
        score +=1;
        if (Scissors.includes(theirThrow)){
            score +=6;
        }
        if (Rock.includes(theirThrow)){
            score +=3;
        }
    }
    if (Paper.includes(yourThrow)){
        score +=2;
        if (Rock.includes(theirThrow)){
            score +=6;
        }
        if (Paper.includes(theirThrow)){
            score +=3;
        }
    }
    if (Scissors.includes(yourThrow)){
        score +=3;
        if (Paper.includes(theirThrow)){
            score +=6;
        }
        if (Scissors.includes(theirThrow)){
            score +=3;
        }
    }
    //console.log(score);
    return score;
}

function calculateThrow(theirThrow:RPS, yourInstruction:RPS){
    //console.log('they threw ' + theirThrow + ' and you threw ' + yourThrow + ' yes: ' + yourThrow);
    const win =['Z'];
    const draw = ['Y'];
    const lose = ['X'];
    let score = 0;
    if (Rock.includes(theirThrow)){
        if (win.includes(yourInstruction)){
            score +=6;
            score +=2;
        }
        if (draw.includes(yourInstruction)){
            score +=3;
            score +=1;
        }
        if (lose.includes(yourInstruction)){
            score +=3;
        }
    }
    if (Paper.includes(theirThrow)){
        if (win.includes(yourInstruction)){
            score +=6;
            score +=3;
        }
        if (draw.includes(yourInstruction)){
            score +=3;
            score +=2;
        }
        if (lose.includes(yourInstruction)){
            score +=1;
        }
    }
    if (Scissors.includes(theirThrow)){
        if (win.includes(yourInstruction)){
            score +=6;
            score +=1;
        }
        if (draw.includes(yourInstruction)){
            score +=3;
            score +=3;
        }
        if (lose.includes(yourInstruction)){
            score +=2;
        }
    }
    //console.log(score);
    return score;
}