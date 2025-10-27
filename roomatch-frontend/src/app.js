const app = document.getElementById('app');

// Defina suas rotas com os caminhos de HTML e CSS
const routes = {
  '/': {
    html: 'pages/inicio/index.html',
    css: 'pages/inicio/style.css' 
  },
  '/login': {
    html: 'pages/login/index.html',
    css: 'pages/login/style.css' 
  },
  '/cadastrar': {
    html: 'pages/cadastrar-usuario/index.html',
    css: 'pages/cadastrar-usuario/style.css'
  },
  '/chat': {
    html: 'pages/chat/index.html',
    css: 'pages/chat/style.css'
  },
  '/cadastrar-imovel': {
    html: 'pages/cadastrar-imovel/index.html',
    css: 'pages/cadastrar-imovel/style.css'
  }
};

const irPara = (path) => {
  window.location.hash = path;
}

const managePageCSS = (newCSSPath) => {

  const oldLink = document.getElementById('page-specific-style');
  if (oldLink) {
    oldLink.remove();
  }

  if (newCSSPath) {
    const newLink = document.createElement('link');
    newLink.id = 'page-specific-style';
    newLink.rel = 'stylesheet';
    newLink.href = newCSSPath;
    document.head.appendChild(newLink); 
  }
}


 const router = async () => {
  const hash = window.location.hash.replace('#', '') || '/';
  const route = routes[hash];

  if (!route) {
    app.innerHTML = '<h1>404</h1><p>Página não encontrada.</p>';
    managePageCSS(null);
    return;
  }

  managePageCSS(route.css);

  try {
    const response = await fetch(route.html);
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