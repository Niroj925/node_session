//these are the older common js modular system
/*
function add(a,b){
    return a+b;
}

function sub(a,b){
    return a>b?a-b:b-a;
}
module.exports = {add,sub};
*/
//latest ecmascript modular system 
function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a>b?a-b:b-a;
}

//we export like this way
export {add};
