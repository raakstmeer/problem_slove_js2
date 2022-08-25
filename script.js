// নিচের sentence এ "Sumit" শব্দটি কয়বার ব্যবহার করা হয়েছে?? প্রথমবার "Sumit" কত নাম্বার পজিশন এ পাওয়া গেছে ?? 

const sentence = "Learn with Sumit is all about teaching web development web development skills and techniques in an efficient and practical manner. If you are just getting started in web development, Learn with Sumit has all the tools you need to learn the newest and most populer technologies to convert you from a no stack to full stack developer. Learn with Sumit also deep dives into advance topics using the lastest best practices for you seasoned web developers.";

// match function return an array from whole sentance. array contain a certain value which i find thats it.

let matches = sentence.match(/sumit/gi);
let occurances = matches ? matches.length : 0;
console.log(occurances);

// search function return a certain word first position which i find thats it.

let firstPosition = sentence.search(/sumit/i);
firstPosition = firstPosition >= 0 ? firstPosition : "Not find!"
console.log(firstPosition);

//____________________________________________________

/*
 input: linearSearch (['a','b','c','d','e'],'c')
 outpur: 2 or 'not found'
 problem linearSearch() function টি implement করে দেখান।  */

 function linearSearch(array,value) {
    for(arrValue of array){
        if(arrValue === value){
            return 2
        }
    }
    return "not found!"
 }

 console.log(linearSearch(['a','b','c','d','e'],'c'));


//____________________________________________________

// কোনো Array থেকে কি ভাবে সব থেকে বড় string খুঁজে বের করবেন এবং তার index নাম্বার দেখাবেন?? 

function longestString(names) {
    let longestWord = "";

    for(name of names){
        if(name.length > longestWord.length){
            longestWord = name
        }
    }
    return `Longest word is "${longestWord}" and index number "${names.indexOf(longestWord)}"`
}

console.log(longestString(['Sumit Saha','Learn With Sumit','Akash','Saad','Daiyan']));

//____________________________________________________

// ১-১০০ পর্যন্ত কোন সংখ্যা গুলো ৩,৫ এবং ৩,৫ উভয়ে সংখ্যা দ্বারা বিভাজ্য তা বের করুন।

function fizzBuzz(number) {
    for(let i = 1; i <= number; i++){
        if((i % 15) === 0){
            console.log(`${i} is FizzBuzz`);
        }else if((i % 3) === 0){
            console.log(`${i} is Fizz`);
        }else if((i % 5) === 0){
            console.log(`${i} is Buzz`);
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(20);

//____________________________________________________

//  array থেকে কিভাবে falsy value খুজে বের করে বাদ দিতে পারি ?

const mixedArr = [
    "lws",
    undefined,
    "learn with sumit",
    false,
    "",
    "apple",
    40,
    "k",
    true,
    "thanks all",
    NaN
];

let trueArr = mixedArr.filter(function(el){
    if(el){
        return true;
    }else{
        return false;
    }
});

console.log(trueArr);

let trueArray = mixedArr.filter(Boolean); // short cut method...

console.log(trueArray);

//____________________________________________________

