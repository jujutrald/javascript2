let div = document.createElement('div');


div.classList.add('container');
console.log(div);

function createLi(){
    return `
    <ul>
    <li>arroz</li>
    <li>Feijão</li>
    <li>Picanha</li>
    <li>Cerveja</li>
    <li>Batata</li>
    </ul>
    `
}

document.getElementById('teste').innerHTML = createLi();