
const headerContent = `
    <h1><b>Nome Foda Da Marca</b></h1>
    <div class="header-container">
      <button class="header-bot" onclick="mudar_pagina('mainPage.html')">Home</button>
      <button class="header-bot" onclick="mudar_pagina('ShoppingPage.html')">Shopping</button>
      <button class="header-bot">Compras</button>
      <button class="header-bot header-blog-bot">Blog</button>
      <button onclick="let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
    sidebar.inert = false;" class="header-bot burguer">Bugy</button>
    </div>
    <div class="sidebar" id="sidebar" inert>
      <div class="sidebar-content">
        <button class="header-bot burguer-exit" onclick="let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
    sidebar.inert = true;">X</button>
        <hr>
        <button class="header-bot">Bot 1</button>
        <button class="header-bot">Bot 2</button>
        <button class="header-bot">Bot 3</button>
        <button class="header-bot">Bot 4</button>
      </div>
    </div>
`
document.addEventListener('DOMContentLoaded', () => {
  criar_header()
  let cardsDeProduto = document.querySelectorAll('.shopping-page-item-card')

  cardsDeProduto.forEach(card => {
    let NomeDoProduto = card.querySelector("h2").textContent;
    let BotCompra = card.querySelector(".bot-compra");
    BotCompra.onclick = () => {
    window.location.href = `${NomeDoProduto}.html`
    console.log(`${NomeDoProduto}.html`)}
  })
  cardsDeProduto = document.querySelectorAll('.item-card')
  cardsDeProduto.forEach(card => {
    let textoDiv = card.querySelector(".item-card-text");
    let NomeDoProduto = textoDiv.querySelector('h2').textContent;
    card.onclick = () => {
      window.location.href = `${NomeDoProduto}.html`
      console.log(`${NomeDoProduto}.html`)}
    })

})

function criar_header(){
  let header = document.getElementById("head");
  header.innerHTML = headerContent;
}

function mudar_pagina(pagina){
  window.location = pagina
}
