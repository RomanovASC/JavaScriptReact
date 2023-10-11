let a = Math.floor(Math.random() * 100);

let b = (a > 10 ? a : a * 2) > 5 ? (2 * a) + 1 : (a < 3 ? 1 : 2 * (a - 2)) > 4 ? 5 : (a % 2 == 0 ? 6 : 7);

console.log("?", b)

if (a > 10) {
    if (a > 5) {
        console.log(2 * a + 1)        
    } else {
        if (a < 3) {
            
            switch (a % 2) {
                case 0:
                    console.log(6)
                    break
                default:
                    console.log(7)
                    break
            }
        } else {
            if (2 * (a - 2) > 4) {
                console.log(5)
            } else {
                
                switch (a % 2) {
                    case 0:
                        console.log(6)
                        break
                    default:
                        console.log(7)
                        break
                }
            }
        }
    }
} else {
    if (a * 2 > 5) {
        console.log(2 * a + 1)
    } else {
        if (a < 3) {
            
            switch (a % 2) {
                case 0:
                    console.log(6)
                    break
                default:
                    console.log(7)
                    break
            }
        } else {
            if (2 * (a - 2) > 4) {
                console.log(5)
            } else {
                
                switch (a % 2) {
                    case 0:
                        console.log(6)
                        break
                    default:
                        console.log(7)
                        break
                }
            }
        }
    }
}
