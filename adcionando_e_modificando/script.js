const link = document.querySelector('a') // referencia o primeiro 'a'

// Doi parametros: 1° quer modificar; 2° quer inserir
link.setAttribute('href', 'https://twitter.com/rogermelodev')

link.innerText = 'Website do Roger Melo' // modifca o texto do link

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class')) // atribui uma class a 'p'

paragraph.setAttribute('class','success') // se vc inspecionar o template HTML de 'mensagem', class mudou para success

paragraph.setAttribute('style','color: red')