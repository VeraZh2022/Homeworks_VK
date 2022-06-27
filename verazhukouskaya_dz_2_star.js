/*Вера Жуковская
Telegram - @verisola

JS. HW_2 (2я домашка по JS со звездочками):*/

/*1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1*/
const tot = 2 ** 10
console.log(tot)
//или
const total = Math.pow (2,10)
console.log(total)

/*1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2*/
function Degree(power) {
    const total = Math.pow (2,power)
    console.log(total)
}
Degree(10)

/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :),
во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)
*/

let happy_tree = ""
for (let index = 1; index <= 5; index++) { 
    happy_tree += ":)".repeat(index);
    if (index < 5) {
        happy_tree += "\n"
    }
}
console.log(happy_tree)

/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль
(как в условии смайлик), а также количество строк для вывода*/
 
function ShowTree(stroka, rows) {
    let happy_tree = ""
    for (let index = 1; index <= rows; index++) { 
        happy_tree += stroka.repeat(index);
        if (index < rows) {
            happy_tree += "\n"
        }
    }
    console.log(happy_tree)    
}
ShowTree(":)", 5)

/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль,
сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв

Проверки: 'case', 'Case', 'Check-list'*/

function countLetters(word) {
    let vowelsNum = 0
    let consonantsNum = 0

    const vowels = word.match(/[aeiou]/gi)
    const consonants = word.match(/[bcdfghjklmnpqrstvwxyz]/gi)

    if (vowels) {
        vowelsNum = vowels.length
    }
    if (consonants) {
        consonantsNum = consonants.length
    }
    console.log(`String "${word}" consists of ${vowelsNum} vowels and ${consonantsNum} consonants`)
}

countLetters("Case")
countLetters("case")
countLetters("Check-list")
countLetters("Cosmo22 politan 0 !!?d!")
countLetters("May-June. July-August")
countLetters("природа")
countLetters("g$l%o&b!a{l")
countLetters("Leno4ka")

/*4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'*/

function isPalindrome(word) {
    const palindrome = word.toLowerCase() == word.split('').reverse().join('').toLowerCase()
    console.log(`Word "${word}" is palindrom: ${palindrome}`)
}
isPalindrome("ABBa")
isPalindrome("abba")
isPalindrome("Abba")
isPalindrome("ABBA")
isPalindrome("HoMe")
isPalindrome("home")