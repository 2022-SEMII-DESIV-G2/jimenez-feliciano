function generateFibonacci() {
    const numInput = document.getElementById('numInput');
    const fibonacciContainer = document.getElementById('fibonacci-container');
    const num = parseInt(numInput.value, 10);

    // Validar que 1 < N < 20
    if (num >= 1 && num <= 19) {
      // Limpiar la secuencia existente
      fibonacciContainer.innerHTML = '';

      // Generar la secuencia de Fibonacci
      let a = 1, b = 1;
      for (let i = 0; i < num; i++) {
        const result = a;
        const box = createFibonacciBox(result);
        fibonacciContainer.appendChild(box);

        const temp = a + b;
        a = b;
        b = temp;
      }
    } else {
      alert('Por favor, ingrese un número entre 1 y 19.');
    }
  }

  function createFibonacciBox(value) {
    const box = document.createElement('div');
    box.classList.add('fibonacci-box');
    box.innerText = value;

    const removeButton = document.createElement('div');
    removeButton.classList.add('remove-button');
    removeButton.innerText = 'X';
    removeButton.addEventListener('click', () => {
      fibonacciContainer.removeChild(box);
    });

    box.appendChild(removeButton);

    return box;
  }