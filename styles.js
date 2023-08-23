/* const btn = document.querySelectorAll(".removebtn");
const h1 = document.querySelectorAll("h1")[0];

btn.forEach((button)=>{
    button.addEventListener("click",function(){
        h1.innerHTML = "Welcome to chenai nro";
        h1.style.backgroundColor="black";
        h1.style.color = "white";
    })
})

const btntxt = document.querySelectorAll(".remove");

btntxt.forEach((buttona)=>{
    buttona.addEventListener("click",function(){

        const tr = this.parentNode;

        let td =  tr.childNodes[1];

        tr.removeChild(td);
        
        


    })
})


const btn_value = document.querySelectorAll(".btn-table");

btn_value.forEach((btn)=>{
    btn.addEventListener("click",function(){
        let table_value = this.parentNode.parentNode;
        table_value.remove();
    })

})

*/

/*document.addEventListener("keydown",handlekry);

document.addEventListener("keypress",handlekry);

document.addEventListener("keyup",handlekry);

function handlekry(event) {
    const eventType = event.type;
    const keyCode = event.code;
    const keyName = event.key;
    console.log(`Event type: ${eventType}`);
    console.log(`Key code: ${keyCode}`);
    console.log(`Key name: ${keyName}`);
  }
*/


/*
const lablbox = document.getElementById("label-text");
const msg = document.getElementById("msg-box");

lablbox.addEventListener("keydown",function(event){
    const key = event.key;

    if(isNaN(key)){

        event.preventDefault();
        msg.textContent="Plsae Enter the number";

    }else{
        msg.textContent =" ";
    }
})
*/


/*

const btnbu = document.querySelector(".btn");

btnbu.addEventListener("click",function(){
    btnbu.style.backgroundColor= "red";
})

btnbu.addEventListener("dblclick",function(){
    btnbu.style.backgroundColor= "yellow";
})


btnbu.addEventListener("mousedown",function(){
    btnbu.style.backgroundColor= "orange";
})


btnbu.addEventListener("mouseout",function(){
    btnbu.style.backgroundColor= "blue";
})


btnbu.addEventListener("mousehover",function(){
    btnbu.style.backgroundColor= "black";
})

*/



// const toucharea = document.getElementById("toucharea");


// toucharea.addEventListener("touchstart",function(e){

//     e.preventDefault();
//     toucharea.style.backgroundColor= "green";;
    


// })

//  const button = document.querySelector("button");
//  const body = document.querySelector("body");

//  function addeventpromise(element,method){
//     return new Promise((resole,reject)=>{
//         element.addEventListener(method,resole);
//     })

//  }


//  addeventpromise(button,"click").then(()=>{

//     body.style.backgroundColor="blue";
    
//  })



// async function getdata() {
//     let getpost = new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         resolve("data post");
//        },2000) ;
//     })

//     let getcomment = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve("data comment");
//         },5000) ;
//      })


//     console.log("Data Fettching from broth");

//     let data = await getpost;
//     console.log("post :", data);

//     console.log("comment Fettching from broth");

//     let comment = await getpost;
//     console.log("comment :", comment);


//     return[data,comment];
    
// }

// console.log("Welcome to get post and comment");

// let Data = getdata();


// Data.then((value)=>{
//     console.log(value);
// }).catch((err)=>{
//     console.error(err);
// })


// let result = function (marks) {
//     return new Promise(function (resolve, reject) {
//       console.log("Calculation Result....");
//       setTimeout(() => {
//         let total = 0;
//         let result = "Pass";
//         marks.forEach((mark) => {
//           total += mark;
//           if (mark < 35) {
//             result = "Fail";
//           }
//         });
//         resolve({ total: total, result: result });
//       }, 2000);
//     });
//   };

//   let grade = function (response) {
//     return new Promise(function (resolve, reject) {
//       if (response.result == "Pass") {
//         let avg = response.total / 3;
//         let gradeText = "Grade D";
//         if (avg >= 90 && avg <= 100) {
//           gradeText = "Grade A";
//         } else if (avg >= 80 && avg <= 89) {
//           gradeText = "Grade B";
//         } else if (avg >= 70 && avg <= 79) {
//           gradeText = "Grade C";
//         }
//         resolve(gradeText);
//       } else {
//         reject("No Grade");
//       }
//     });
//   };
  

//   async function getResults() {
//     try {
//       const value = await result([98, 99, 55]);
//       console.log("Total  : ", value.total);
//       console.log("Result : ", value.result);
//       const gradeText = await grade(value);
//       console.log(gradeText);
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   getResults();




// let jsonbutton = document.querySelector("#btn-json");
// let jsoncomtent = document.querySelector("#textjson");


// jsonbutton.addEventListener("click",addfunctionjson);

// async function addfunctionjson(){

//     let dataapi = await fetch("https://jsonplaceholder.typicode.com/posts");

//     let datarespons = await dataapi.json();

//     let output = " ";

//     datarespons.forEach((post)=> {

//         output+= `<div>
//         <h4>${post.title}</h4>
//         </div>`
        
//     });

//     jsoncomtent.innerHTML = output;

// }


// const checkdata = document.getElementById("datacheck");


// checkdata.addEventListener ( "keyup",function(){
//     optimaxation();
// });


// let count = 0;

// let getdatafromapi = ()=>{
//     console.log("Getting data :", count++);
// }

// let datacheckfompi = function(fn,delay){
//     let timeer;

//     return function(){
//         clearTimeout(timeer);

//         timeer = setTimeout(()=>{
//             fn.apply(this,arguments)
//         },delay);
//     };
// };

// let optimaxation = datacheckfompi(getdatafromapi,3000);


let text = document.getElementById("text");
window.addEventListener("scroll", function () {
	let value = window.scrollY;
	text.style.fontSize = value * 1 + "px";
});


let button = document.querySelector(".newfun");

button.addEventListener("click",function(){
    button.innerHTML= "clicked";
    alert("Welcome soldries")
})