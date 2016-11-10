function gcd(naturalA, naturalB){
    let result = 1;
    let i = 2;
    let min = Math.min(naturalA, naturalB);
    while(i <= min){
        result = i;
        i = i + 1;
        let amariA = naturalA % i;
        let amariB = naturalB % i;
        if(amariA == 0 && amariB == 0){
            return result;
        }
    }
}
