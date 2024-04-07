const a=[1,2,3,4,5,6,7,8,9,10];


const b=a.filter(function(n){

    return n%2===0;
})



console.log(b);




const c=[24,14,18,19,20,33,48,84,77];


const d=c.filter((n)=>{

    return n%2===1;
})

console.log(d);




const e=[1,2,3,4,5];


const f=e.filter((q)=>{

    return q>3;
})



console.log(f);







let g=[1,2,3,4,5,6,7,8,9,10];



let l=g.filter((k)=>{

    return k<=5;
})


console.log(l);