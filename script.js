function myFunction(){
 document.getElementById("title").style.textTransform = "uppercase"; 
}

let button = document.getElementById("btn-2");
console.log(button);
let termUl = document.getElementById("btn-2-list");

let terms = ["branch", "commit", "push"];

button.addEventListener("click", (e) => {
  console.log("e: ", e);
  for (let i = 0; i < terms.length; i++){
    let currentLi = document.createElement("li");
    currentLi.textContent = terms[i];
    console.log(currentLi);
    termUl.appendChild(currentLi);
  }
})