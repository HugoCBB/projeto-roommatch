
(function () {
  const contentEl = document.getElementById('detalhe-content');
  const loadingEl = document.getElementById('loading');

  const sidebarPriceEl = document.querySelector('.sidebar .price');
  const sidebarInterestEl = document.querySelector('.sidebar .interest');



  try {

    const hash = window.location.hash;
    const paramsString = hash.split('?')[1];

    if (!paramsString) {
      throw new Error('Não foram encontrados parâmetros na URL (ex: ?tipo=...&id=...)');
    }

    const params = new URLSearchParams(paramsString);
    const tipo = params.get('tipo');
    const id = params.get('id');

    if (!tipo || !id) {
      throw new Error(`Parâmetros 'tipo' (${tipo}) ou 'id' (${id}) não encontrados na URL.`);
    }


    if (!window.database || typeof window.database !== 'object') {
      throw new Error('O objeto window.database não foi encontrado. Verifique se ele está definido no seu script principal (onde está o roteador).');
    }

    const databaseKeyMap = {
      'acomodacao': 'acomodacoes',
      'quarto': 'quartos'
    };

    const dbKey = databaseKeyMap[tipo];

    if (!dbKey) throw new Error(`O tipo '${tipo}' não é reconhecido. Valores esperados: 'acomodacao' ou 'quarto'.`);

    const dataList = window.database[dbKey];

    if (!dataList || !Array.isArray(dataList)) throw new Error(`Não foi encontrada a lista de dados para '${dbKey}' em window.database.`);


    const item = dataList.find(i => i.id == id);

    if (!item) throw new Error(`Item com ID '${id}' não foi encontrado na lista '${dbKey}'.`);

    const randomPessoas = Math.floor(Math.random() * 26) + 5;



    sidebarPriceEl.textContent = item.preco;
    sidebarInterestEl.textContent = `${randomPessoas} pessoas interessadas`;


    contentEl.innerHTML = `
      <h1>${item.titulo}</h1>
      
      <div class="gallery">
          <img src="${item.img}" alt="${item.titulo}">
          <img src="${item.img}" alt="Foto 2 do ${item.titulo}">
          <img src="${item.img}" alt="Foto 3 do ${item.titulo}">
          <img src="${item.img}" alt="Foto 4 do ${item.titulo}">
          <img src="${item.img}" alt="Foto 5 do ${item.titulo}">
      </div>
      
      <p class="description">${item.descricao}</p>

      <div class="feedback">
          <h2>Feedback</h2>
          <div class="stars">
            <img src="assets/icon/estrela.svg" alt="ícone" width="24" height="24">    
            <img src="assets/icon/estrela.svg" alt="ícone" width="24" height="24">    
            <img src="assets/icon/estrela.svg" alt="ícone" width="24" height="24">    
            <img src="assets/icon/estrela.svg" alt="ícone" width="24" height="24">    
            <img src="assets/icon/estrela.svg" alt="ícone" width="24" height="24">    
          
          </div>
          <input type="text" placeholder="">
      </div>
    `;

  } catch (error) {
    console.error('Erro ao carregar detalhes:', error);
    if (contentEl) {
      contentEl.innerHTML = `
            <h2>Erro ao carregar os detalhes:</h2>
            <p style="color: red; font-family: monospace;">${error.message}</p>
        `;
    }
  } finally {

    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
  }
})();