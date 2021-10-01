//Qustion 1
const question1 = (myNumber)=> {
let myDept;
if(myNumber>1)
    myDept="Informatics";
return myDept;
};
console.log(question1(prompt("Enter a number")));

//Question 2
const question2 = (myValue)=> {
let myLang;
if(myValue.length!=10)
    myLang="English";
return myLang;
};
console.log(question2(prompt("Enter your name")));

//Question 3
const question3 = (myValue)=> {
    let myLang;
    if(myValue.length!=10 && myValue.length >3)
        myLang="English";
    return myLang;
    };
    console.log(question3(prompt("Enter your name")));

//Question 4
const question4 = (myNumber)=> {
    let myFaveFood;
    if(myNumber>=1)
        myFaveFood="Pizza";
    return myFaveFood;
    };
    console.log(question4(prompt("Enter your number")));

//Question 5
const question5 = (myTemp)=> {
    let myWeather;
    if(myTemp>=75)
        myWeather="Perfect";
    if(myTemp<=75)
        myWeather="Pefect";
    return myWeather;
    };
    console.log(question5(prompt("Enter your temp")));

