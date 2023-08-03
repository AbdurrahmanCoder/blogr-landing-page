//   let NavLinks= document.getElementsByTagName('nav')[0].children
//   let NavLinks = document.getElementsByTagName('nav');

//  console.log(a)

//let NavLinks = document.getElementsByTagName('nav');

// let Links = document.querySelectorAll(".DropDown-list"); 

 
// console.log(Links[0])
// let ul = [...document.querySelectorAll("ul")]

 
// Links.forEach((elem, index) => {
//   elem.addEventListener("click", func);

//   function func() {
//     for (var i = 0; i < 4; i++) {

        
//       if (index === i) { 
//         //  ul[i].style.display = "block"
 
//       // console.log(ul[i].style.dis)
      
//        ul[i].classList.toggle("displayNone")
// }
//     }
//   }
// });

//  let Links = document.querySelectorAll(".DropDown-list");
 
 
 
//  Links.forEach((item,id ) =>
//   { 
//     item.addEventListener("click", Myfunction)
 
    
    
//   function Myfunction(){
//      let ul = [...document.querySelectorAll("ul")]

//   ul.classList.add('displayNone')

//   console.log(ul)
//   }

//   }
  
//   )

let Links = document.querySelectorAll(".DropDown-list");
let ulElements = document.querySelectorAll("ul");
 

Links.forEach((item, index) => {
  item.addEventListener("click", () => Myfunction(index));

  function Myfunction(index) {
    ulElements.forEach((ul, i) => {

      if ( index === i ) {
 
          
          ul.classList.toggle('displayNone'); 
 
      } else {
        ul.classList.remove('displayNone');
      }
    });

    console.log(ulElements);
  }
});





window.addEventListener("click", () => Myfunction());

  function Myfunction( ) {
  
     
    ulElements.classList.remove('displayNone')
    
}


// document.querySelector(".HamburgerMenu").addEventListener("click",clickfunc2)

// clickfunc2






document.querySelector(".HamburgerMenu").addEventListener("click",clickfunc)







let mobileBackground = document.querySelector('.mobileBackground')

function clickfunc(){
  mobileBackground.classList.toggle('opaxity'); 
}


document.addEventListener("click",funcEvent)

function funcEvent(e){

console.log(e)


}