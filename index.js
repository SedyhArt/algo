// let arr = [5, 6, 2, 7, 21, 7];
// let count = 0;
//
//
// const bubleSort = (arr) => {
//     for (let i = arr.length - 1; i > 0 ; i--) {
//         for (let k = 0; k < i; k++) {
//             if (arr[i] < arr[k]) {
//                 let a = arr[i];
//                 let b = arr[k];
//                 arr[i] = b;
//                 arr[k] = a;
//             }
//         }
//     }
//     return arr;
// }
//
// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length - 1 ; i++) {
//         for (let k = i + 1; k < arr.length; k++) {
//             let minVal = arr[i];
//             let curVal = arr[k];
//             if (minVal > curVal) {
//                 arr[i] = curVal;
//                 arr[k] = minVal;
//             }
//         }
//     }
//     return arr;
// }
//
// const heapSort = (arr) => {
//     return new Set(arr);
// }
//
//
// console.log(heapSort(arr));

// const palindrom = 'Лег на храм и дивен и невидим архангел';

// const isPalindrom = (string) => {
//     const noSpaceString = string.replace(/ /g,'');
//     for (let i = 0; i < noSpaceString.length; i++) {
//         const first = noSpaceString[i].toLowerCase();
//         const last = noSpaceString[noSpaceString.length - (1 + i)].toLowerCase();
//         console.log(first, last, 'index: ', i);
//         if (first !== last) {
//             return false;
//         }
//     }

//     return  true;
// };

// console.log(isPalindrom(palindrom));

//////////////////

// const tree = [{
//     v: 1,
//     n: [
//         {
//             v: 2,
//             n: [
//                 {
//                     v: 3,
//                 },
//                 {
//                     v: 3
//                 },
//                 {
//                     v: 3,
//                     n: [
//                         {
//                             v: 4,
//                             n: [
//                                 {
//                                     v: 5
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             v: 2,
//         },
//     ]
// }

// ]

// const getTree = (tree) => {
//     let totalSum = tree.v;
//     console.log(tree.v, 'in tree')

//     if (tree.n) {
//         for (let i = 0; i < tree.n.length; i++) {
//             totalSum += getTree(tree.n[i]);
//         }
//     }

//     return totalSum;
// }

// console.log(getTree(tree));

///////////////////

// На вход даны отрезки [a1, a2], [b1, b2], ...
// Нужно вернуть набор непересекающихся отрезков, такой, что их объединение совпадает с объединением входных отрезков
// Примеры
// Вход: [1, 5] [4, 8] [0, 2] [10, 15]
// Выход: [0, 8] [10, 15]
// Вход: [1, 3] [100, 200] [2, 4]
// Выход: [1, 4] [100, 200]

// [0, 2] [1, 5] [4, 8]  [10, 15]

// const foo = (arr) => {
//     const result = [];
//     const sortArr = arr.sort((a, b) => a[0] - b[0]);

//     for (let i = 0; i < sortArr.length; i++) {
//         const item = sortArr[i];
//         const nextItem = sortArr[i+1];

//         if (!nextItem) {
//             break;
//         }

//         if (!result.length) {
//             result.push(item);
//         }

//         if (item[1] > nextItem[0]) {
//             result[result.length - 1][1] = nextItem[1] > result[result.length - 1][1] ? nextItem[1] : result[result.length - 1][1];
//         } else {
//             result.push(nextItem);
//         }

//     }

//     return result;

// }

// console.log(foo([[1, 5], [4, 8], [0, 2], [10, 15]]));
// [1, 4], [2, 3]

//////////////////////////////

// let q = 'user.name.firstname=Bob';
// let a = 'firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';

// function convertQueryToMap(query) {
//     const result = {};
//     const decodedValues = query.split('&').map(val => decodeURIComponent(val).split('.'));

//     decodedValues.forEach((elem) => {
//         console.log(elem);
//         let lastLink = null;

//         elem.forEach((key) => {

//             if (lastLink) {

//                 if (!lastLink[key]) {

//                     if (key.includes('=')) {
//                         const [k, v] = key.split('=');

//                         lastLink[k] = v;
//                     } else {
//                         lastLink[key] = {};
//                         lastLink = lastLink[key];
//                     }
//                 } else {
//                     lastLink = lastLink[key];
//                 }

//             } else {

//                 if (key.includes('=')) {
//                     const [k, v] = key.split('=');
//                     result[k] = v;
//                 } else if (!result[key]) {
//                     result[key] = {}
//                 }

//                 lastLink = result[key];
//             }

//         })
//     });
//     console.log(result);
//     return result;
// }

// convertQueryToMap(a);

//////////////////////////

// const way = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"];

// function dirReduc(arr) {
//     let dir = {
//         "NORTH": "SOUTH",
//         "SOUTH": "NORTH",
//         "WEST": "EAST",
//         "EAST": "WEST"
//     };

//     const stack = [];

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];

//         if (dir[item] === stack[stack.length - 1]) {
//             stack.pop();
//             console.log(item, 'item')
//         } else {
//             stack.push(item);
//         }
//     }
//     console.log(stack);
//     return stack;
// }

// dirReduc(way);

///////////////////////////////////

// НАЙТИ МАКСИМАЛЬНОЕ КОЛ-ВО ЕДИНИЦ, ПРИ УСЛОВИИ, ЧТО МОЖНО ЗАМЕНИТЬ ОДИН НОЛЬ
// const example = [0, 0, 0, 0, 0, 0, 0, 0];

// function maxOnesLenght(arr) {

//     let onesRow = 0;
//     let maxOnesRow = 0;
//     let isChanged = false;

//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i];

//         if (item === 1) {
//             onesRow++;
//             maxOnesRow = maxOnesRow > onesRow ? maxOnesRow : onesRow;
//         }

//         if (item === 0) {

//             if (isChanged) {
//                 maxOnesRow = maxOnesRow > onesRow ? maxOnesRow : onesRow;
//                 onesRow = 0;
//                 isChanged = false;
//             } else {
//                 onesRow++;
//                 maxOnesRow = maxOnesRow > onesRow ? maxOnesRow : onesRow;
//                 isChanged = true;
//             }
//         }
//     }
//     console.log(maxOnesRow)
//     return maxOnesRow;
// }

// maxOnesLenght(example);

///////////////////////////////////////////////

// const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// function sortByLetter(words) {
//     console.log(words.sort());
// }

// sortByLetter(words);

// function groupAnagrams(list) {
//     const obj = list.reduce((acc, str, index) => {
//         const sortStr = str.split('').sort().join('');

//         if (acc[sortStr]) {
//             acc[sortStr].push(list[index]);
//         } else {
//             acc[sortStr] = [list[index]];
//         }

//         return acc;
//     }, {});

//     return Object.values(obj);
// }

// let a = (done) => {
//     console.log(1);
//     setTimeout(done, 1000)
// };
// let b = () => { console.log('complete'); };

// // let when = (fn) => {
// //     return new Promise(fn)
// // };

// let when = fn => {

//     return {
//         then: (arg) => fn(arg)
//     }
// }

// when(a).then(b);

// Необходимо написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных символов и false в противном случае.

// const isEqualSymbols = (a, b) => {
//     console.log([...a].sort().join('') === [...b].sort().join(''));
// }

// isEqualSymbols("сон", "нос") // => true
// isEqualSymbols("тик", "ток") // => false
// isEqualSymbols("ттк", "ткк") // => false
// isEqualSymbols("ттка", "ткк") // => false

// const str = 'Гнида осбака 35 тыловая.'

// const regexp = /\s\d\d\s/;
// console.log(str.match(regexp));

// Криптография.
// // Создание RSA ключа, преобразование строки в байты, зашифровка этого сообщения по алгоритму RSA, дешифровка и преобразование обратно в строку
// const af = async () => {
//     const keyPair = await window.crypto.subtle.generateKey(
//         {
//             name: "RSA-OAEP",
//             modulusLength: 4096,
//             publicExponent: new Uint8Array([1, 0, 1]),
//             hash: "SHA-256"
//         },
//         true,
//         ["encrypt", "decrypt"]
//     );

//     const { privateKey, publicKey } = keyPair;

//     let enc = new TextEncoder();
//     let encoded = enc.encode("ХУЙ");
//     const encryptMessage = await window.crypto.subtle.encrypt(
//         {
//             name: "RSA-OAEP",
//         },
//         publicKey,
//         encoded
//     );

//     console.log(encryptMessage);

//     const val = await window.crypto.subtle.decrypt(
//         { name: "RSA-OAEP" },
//         privateKey,
//         encryptMessage
//     );

//     let dec = new TextDecoder();
//     const decodeMessage = dec.decode(val);
//     console.log(decodeMessage);
// }

// af();

// const arr = [1, 1, [2, 2, 2, [3, 3], 2], 1, 1];
//
// const arrSum = (a) => {
//     return a.reduce((acc, elem) => {
//         if (Array.isArray(elem)) {
//             return acc + arrSum(elem);
//         }
//
//         return acc + elem;
//     }, 0);
// }
//
// console.log(arrSum(arr));

// console.log(1) // 1
//
// setTimeout(() => console.log(2), 0) // 5
//
// setTimeout(() => console.log(4), 0) // 6
//
// Promise.resolve().then(() => console.log(5)) // 3
//
// Promise.resolve().then(() => setTimeout(() => console.log(6), 0)) // 8
//
// Promise.resolve().then(() => console.log(7)) // 4
//
// setTimeout(() => console.log(8), 0) // 7
// console.log(9) // 2

// 2 4 8 макро
// 5 sT(6) 7 микро !!! всегда первые

// 2 4 8 6 макро
// [] микро !!! всегда первые

// const animals = {
//   run() {
//     console.log('run')
//   },
// }
//
// const rabbit = {
//   jump() {
//     console.log('jump')
//   },
// }
//
// rabbit.__proto__ = animals
//
// // animals.jump()
// console.log(rabbit)
//
// const obj = { ok: 'ok' } // ссылка
//
// obj.ok = 3
//
// const obj3 = { ok: 'ok' }
//
// console.log(obj === obj3)

// const curry = (fn) => {
//   return (a) => {
//     return (b) => {
//       return fn(a, b)
//     }
//   }
// }
//
// const sum = (a, b) => a + b
//
// const sumCurry = curry(sum)
// console.log(sumCurry(2)(3))

// const exampleString = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBB'
//
// const calcLetter = (str) => {
//   let res = ''
//   let count = 0
//   let prevLetter = ''
//   for (let i = 0; i < str.length; i++) {
//     if (!str[i].match(/[A-Z]/g)) {
//       return false
//     }
//     if (str[i] === prevLetter) {
//       count++
//     }
//     if (str[i] !== prevLetter) {
//       res = res + `${count && count > 1 ? prevLetter + count : prevLetter}`
//       count = 1
//       prevLetter = str[i]
//     }
//   }
//   res = res + `${count && count > 1 ? prevLetter + count : prevLetter}`
//   return res
// }
// calcLetter(exampleString)

// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"

// let arr = [1, 4, 5, 2, 3, 9, 8, 11, 0]
//
// const groupInt = (arr) => {
//   const sortedArr = arr.sort((a, b) => a - b)
//   let res = ''
//   const filtArr = arr.filter(
//     (item, index) => arr[index - 1] !== item - 1 || arr[index + 1] !== item + 1
//   )
//
//   // for (let i = 0; i < arr.length; i++) {
//   //
//   // }
// }
//
// groupInt(arr)

const exmapleInput = [
  [1, 2],
  [1, 3],
  [2, 4],
  [2, 3],
]

// const maxGuests = (arr) => {
//   const days = {}
//   for (let i = 0; i < arr.length; i++) {
//     let arrive = arr[i][0]
//     let leave = arr[i][1]
//
//     if (!days[arrive]) {
//       days[arrive] = {
//         arrive: 0,
//         leave: 0,
//       }
//     }
//     if (!days[leave]) {
//       days[leave] = {
//         arrive: 0,
//         leave: 0,
//       }
//     }
//     days[arrive]['arrive']++
//     days[leave]['leave']++
//   }
//
//   let maxPerson = 0
//   let currentMax = 0
//
//   Object.values(days).forEach((day) => {
//     currentMax -= day.leave
//     currentMax += day.arrive
//     maxPerson = Math.max(maxPerson, currentMax)
//   })
// }
//
// maxGuests(sample);

// const createAsync = (order) => () => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(order), Math.round(Math.random() * 1000))
//   })
// }
//
// const arrayForRequest = Array(10)
//   .fill(0)
//   .map((_el, index) => createAsync(index))
//
// const fn = (asyncArr, limit, callback) => {
//   let count = 0
//   let success = 0
//   const results = Array(asyncArr.length)
//
//   const consumer = (index) => (res) => {
//     if (success === asyncArr.length - 1) {
//       callback(results)
//       return
//     }
//     console.log(success)
//     results[index] = res
//     success++
//     asyncArr[++count]().then(consumer(count))
//   }
//
//   const a = Promise.all([
//     asyncArr
//       .slice(0, limit)
//       .map((elem, index) => elem(index).then(consumer(count++))),
//   ])
// }

// fn(arrayForRequest, 4, console.log)

// async function processUrls(urls, limit, callback) {
//   const results = []
//   let index = 0
//   let completed = 0 // Количество завершенных запросов
//
//   async function fetchData(url, currentIndex) {
//     const response = await url()
//     console.log(response)
//
//     return { response, currentIndex }
//   }
//
//   async function fetchNext() {
//     while (index < urls.length) {
//       const url = urls[index]
//       const currentIndex = index
//       index++
//
//       const { response, idx = currentIndex } = await fetchData(
//         url,
//         currentIndex
//       )
//       results[idx] = response
//
//       completed++
//       if (completed === urls.length) {
//         // Все запросы завершены, вызываем callback с результатами
//         callback(results)
//         return
//       }
//     }
//   }
//
//   // Создаем пул потоков с лимитом
//   const pool = new Array(limit).fill(fetchNext)
//
//   // Запускаем потоки
//   await Promise.all(pool.map(async (fn) => fn()))
// }
//
// function callback(results) {
//   console.log(results) // Распечатываем массив с результатами
// }
//
// processUrls(arrayForRequest, 4, console.log)

// const reverseWords = (str) => {
//   const splitWords = str.split(' ')
//   let res = []
//   for (let i = splitWords.length - 1; i >= 0; i--) {
//     res.push(splitWords[i])
//   }
//
//   return res.join(' ')
// }
//
// console.log(reverseWords('Hello world pidor!'))
// console.log(reverseWords('Hello world!')) // Вывод: "world! Hello"
// console.log(reverseWords('The quick brown fox')) // Вывод: "fox brown quick The"

// const isPalindrome = (num) => {
//   let origNum = num
//   let reverseNum = 0
//   while (origNum > 0) {
//     reverseNum = reverseNum * 10 + (origNum % 10)
//     origNum = Math.floor(origNum / 10)
//   }
//
//   return reverseNum === num
// }
//
// console.log(isPalindrome(121)) // Вывод: true
// console.log(isPalindrome(12321)) // Вывод: true
// console.log(isPalindrome(12345)) // Вывод: false

// const mergedSortedArray = (arr1, arr2) => {
//   const res = []
//   let l = 0
//   let r = 0
//
//   while (l < arr1.length && r < arr2.length) {
//     if (arr1[l] <= arr2[r]) {
//       res.push(arr1[l])
//       l++
//     } else {
//       res.push(arr2[r])
//       r++
//     }
//   }
//
//   while (l < arr1.length) {
//     res.push(arr1[l])
//     l++
//   }
//
//   // Добавляем оставшиеся элементы из arr2, если есть
//   while (r < arr2.length) {
//     res.push(arr2[r])
//     r++
//   }
//
//   return res
// }
//
// const arr1 = [1, 3, 5, 7]
// const arr2 = [2, 4, 6]
//
// console.log(mergedSortedArray(arr1, arr2))

// const arr = [1, 2, 3, 2, 4, 1, 5, 6, 3]
//
// const countUniqueElements = (arr) => {
//   let count = 1
//   let sortedArr = arr.sort()
//
//   for (let i = 1; i < sortedArr.length; i++) {
//     if (sortedArr[i] !== sortedArr[i - 1]) {
//       count++
//     }
//   }
//
//   return count
// }
// console.log(countUniqueElements(arr)) // Вывод: 6

// Инициализировать две переменные: maxSum и currentSum. Установить их равными первому элементу массива.
//     Пройти по остальным элементам массива, начиная со второго.
//     Для каждого элемента:
//     Обновить currentSum как максимум между текущим элементом и суммой текущего элемента с предыдущим currentSum.
//     Обновить maxSum как максимум между текущим maxSum и currentSum.
//     По окончании цикла вернуть maxSum - это будет максимальная сумма подмассива.
//
// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//
// const findMaxSubarraySum = (arr) => {
//   let maxSum = arr[1]
//   let currentSum = arr[1]
//
//   for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.max(arr[i], currentSum + arr[i])
//     maxSum = Math.max(currentSum, maxSum)
//   }
//
//   return maxSum
// }
//
// console.log(findMaxSubarraySum(arr)) // Вывод: 6
//
// const isAnagram = (str1, str2) => {
//   const map1 = {}
//   const map2 = {}
//
//   for (let char of str1) {
//     map1[char] = (map1[char] || 0) + 1
//   }
//
//   for (let char of str2) {
//     map2[char] = (map2[char] || 0) + 1
//   }
//
//   for (let char in map1) {
//     if (map1[char] !== map2[char]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// console.log(isAnagram('rr', 'silent'))
// console.log(isAnagram('listen', 'silent'))

// const findFirstNonRepeatingCharacter = (str) => {
//   const map = {}
//
//   for (let char of str) {
//     map[char] = (map[char] || 0) + 1
//   }
//
//   for (let char in map) {
//     if (map[char] === 1) {
//       return char
//     }
//   }
//
//   return null
// }
//
// console.log(findFirstNonRepeatingCharacter('aabccd')) // ожидаемый результат: "b"
// console.log(findFirstNonRepeatingCharacter('aabbccdd')) // ожидаемый результат: null
// console.log(findFirstNonRepeatingCharacter('abcabc'))
//
// const areArraysEqual = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) {
//     return false
//   }
//
//   for (let i in arr1) {
//     if (arr1[i] !== arr2[i]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// console.log(areArraysEqual([1, 2, 3], [1, 2, 3])) // true
// console.log(areArraysEqual([1, 2, 3], [3, 2, 1])) // false
// console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4])) // false

// const isPalindromePermutation = (str) => {
//   if (str === '') {
//     return true
//   }
//   const map = {}
//   let countOdd = 0
//
//   for (let i = 0; i < str.length; i++) {
//     map[str[i]] = (map[str[i]] || 0) + 1
//
//     if (map[str[i]] % 2 === 1) {
//       countOdd++
//     } else {
//       countOdd--
//     }
//   }
//
//   if (countOdd > 1) {
//     return false
//   }
//
//   return true
// }
//
// // Примеры
// console.log(isPalindromePermutation('tactcoa')) // Ожидаемый вывод: true
// console.log(isPalindromePermutation('hello')) // Ожидаемый вывод: false
// console.log(isPalindromePermutation('aab')) // Ожидаемый вывод: true
// console.log(isPalindromePermutation('aaabbbc')) // Ожидаемый вывод: false




const linkedListToArray = (list) => {
  const listArr = [list.value];
  let next = list.next;
  while(next) {
    listArr.push(next.value);
    next = next.next;
  }
  return listArr;
}
//
// const reverseLinkedList = (list) => {
//   const listArr = linkedListToArray(list);
//
//   function CreateNodeList (value) {
//     return ({
//       value,
//       next: null
//     })
//   }
//
//   const reversedList = {
//     value: listArr[listArr.length - 1],
//     next: null
//   };
//   let lastNode = reversedList;
//
//   for (let i = listArr.length - 2; i >= 0; i--) {
//     lastNode.next = new CreateNodeList(listArr[i]);
//     lastNode = lastNode.next;
//   }
//
//   return reversedList;
// };
// const list1 = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: {
//           value: 5,
//           next: null
//         }
//       }
//     }
//   }
// };
//
// const reverseLinkedList = (list) => {
//   let previous = null;
//   let current = list;
//
//   while(current) {
//     const next = current.next;
//     current.next = previous;
//     previous = current;
//     current = next;
//   }
//
//   return previous;
// }
//
//
//
// const reversed1 = reverseLinkedList(list1);
// console.log(linkedListToArray(reversed1));

// const list1 = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: {
//           value: 5,
//           next: null
//         }
//       }
//     }
//   }
// };

// const getLinkedListLength = (list) => {
//   let current = list;
//   let length = 0;
//
//   while (current) {
//       length++;
//       current = current.next;
//   }
//
//   return length;
// }
//
// const getLinkedListLengthRecursively = (list) => {
//   if (!list) {
//     return 0;
//   }
//
//   return 1 + getLinkedListLengthRecursively(list.next);
// }
//
// console.log(getLinkedListLengthRecursively(list1));


const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: null
          }
        }
      }
    }
  }
};

const removeDuplicatesFromLinkedListMutation = (list) => {
  let current = list;

  while (current.next) {
    let next = current.next;

    if (current.value === next.value) {
      current.next = next.next;
      next = next.next;
    } else {
      current = next;
      next = current.next;
    }
  }
}

const removeDuplicatesFromLinkedListCreateNewList = (list) => {
  let current = list.next;
  const newList = list;
  let previous = list;

  while (current.next) {
    if (current.value !== previous.value) {
      newList.next = previous;
      previous = current;
    }
  }

  return newList;

}

const newList = removeDuplicatesFromLinkedListCreateNewList(list);
console.log(linkedListToArray(list)); // [1, 2, 3, 4]
