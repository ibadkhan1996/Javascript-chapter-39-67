// // Chapter 38-42
// // Task 1
// function power(a,b){
    
//     return Math.pow(a,b)
// }
// console.log(power(2,4));

// // Task 2
// function leapYear(){
//     var year = prompt("Enter year to check leap year");
//     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//         alert("It's a leap year");
//     }
//     else{
//         alert("It's not a leap year");
//     }
// }
// leapYear()

// // Task 3
// function area(a,b,c){
//     var S = (a + b + c) / 2;
//     var areaTri = S * (S - a) * (S - b) * (S - c);
//     return areaTri;
// }
// console.log(area(2,4,6));

// // Task 4
// function average(sub1,sub2,sub3){
//     var averageMarks = (sub1 + sub2 + sub3)/3
//     return averageMarks;
// }
// function percentage(sub1,sub2,sub3){
//     var obtainedMarks = sub1 + sub2 + sub3;
//     var totalMarks = 300;
//     return (obtainedMarks / totalMarks) * 100;
// }
// function mainFunction(sub1,sub2,sub3){
//     console.log(average(sub1,sub2,sub3));
//     console.log(percentage(sub1,sub2,sub3));
// }
// mainFunction(78,85,97);

// // Task 5
// function delVowels(){
//     var text = "The quick brown fox jumps over the lazy dog";
//     return text.replace(/[aeiou]/ig,"");
// }
// console.log(delVowels())

// // Task 6
// var distance = +prompt("Enter distance between two cities in KM");
// function KMtoM(){
//     return (distance * 1000) + " Meters";
// }
// function KMtoFeet(){
//     return (distance * 3280.84) + " Feet";
// }
// function KMtoInch(){
//     return (distance * 39370.1) + " Inches";
// }
// function KMtoCM(){
//     return (distance * 100000) + " Centimeters";
// }
// function allConversion(){
//     console.log(KMtoM());
//     console.log(KMtoCM());
//     console.log(KMtoFeet());
//     console.log(KMtoInch());
// }
// allConversion();

// // Task 7
// function calcOvertime(){
//     var hoursWorked = +prompt("Enter total hours you worked");
//     var overtimePay = 0;
//     if(hoursWorked > 40){
//         var OTHours = hoursWorked - 40;
//         for(i = 40; i < hoursWorked; i++){
//             overtimePay += 12;
//         }
//         console.log("You've done " + OTHours + " hours of overtime");
//         console.log("Your overtime pay is " + overtimePay + " rupees");
//     }
//     else if(hoursWorked < 40){
//         console.log("You've not done any overtime");
//     }
//     else{
//         console.log("Make sure you've entered hours correctly");
//     }
//     console.log(overtimePay);
// }
// calcOvertime()

// // Task 8
// function countOccurence(){
//     var text = "Pleases read this application and give me gravity";
//     var num = (text.match(/ae/ig) || []).length;
//     console.log(num)
// }
// countOccurence()

// // Chapter 43-48
// // Task 2
// function thanks(){
//     alert("Thanks for purchasing a phone from us");
// }

// // Task 3
// function deleteRow(rowId){
//     document.getElementById(rowId).className = "hidden";
// }
// function undoRow(){
//     for(i = 0; i <= 9; i++){
//         document.getElementById(i).className = "shown";
//     }
// }

// // Task 4
// function changeImg(pic){
//     var img = document.getElementById("img");
//     img.src = pic;
// }

// // Task 5
// var count = 0;
// function counter(num){
//     count += num;
//     document.getElementById("number").innerHTML = count;
// }

// // Chapter 49-52
// // Task 1
// function getDetails(){
//     var emailId = document.getElementById("emailID").value;
//     var pass = document.getElementById("password").value;
//     document.write("Email:" + emailId + " Password:" + pass);
// }

// // Task 2
// function expandPara(){
//     var fulltext = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quidem inventore! Quibusdam velit sit aspernatur eius? Praesentium nihil provident eius ea quia distinctio recusandae omnis corporis eum, inventore dolorum sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum ducimus quisquam rerum! Eum quidem necessitatibus voluptatibus cupiditate facilis cum, placeat vel adipisci soluta, perferendis debitis voluptates, beatae est nostrum?";
//     document.getElementById("para").innerHTML = fulltext;
// }

// // Task 3
// function appendDetail(){
//     var nameFirst = document.getElementById("firstName").value;
//     var nameLast = document.getElementById("lastName1").value;
//     var Idemail = document.getElementById("emailStudent").value;
//     document.getElementById("studentFirstName").innerHTML = nameFirst;
//     document.getElementById("studentLastName").innerHTML = nameLast;
//     document.getElementById("studentEmail").innerHTML = Idemail;
//     document.getElementById("table").className = "shown";
//     document.getElementById("form").className = "hidden";
// }
// function deleteRow(rowId){
//     document.getElementById(rowId).className = "hidden";
// }
// function editRow(){
//     document.getElementById("form").style.display = "block";
// }

// // Chapter 58-67
// // Task 1a
// var mainContent = document.getElementById("main-content");

// // Task 1b
// var dis = document.getElementById("main-content").childNodes;
// console.log(dis);

// // Task 1c
// var rend = document.getElementsByClassName("render");
// for(i = 0; i < rend.length; i++){
//     document.write(rend[i].innerHTML);
// }

// // Task 1d
// document.getElementById("first-name").value = "Ibad";

// // Task 1e
// document.getElementById("last-name").value = "Khan";
// document.getElementById("email").value = "ibad.khan96@gmail.com";

// // Task 2a
// var content = document.getElementById("form-content");
// console.log(content.nodeType);

// // Task 2b
// var something = document.getElementById("lastName");
// console.log(something.nodeType);
// console.log(something.childNodes[0].nodeType);

// // Task 4
// var firstAndLast = document.getElementById("main-content");
// console.log(firstAndLast.firstChild);
// console.log(firstAndLast.lastChild);

// // Task 5
// var nextAndPrevious = document.getElementById("lastName");
// console.log(nextAndPrevious.nextSibling);
// console.log(nextAndPrevious.previousSibling);

// // Task 6
// var emailParent = document.getElementById("email");
// console.log(emailParent.parentNode);
// console.log(emailParent.nodeType);