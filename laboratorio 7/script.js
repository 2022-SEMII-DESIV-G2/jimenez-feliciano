  // JavaScript para generar la pirámide
  const pyramid = document.getElementById('pyramid');

  // Función para crear la pirámide
  function createPyramid() {
    const rows = pyramid.children;
    
    for (let i = 0; i < rows.length; i++) {
      const bricks = rows[i].children;
      
      for (let j = 0; j < bricks.length; j++) {
        const value = parseInt(bricks[j].getAttribute('data-value'), 10);
        bricks[j].innerText = value;
      }
    }
  }

  // Llama a la función para crear la pirámide
  createPyramid();