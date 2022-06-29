function numberOfPairs(gloves){
    const hash = {};
    for (let i = 0; i < gloves.length;i++){
        if(!hash[gloves[i]]) hash[gloves[i]] = 1;
        else hash[gloves[i]] = hash[gloves[i]] +1
    }
    let res = 0;
    Object.keys(hash).forEach(el => res += Math.floor(hash[el]/2))
    return res;
}


console.log(numberOfPairs(['red','green','red']))
