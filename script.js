// var name = document.querySelector("#name")
// var submit = document.getElementById("#submit")
// submit.addEventListener("click",()=>{
//     console.log("this is clicked")
// });

const text = document.querySelector(".divtwo");
const textLoad = () => {
    setTimeout(()=> {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(()=> {
        text.textContent = "Blogger";
    }, 4000);
}

textLoad();

console.log("okay")
