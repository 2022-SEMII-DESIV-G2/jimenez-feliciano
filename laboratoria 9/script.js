function generatePyramid() {
const inputElement = document.getElementById('rows');
const pyramidContainer = document.getElementById('pyramid');
const rows = parseInt(inputElement.value, 10);

    // Validar que 1 < N < 5
    if (rows >= 1 && rows <= 4) {
      // Limpiar la pirámide existente
      pyramidContainer.innerHTML = '';

      // Generar la pirámide
      for (let i = 1; i <= rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 1; j <= i; j++) {
          const brick = document.createElement('div');
          brick.classList.add('brick');
          brick.innerText = i;
          row.appendChild(brick);
        }

        pyramidContainer.appendChild(row);
      }
    } else {
      alert('Por favor, ingrese un número entre 1 y 4.');
    }
  }