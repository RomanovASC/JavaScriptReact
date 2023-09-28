function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    let a1 = '';
    let a2 = '';
    let a3 = '';
    let a4 = '';
    let a5 = '';
    let a6 = '';
    if (a > 10) {
        a1 = 'a is bigger than 10 ';
    } else {
        a1 = 'a is less than or equal to 10 ';
    }
    if (a == 5) {
        a2 = 'an example of a special case ';
    } else {
        a2 = '';
    }    
    if (a == 15) {
        a3 = '';

    } else {
        a3 = 'but a is not 15 ';
    }
    if (a > 5) {
        a4 = 'and a is greater than 5 ';
    } else {
        a4 = 'and a is less than or equal to 5 ';
    }
    if ((a % 2) == 0) {
        a5 = 'and a is even';
    } else {
        a5 = 'and a is odd';
    }
    a6 = a1 + a2 + a3 + a4 + a5
    console.log(a6)

  }
  
  manyChecks();