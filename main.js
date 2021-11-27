// 1- Fizz buzz
const fizzBuzz = (n, m1, m2) => {
    let res1 = n % m1
    let res2 = n % m2
    return (`${res1 === 0 ? 'fizz' : ''}${res2 === 0 ? 'buzz' : ''}` || n) 
}

const printNumbersFizzBuzz = (a, b, m1, m2) => {
    let arr = []
    for (let i = a; i <= b; i++) arr.push(fizzBuzz(i, m1, m2))
    return (arr.toString().replace(/,/gi, ' '))
}

//console.log(printNumbersFizzBuzz(1, 100, 3, 5))

// 2- Fibonacci
const fibonacci = (n) => {
    let seq = [0, 1]
    if (n == 0 || n == 1) return n
    for (let i = 1; i < n; i++) {
        let s1 = seq[0],
            s2 = seq[1]

        seq[0] = s2
        seq[1] = s2 + s1
    }
    return seq[1]
}

//console.log(fibonacci(0))
//console.log(fibonacci(1))
//console.log(fibonacci(3))

// 3- word Repetition Count
const wordCount = (text) => {
    let wordArr = text.trim().toLowerCase().replace(/\t|\n/gi, '').replace(/\W/gi, ',').split(',')
    let wordCount = {}
    wordArr.forEach((w, i) => {
        if (w) {
            wordCount[w] = wordCount[w] ? wordCount[w] + 1 : 1
        }
    })
    return (wordCount)
}

//console.log(wordCount("Hi how are things? how are you?. Are you a developer? I am also a developer"))

module.exports = { printNumbersFizzBuzz, wordCount, fibonacci }