
const cardTemplate = ({ id, tipo, img, titulo, preco }) => {
    return `
      <article class="card" style="cursor:pointer" onclick="irPara('/detalhe?tipo=${tipo}&id=${id}')">
        <div class="thumb"><img src="${img}" alt="${titulo}"></div>
        <div class="title">${titulo}</div>
        <div class="price">${preco}</div>
      </article>
    `;
}

document.getElementById('gridAcom').innerHTML = window.database.acomodacoes.map(cardTemplate).join('');
document.getElementById('gridQuartos').innerHTML = window.database.quartos.map(cardTemplate).join('');