const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const columnWidth = 12; // Diminuí de 20 para 12 para ter mais colunas
const cols = Math.floor(w / columnWidth) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix() {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#ff00ff';
  ctx.font = '11pt monospace'; // tamanho da fonte

  ypos.forEach((y, ind) => {
    const text = Math.round(Math.random()); // Alterna aleatoriamente entre 0 e 1
    const x = ind * columnWidth;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else
    ypos[ind] = y + columnWidth + 8; //velocidade de queda
  });
}

setInterval(matrix, 90);