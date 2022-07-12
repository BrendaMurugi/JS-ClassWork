function matrix(a,b){
    let m = []
    for(let i = 0; i < a; i++){
        m[i] = []
    }
    for(let n = 0; n < a; n++){
        for(let o = 0; o < b; o++){
            m[n][o] = o;
        }
    }
    console.log(m);
}
matrix(3,5)