const inputComida = document.getElementById('comida');
const paragrafo = document.getElementById('mensagem');

inputComida.addEventListener('change', function() {
    const valor = inputComida.value.toLowerCase().trim();
    
    if (valor === 'pão com ovo') {
        paragrafo.textContent = 'Você quer um café da manhã!';
    } else if (valor === 'feijoada') {
        paragrafo.textContent = 'Você quer um almoço!';
    } else {
        paragrafo.textContent = 'Você quer uma janta!';
    }
});

function botaoFor(){

let	pTexto = document.getElementById("paragrafo");
for (let i = 0; i < 5; i++){
    console.log(i);
    
    pTexto.innerHTML = pTexto.innerHTML + "<br>" + i;
   }
   let lista = ["arroz", "salada", "picanha"]
   for (let index = 0; index < lista.length; index++){
        const element = lista[index];
        pTexto.innerHTML = pTexto.innerHTML
        + "<br>" + element;
   }
}