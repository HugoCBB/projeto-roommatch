
const app = document.getElementById('app');
const routes = {
  '/': 'pages/inicio/',
  '/login': 'pages/login/',
  '/cadastrar':'pages/cadastrar-usuario',
  '/chat':'pages/chat/',
  '/cadastrar-imovel':'pages/cadastrar-imovel'
};

const irPara = (path) => {
  window.location.hash = path; 
}

async function router() {
  const hash = window.location.hash.replace('#', '') || '/';
  const route = routes[hash];

  if (!route) {
    app.innerHTML = '<h1>404</h1><p>Página não encontrada.</p>';
    return;
  }

  try {
    const response = await fetch(route);
    if (!response.ok) throw new Error('Erro ao carregar a página');
    const html = await response.text();
    app.innerHTML = html;

  } catch (error) {
    app.innerHTML = '<h1>Erro</h1><p>Não foi possível carregar a página.</p>';
    console.error(error);
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
