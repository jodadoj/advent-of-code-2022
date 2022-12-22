
// let items ={
//     a:0,
//     b:0,
//     c:0,
//     d:0,
//     e:0,
//     f:0,
//     g:0,
//     h:0,
//     i:0,
//     j:0,
//     k:0,
//     l:0,
//     m:0,
//     n:0,
//     o:0,
//     p:0,
//     q:0,
//     r:0,
//     s:0,
//     t:0,
//     u:0,
//     v:0,
//     w:0,
//     x:0,
//     y:0,
//     z:0,
//     A:0,
//     B:0,
//     C:0,
//     D:0,
//     E:0,
//     F:0,
//     G:0,
//     H:0,
//     I:0,
//     J:0,
//     K:0,
//     L:0,
//     M:0,
//     N:0,
//     O:0,
//     P:0,
//     Q:0,
//     R:0,
//     S:0,
//     T:0,
//     U:0,
//     V:0,
//     W:0,
//     X:0,
//     Y:0,
//     Z:0
// }

export default function organiseSacks(input: string):number[]{

    let allDuplicates:{[character:string]:[number,number]}={};
    let allBadges:{[character:string]:[number,number]}={};
    //defines a list of items which are duplicates and takes their number and the multiplier to be applied

    const allSacks:string[] = input.split('\n');
    let firstSack='';
    let secondSack = '';
    let thirdSack = '';
    let count = 0;
    for (const ithSack of allSacks){

        count++;

        if(count%3===1){
            firstSack = ithSack;
        }
        if(count%3===2){
            secondSack = ithSack;
        }
        if(count%3===0){
            thirdSack = ithSack;

            // console.log('Checking the sacks of '+firstSack+' and '+secondSack+' and '+thirdSack);
            const badge = findBadges(firstSack.split(''),secondSack.split(''),thirdSack.split(''));

            // console.log('found a badge!: '+badge);

            const badgeMultiplier = badge===badge.toUpperCase() 
            ? badge.toLowerCase().charCodeAt(0)-96+26 : badge.charCodeAt(0)-96;

            if (!allBadges[badge]){
                allBadges[badge]=[0,0];
            }
            allBadges[badge]=[allBadges[badge][0]+=1, badgeMultiplier];

            // console.log('Added the badge '+badge+' along with it\'s multiplier '+badgeMultiplier);

        }

        const fullSack:number=ithSack.length;
        const halfSack:number=Math.floor(fullSack/2);

        // console.log('The sack is '+fullSack+' items big in full and '+halfSack+' split in half!')

        const firstCompartment:string=ithSack.substring(0, halfSack);
        const secondCompartment:string=ithSack.substring(halfSack);

        // console.log('We took a sack containing '+ithSack+' and split it into'+'\n'
        // +firstCompartment+' and '+secondCompartment);

        const duplicate = findDuplicates(firstCompartment.split(''), secondCompartment.split(''));

        const multiplier = duplicate===duplicate.toUpperCase() 
        ? duplicate.toLowerCase().charCodeAt(0)-96+26 : duplicate.charCodeAt(0)-96;

        // console.log('We found that '+duplicate+' appeared twice with a multiplier of '+multiplier);

        if (!allDuplicates[duplicate]){
            allDuplicates[duplicate]=[0,0];
        }
        allDuplicates[duplicate]=[allDuplicates[duplicate][0]+=1, multiplier];
    }


    const duplicateList:string[] = Object.keys(allDuplicates);
    let total:number = 0;

    console.log('And ended up with a list of duplicates '+duplicateList);
    console.log('Adding that all together we found that the total value we priority was: '+'\n')

    for (const item of duplicateList){
        const currentDuplicate:number[] = allDuplicates[item];
        total+=currentDuplicate[0]*currentDuplicate[1];
        // console.log(currentDuplicate+' making '+total+'\n');
    }


    const badgeList:string[] = Object.keys(allBadges);
    let badgeTotal:number = 0;

    console.log('And ended up with a list of badges '+badgeList);
    console.log('Adding that all together we found that the total value we priority was: '+'\n')

    for (const item of badgeList){
        const currentbadge:number[] = allBadges[item];
        badgeTotal+=currentbadge[0]*currentbadge[1];
        // console.log(currentbadge+' making '+total+'\n');
    }

    console.log('Leaving a total of '+total+' for items and '+badgeTotal+' for badges.');
    
    return [total, badgeTotal];
}

function findDuplicates(firstCompartment:string[], secondCompartment:string[]):string{
    let itemList:{ [character:string]:number } = {};
    for (let item of firstCompartment){
        if (!itemList[item]){
            itemList[item]=1;
        }
    }
    for (let item of secondCompartment){
        if (itemList[item]){
            // console.log('found '+ item+' was the double!');
            return item;
        }
    }
    return '';
}

function findBadges(firstSack:string[], secondSack:string[], thirdSack:string[]):string{
    let itemList:{ [character:string]:number } = {};
    for (let item of firstSack){
        if (!itemList[item]){
            itemList[item]=1;
        }
    }
    for (let item of secondSack){
        if (itemList[item]===1){
            // console.log('found '+ item+' was a double!');
            itemList[item]+=1;
        }
    }
    for (let item of thirdSack){
        if (itemList[item]===2){
            // console.log('found '+ item+' was a triple!');
            itemList[item]+=1;
        }
    }
    const allCounted = Object.keys(itemList);

    for (let search of allCounted){
        if (itemList[search]===3){
            return search;
        }
    }

    return '';
}