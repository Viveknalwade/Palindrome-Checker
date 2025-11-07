const input = document.getElementById("text-input")
const button = document.getElementById("check-btn")
const result = document.getElementById("result")

button.addEventListener("click",()=>{
  if(input.value === ""){
    alert("Please input a value")
    return;
  }else{
    const clean = input.value.replace(/[^A-Za-z0-9]/g,"").toLowerCase();
    const reverse = clean.split("").reverse().join("")
    if(clean === reverse){
      result.textContent = `${input.value} is a palindrome`
    }else{
      result.textContent = `${input.value} is not a palindrome`
    }
  }
})
// const input = document.getElementById("text-input");
// const button = document.getElementById("check-btn");
// const result = document.getElementById("result");

// button.addEventListener("click", () => {
//   const userInput = input.value;

//   if (userInput === "") {
//     alert("Please input a value");
//     return;
//   }

//   // Normalize input: remove non-alphanumeric characters and lowercase
//   const cleaned = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
//   const reversed = cleaned.split("").reverse().join("");

//   if (cleaned === reversed) {
//     result.textContent = `${userInput} is a palindrome`;
//   } else {
//     result.textContent = `${userInput} is not a palindrome`;
//   }
// });