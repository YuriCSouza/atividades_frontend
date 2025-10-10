const inputComida = document.getElementById('comida');
const paragrafo = document.getElementById('mensagem');

inputComida.addEventListener('change', function() {
    const valor = inputComida.value.toLowerCase().trim();
    
    if (valor === 'pão com ovo') {
        paragrafo.textContent = 'É café da manhã!';
    } else if (valor === 'feijoada') {
        paragrafo.textContent = 'É almoço!';
    } else {
        paragrafo.textContent = 'É janta!';
    }
});