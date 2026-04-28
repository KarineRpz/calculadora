const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

/* Clique nos botões */
buttons.forEach((btn) => {
  btn.addEventListener('click', () => handleInput(btn.innerText));
});

/* Função principal */
function handleInput(value) {
  if (value === 'C') {
    display.innerText = '0';
    return;
  }

  if (value === '=') {
    try {
      const result = eval(
        display.innerText
          .replace('×', '*')
          .replace('÷', '/')
      );
      display.innerText = result;
    } catch {
      display.innerText = 'Erro';
    }
    return;
  }

  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

/* Suporte ao teclado */
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    handleInput(key);
  } else if (key === 'Enter') {
    handleInput('=');
  } else if (key === 'Backspace') {
    display.innerText = display.innerText.slice(0, -1) || '0';
  } else if (key.toLowerCase() === 'c') {
    handleInput('C');
  }
});
