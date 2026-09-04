const arsInput = document.getElementById('arsAmount');
const usdRateInput = document.getElementById('usdRate');
const eurRateInput = document.getElementById('eurRate');
const usdResult = document.getElementById('usdResult');
const eurResult = document.getElementById('eurResult');
const noteInput = document.getElementById('noteInput');
const btnAdd = document.getElementById('btnAdd');
const notesList = document.getElementById('notesList');

// Cálculo del conversor
function calculate() {
  const ars = parseFloat(arsInput.value) || 0;
  const usdRate = parseFloat(usdRateInput.value) || 1;
  const eurRate = parseFloat(eurRateInput.value) || 1;

  const usd = ars / usdRate;
  const eur = ars / eurRate;

  usdResult.textContent = `$${usd.toFixed(2)} USD`;
  eurResult.textContent = `€${eur.toFixed(2)} EUR`;
}

// Agregar nueva nota
function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.className = 'note-item';
  li.innerHTML = `
    <span class="note-text">${text}</span>
    <button class="btn-delete">×</button>
  `;

  // Asignar evento de borrado al nuevo botón
  li.querySelector('.btn-delete').addEventListener('click', () => {
    li.remove();
  });

  notesList.appendChild(li);
  noteInput.value = '';
}

// Event Listeners
arsInput.addEventListener('input', calculate);
usdRateInput.addEventListener('input', calculate);
eurRateInput.addEventListener('input', calculate);

btnAdd.addEventListener('click', addNote);
noteInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addNote();
});

// Asignar eventos de borrado a las notas iniciales
document.querySelectorAll('.btn-delete').forEach((button) => {
  button.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  });
});

// Cálculo inicial
calculate();