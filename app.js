for (let nb = 1; nb <= 100; nb++) {
    if (nb % 3 == 0 && nb % 5 == 0) {
        console.log('FizzBuzz')
    } else if (nb % 3 == 0){
        console.log('Fizz')
    } else if (nb % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(nb)
    }
}
