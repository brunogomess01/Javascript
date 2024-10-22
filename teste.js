


const NOME_DO_SITE = 'Meu Site Incrível';
const COR_DE_FUNDO = '#f0f0f0';

function criarCabecalho() {
  const cabecalho = document.createElement('header');
  cabecalho.textContent = NOME_DO_SITE;
  cabecalho.style.backgroundColor = COR_DE_FUNDO;
  
}