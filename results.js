let h1Div = document.createElement('div');
let heading = document.createElement('h1');
let h1text = document.createTextNode('Promise Results');
document.body.appendChild(h1Div).appendChild(heading).appendChild(h1text);

let mathChain = new Promise(function(resolve, reject) {
    let div = document.createElement('div');
    h1Div.appendChild(div)
    slowMath.add(2, 6) 
    
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p)
        p.appendChild(answer);
        return slowMath.multiply(val, 2);
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p')
        let answer = document.createTextNode(val)
        div.appendChild(p);
        p.appendChild(answer);
        return slowMath.divide(val, 4);
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        return slowMath.subtract(val, 3)
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        return slowMath.add(val, 98)
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        return slowMath.remainder(val, 2)
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        return slowMath.multiply(val, 50)
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        return slowMath.remainder(val, 40)
    })
    .then((val) => {
        console.log(val);
        let p = document.createElement('p');
        let answer = document.createTextNode(val)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        return slowMath.add(val, 32)
    })
    .then((val) => {
        let p = document.createElement('p');
        let answer = document.createTextNode(`The final result is ${val}.`)
        div.appendChild(p).appendChild(answer);
        div.appendChild(answer);
        console.log(`The final result is ${val}.`);
        
    })
   .catch((b) => {
       console.log(b.message);
   })
})


