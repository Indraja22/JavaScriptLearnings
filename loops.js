// for of
const arr = [19,12,23,43,25]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello, World!"
for(const greet of greetings){
    if (greet == " "){
        continue;
    }
    console.log(`${greet}`);
}

// Maps

const map = new Map();
map.set('IN','India');
map.set('USA','United States Of America');
map.set('FR','France');
console.log(map);

for (const [key, value] of map) {
    console.log(`${key} = ${value}`);
}

const myObject = {
    'game1' :'NFS',
    'game2' :'GTA',
    'game3' :'Spiderman'
}

// for in

const newObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby'
}

for (const key in newObject) {
//    console.log(key);
   console.log(`${newObject[key]} => ${key}`);
}

for (const i in arr) {
    console.log(arr[i]);
    console.log(i);
}

// cannot iterate
// for (const key in map) {
//     console.log(key);
//     console.log(map[key]);
// }


// foreach loop

const coding = ['Js',"Ruby", "Java","CPP"];
coding.forEach((e)=>{console.log(e)});

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);
coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        fileExtension : ".js"

    },
    {
        languageName : "java",
        fileExtension : ".java"

    },
    {
        languageName : "python",
        fileExtension : ".py"

    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.fileExtension);
})

