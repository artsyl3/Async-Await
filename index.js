const changeColorAfter = (delay, color) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const colorBox = document.getElementById('color-box');
        colorBox.style.backgroundColor = color;
        resolve();
      }, delay);
    });
  };
  
  const colorBoxAsync = async () => {
    await changeColorAfter(1000, 'red');
    await changeColorAfter(2000, 'orange');
    await changeColorAfter(3000, 'yellow');
    await changeColorAfter(1000, 'green');
    await changeColorAfter(4000, 'blue');
    await changeColorAfter(5000, 'indigo');
  };

  colorBoxAsync();