let op;
let op1 = '';
let result = 0;
let a;

function opp() {
    a = Number(document.getElementById('input').value);
    document.getElementById ('input').value = '';
    switch (op1) {
        case '/':
            result = result / a;
            console.log(result);
            break;
        case '*':
            result = result * a;
            console.log(result);
            break;
        case '+':
            result = result + a;
            console.log(result);
            break;
        case '-':
            result = result - a;
            console.log(result);
            break;
        case '':
            result = a;
            console.log(result);
            break;
    }
    op1 = op;
}

function calk() {
    a = Number(document.getElementById('input').value);
    document.getElementById ('input').value = '';
    switch (op1) {
        case '/':
            result = result / a;
            console.log(result);
            break;
        case '*':
            result = result * a;
            console.log(result);
            break;
        case '+':
            result = result + a;
            console.log(result);
            break;
        case '-':
            result = result - a;
            console.log(result);
            break;
        case '':
            result = a;
            console.log(result);
            break;
    }
    
    let parent = document.querySelector('#output');
    let p = document.createElement('p');
    p.textContent = String(result);
    parent.append(p);
    result = 0;
    op1 = '';
}
