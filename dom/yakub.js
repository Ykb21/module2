let temp = [3,2,1,5];
 temp.push(3);
 temp.sort();
 temp.pop();
/ console.log(temp)
\
 getDouble(4);
 const getDouble = function(numb){
     console.log(2*2);



const nama = "indra";
const umur = 17;

if(!nama || !umur) console.log('data salah');
    else if(nama && umur > 17) console.log('sudah dewasa');
    else if(nama && umur < 17) console.log('sudah dewasa');
    else console.log('data tidak lengkpa');

    let angka = '12';
    angka *=2;
    angka++;
    angka--;
    angka += '1';


    let output = "hello";
    if("0" != true) output += ",word!"

    let temp = "javascrip is awesom".split (' ');
    for(let i =0; i < temp.length; i +=1){
        temp.push(temp[i])
    }

    let arr = [
        "book",
        true,
        [1, "banana"]
        null,
        ["false",[2,NaN], false, ["clok", 0]]
        NaN,
        false,
        [true],

        console.log(Boolean(arr[4][3][0]))
//     ]

console.log(String(12)=== "12")


function checkDuplicate(arr) {
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] === arr[j]) return true;

            return false
        }
    }
}
console.log(checkDuplicate([1,2,3,1]))
o (n)
o (log n)
o (n^2)
o (1)

const data = [
    'number',
    true,\
    { name : 'junior', age : 17},
    () => [{result: 'call'}]
]

let angka= '12z';
angka = Number(angka);
angka = String(angka)

const sentence ="learn javascrip at purwadhika"
sentence.replace("a", "o");
sentence.split(" ")
sentence.reverse()
console.log(sentence)


let nama = "andika";
nama += "julian"
nama  = "toufik"
console.log(name)

const user = {
    name: 'andika',
    age : 19
}
console.log(user.name);
console.log(user.status)


const fruits = ["pisang", "jeruk", "jambu", "semangka"];
fruits.slice(2, 0, "lemon", "kiwi");;
fruits.shift();
console.log(fruits)

function printMessage(message, callback) {
    callback(message)
}
printMessage('hello','world')