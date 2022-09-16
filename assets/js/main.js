// let firstname = " John Doe ";
// let firstname1 = firstname.trim();
// console.log(firstname.trim());
// console.log(firstname1);
// let withBigWords = firstname.trim().toUpperCase();
// const boxEl = document.querySelector(".container")
// console.log(withBigWords);
// btn.className = "btn";
// btn.addEventListener("click", () => {
//     boxEl.classList.remove("container");
// })
// let spl = "hello, world";
// let splt = spl.split("");
// console.log(splt);
// let text = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores inventore, laudantium nostrum ex rerum non, vitae aut totam dolor illum vero reiciendis dolores iure eligendi perferendis, sit nam deserunt iste. Corporis laboriosam molestiae nisi ad et! Repudiandae earum in qui, voluptate officia veniam, aperiam ab dolore quam sequi modi adipisci!";
// let textwords = text.split("");
// console.log(textwords.length + 1);
// let names = ["bob", "john"];
// let name = "John Doe".split("")
// console.log(name.reverse().join("")) 
const box = document.querySelector(".container");
const radiusEl = document.getElementById("border-radiusEl");
const colorEL = document.getElementById("range-color");
let weightEl = document.getElementById("text-weight");
let heightEl = document.getElementById("text-height");
let selectEl = document.getElementById("select-color");
console.log(weightEl);
console.log(heightEl);
heightEl.addEventListener("input", () => {
box.style.height = heightEl.value + "px"
})
weightEl.addEventListener("input", () => {
    box.style.width = weightEl.value + "px"
    })
    radiusEl.addEventListener("input", () => {
        box.style.borderRadius = radiusEl.value + "%"
        })
        selectEl.addEventListener("input", () => {
            box.style.backgroundColor = selectEl.value
            })
            colorEL.addEventListener("input", () => {
                box.style.backgroundColor = colorEL.value
            })
