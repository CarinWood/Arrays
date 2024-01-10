const numbers = [2,6,12,7,22,35];

/* Exercise 1 */

const first = numbers[0]
console.log(first)


/* Exercise 2 */

const last = numbers[numbers.length-1]
console.log(last)

/* Exercise 3 */

const fourth = numbers[3]
console.log(fourth)

/* Exercise 4 */

const second = numbers[1]
const fifth = numbers[4]

const newArray = {second, fifth}

console.log(newArray)

/* Exercise 5 */

const lengthOfArray = numbers.length
console.log("length of numbers array is: " + lengthOfArray)

/* Exercise 6 */

const newLength = numbers.push(28)
console.log(newLength)

/* Med push lägger man till ett nytt värde i slutet på arrayen. 
Den ger tillbaka den nya längden på arrayen som i detta fall har ökat från 6 till 7 */

/* Exercise 7 */

const aNewArray = numbers.unshift(42)
console.log(aNewArray)
/* 
Med unshift lägger man till ett nytt element i början på arrayen. Den ger tillbaka längden
på den nya arrayen.  */

/* Exercise 8 */