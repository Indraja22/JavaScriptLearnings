let arr = [3,4,6,8,10]
let double_each = arr.map((n)=>n*2);
console.log(double_each);

let names = ["mumbai","delhi","new york"];
let upper_case_names = names.map((name1) => name1.toUpperCase());
let captialize_names = names.map((name1) => name1.charAt(0).toUpperCase() + name1.slice(1));
console.log(captialize_names);

let nums = [14,29,21,73,65,38,22,31,93,92,88];
const even_nums = nums.filter((num) => num % 2===0);
console.log(even_nums);

let strs = ["happy","glad","jolly","apparent","noteworthy"];
let strsWithLengthGreaterThanFive = strs.filter((x)=>x.length > 5);
console.log(strsWithLengthGreaterThanFive);

const sum_of_nums = nums.reduce((acc,currVal) => {
    return acc + currVal
},0);
console.log(sum_of_nums);

let sentence_arr = ["Hi", "How are","You","?"];
const sentence = sentence_arr.reduce((acc,currVal)=>{
    return acc + " " + currVal;
},"");
console.log(sentence);

let products = [
    {
        pname : "Laptop",
        price : 80000,
        quantity : 6
    },
    {
        pname : "Mobile",
        price : 55000,
        quantity : 10
    },
    {
        pname : "Television",
        price : 70000,
        quantity : 3
    }
]

const total_price_products = products.map((e)=>{
    return e.price * e.quantity
})
console.log(total_price_products);

let students = [
    {
        sname : "Alice",
        age : "19",
        grade : "A+"
    },
    {
        sname : "Bob",
        age : "18",
        grade : "A+"
    },
    {
        sname : "Davide",
        age : "17",
        grade : "A+"
    }
]

let students_over_18 = students.filter((student)=> student.age >= 18);
console.log(students_over_18);

const arr_nums = [87,39,82,100,321,8,22,99,10,888,119,1]
const find_max = arr_nums.reduce((acc,currVal)=>{
 if(acc < currVal){
    acc = currVal;
 }
 return acc;
},0);
console.log(find_max);

const strings = ["apple", "BANANA", "orange", "KIWI"];
const c = strings.map(str => str.toUpperCase()).filter(str => str === str.toUpperCase());
console.log(c);

const books = [
    {
        title : "Book One",
        author : "Author One",
        rating : 4.8
    },
    {
        title : "Book Two",
        author : "Author Two",
        rating : 4.0
    },
    {
        title : "Book Three",
        author : "Author Three",
        rating : 4.6
    },
    {
        title : "Book 4",
        author : "Author 4",
        rating : 4.5
    },
    {
        title : "Book Five",
        author : "Author Five",
        rating : 3.7
    }
]

const highly_rated = books.filter((book) => book.rating >= 4.5);
console.log(highly_rated);

const lengthOfStrings = strings.map(str => str.length);
console.log(lengthOfStrings);

const divisibleByThree = arr_nums.filter((num) => num % 3 === 0);
console.log(divisibleByThree);

const students_data = [
    {
        sname : "Alen",
        age : 12,
        grades : [40,43,38,46,47]
    },
    {
        sname : "Alex",
        age : 11,
        grades : [49,43,37,41,40]
    },
    {
        sname : "Bob",
        age : 12,
        grades : [33,35,38,39,31]
    },
    {
        sname : "David",
        age : 13,
        grades : [48,42,49,46,42]
    }
]

const avgGrades = students_data.map(student => (
    {
       sname : student.sname, 
       age : student.age,
       averageGrade: student.grades.reduce((sum,grade)=>sum+grade,0)/student.grades.length
    }
))

console.log(avgGrades);
const vowArr = [];
const stringsNew = ["hello", "world", "javascript", "openai","bbmm"];
const vowels = ["a","e","i","o","u"];
let vowCount = 0;
for(let i=0;i<stringsNew.length;i++){
    
    let splitStr = stringsNew[i].split("");
    for(let j=0;j<vowels.length;j++){
       if(splitStr.includes(vowels[j])){
            vowCount +=1;
       }
    }
    if(vowCount > 3){
        vowArr.push(stringsNew[i]);
        vowCount =0;
    }
}
console.log(vowArr)

// const stringsWithMoreThanThreeVowels = stringsNew.filter((str)=>{
//     const vowelCount = str.split("").filter((chars)=>vowels.includes(chars)).length;
//     return vowelCount > 3;
// })



// console.log(stringsWithMoreThanThreeVowels);

// const stringsNew = ["hello", "world", "javascript", "openai"];
// const vowels = ["a", "e", "i", "o", "u"];



const stringsWithMoreThanThreeVowels = stringsNew.filter((str) => {
  const vowelCount = str.split("").filter((char) => vowels.includes(char)).length;
  return vowelCount > 3;
});

console.log(stringsWithMoreThanThreeVowels);
