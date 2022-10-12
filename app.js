let inpEl = document.getElementById("input");
let headEl = document.getElementById("head");
let exit = document.getElementById("exit")
let arr = []; 

inpEl.addEventListener("input" , () => {
    exit.style.display ="none"
    localStorage.setItem("inputVals", JSON.stringify(arr));
    arr.push(inpEl.value);
    headEl.innerText = localStorage.getItem("inputVals")
})