function xor(boolA, boolB){
    if(boolA && boolB){
        let a = boolA && boolB;
        return !a;
    }else{
    if(boolA || boolB){
        let a = boolA || boolB;
        return a;
    }
    }
}