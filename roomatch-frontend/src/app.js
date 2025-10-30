const app = document.getElementById('app')  

const routes = {
  '/': {
    html: 'pages/inicio/index.html',
    css: 'pages/inicio/style.css',
    js:  'pages/inicio/script.js'
  },
  '/login': {
    html: 'pages/login/index.html',
    css: 'pages/login/style.css',
    js:  'pages/login/script.js'
  },
  '/cadastrar': {
    html: 'pages/cadastrar-usuario/index.html',
    css: 'pages/cadastrar-usuario/style.css',
    js:  'pages/cadastrar-usuario/script.js'
  },
  '/chat': {
    html: 'pages/chat/index.html',
    css: 'pages/chat/style.css',
    js:  'pages/chat/script.js'
  },
  '/cadastrar-imovel': {
    html: 'pages/cadastrar-imovel/index.html',
    css: 'pages/cadastrar-imovel/style.css',
    js:  'pages/cadastrar-imovel/script.js'
  }
}  

const irPara = (path) => {
  window.location.hash = path  
}  

const managePageCSS = (newCSSPath) => {
  const oldLink = document.getElementById('page-specific-style')  
  if (oldLink) oldLink.remove()  

  if (newCSSPath) {
    const newLink = document.createElement('link')  
    newLink.id = 'page-specific-style'  
    newLink.rel = 'stylesheet'  
    newLink.href = newCSSPath  
    document.head.appendChild(newLink)  
  }
}  


const loadScript = (src) =>
  new Promise((resolve, reject) => {
    if (!src) return resolve()  
    const oldScript = document.getElementById('page-specific-script')  
    if (oldScript) oldScript.remove()  

    const s = document.createElement('script')  
    s.id = 'page-specific-script'  
    s.src = src  
    s.defer = true  
    s.onload = resolve  
    s.onerror = reject  
    document.head.appendChild(s)  
  })  

const router = async () => {
  const hash = window.location.hash.replace('#', '') || '/'  
  const route = routes[hash]  

  if (!route) {
    app.innerHTML = '<h1>404</h1><p>Página não encontrada.</p>'  
    managePageCSS(null)  
    await loadScript(null)  
    return  
  }

  try {

    const response = await fetch(route.html, { cache: 'no-cache' })  
    if (!response.ok) throw new Error(`Erro ao carregar: ${route.html}`)  
    const html = await response.text()  

    app.innerHTML = html  

    managePageCSS(route.css)  

    await loadScript(route.js)  
  } catch (error) {
    console.error(error)  
    app.innerHTML = '<h1>Erro</h1><p>Não foi possível carregar a página.</p>'  
    managePageCSS(null)  
    await loadScript(null)  
  }
}  

window.addEventListener('hashchange', router)  
window.addEventListener('load', router)  
window.irPara = irPara
