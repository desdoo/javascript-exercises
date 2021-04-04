const fibonacci = function(z) {

    let a = 1
    let b = 1
    let array = [a,b]

if (0>z) {

    return "OOPS"
}

else {


if (typeof z === 'string') {
    z = parseInt(z,10);
}

    for (let i=0 ; i<z ; i++) {

        c = a + b
        array.push(c)
        a = b
        b = c
    }

return array[z-1]

}
}

module.exports = fibonacci