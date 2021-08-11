const container = document.querySelector('#container');
    container.setAttribute('style', "height: 860px; width: 860px; display: grid; grid-gap: 0px 0px; grid-template-columns: repeat(16, auto);");

for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    document.createElement('div');
    div.classList.add('block');
    div.setAttribute('style','background-color: pink; height: 100%; width: 100%; ')
    container.appendChild(div);
}


