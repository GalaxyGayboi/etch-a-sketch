const container = document.querySelector('#container');
    container.setAttribute('style', "height: 860px; width: 860px; display: grid; grid-gap: 0px 0px; grid-template-columns: repeat(16, auto); border-style: dotted; border: 2px solid black;");
const button = document.querySelector("button");
let stopRemoval = 1;
for (let i = 0; i < 256; i++) {
    if (stopRemoval = 1) {
    const div = document.createElement('div');
    document.createElement('div');
    div.classList.add('block');
    div.setAttribute('style','background-color: white; height: 100%; width: 100%; ')
    container.appendChild(div); 
     } else { 
     }
}

const blocks = document.querySelectorAll(".block")

blocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        block.setAttribute('style','background-color: pink; height: 100%; width: 100%; ')
    })
})


let changeColor = function changeColor() {
    let userNumber = prompt('How many blocks do you want on one line?');
    let userInput = parseInt(userNumber)
    container.setAttribute('style', `height: 860px; width: 860px; display: grid; grid-gap: 0px 0px; grid-template-columns: repeat(${userInput}, auto); border-style: dotted; border: 2px solid black;`);
    for (let i = 0; i < userInput * userInput; i++) {
        if (userInput > 100) {
            return alert("If you want to prevent the great Crashening, please enter a number lower than 100.")
        } else if (typeof(userInput) != "number") {
            return alert(`You really want ${userInput} amount of rows? What number is that? Give me a numerical value please.`)
        } else {
            const div = document.createElement('div');
            document.createElement('div');
            div.classList.add('block');
            div.setAttribute('style','background-color: white; height: 100%; width: 100%; ')
            container.appendChild(div);
        }
}
}
button.addEventListener('click', () => {
    document.querySelectorAll(".block").forEach(e => container.removeChild(e));
    changeColor();
    const blocks = document.querySelectorAll(".block")

    blocks.forEach((block) => {
        block.addEventListener('mouseenter', () => {
            block.setAttribute('style','background-color: pink; height: 100%; width: 100%; ')
        })
    })
})

