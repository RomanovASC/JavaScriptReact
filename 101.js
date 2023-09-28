//let a = Math.floor(Math.random() * 100);
let a = 1;

if (a > 10) {
    if (a > 5) {
        if ((2 * a + 1) > 4) {
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
        if ((2 * a + 1) > 4) {
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
