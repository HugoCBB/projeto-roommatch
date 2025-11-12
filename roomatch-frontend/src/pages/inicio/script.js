
const cardTemplate = ({ id, tipo, img, titulo, preco }) => {
    return `
      <article class="card" style="cursor:pointer" loading="lazy" onclick="irPara('/detalhe?tipo=${tipo}&id=${id}')">
        <div class="thumb"><img src="${img}" alt="${titulo}"></div>
        <div class="title">${titulo}</div>
        <div class="price">${preco}</div>
      </article>
    `;
}

window.mountInicio = () => {
  const gridAcom = document.getElementById('gridAcom');
  const gridQuartos = document.getElementById('gridQuartos');
  if (!gridAcom || !gridQuartos) return;

  gridAcom.innerHTML = (window.database?.acomodacoes || []).map(cardTemplate).join('');
  gridQuartos.innerHTML = (window.database?.quartos || []).map(cardTemplate).join('');
};
