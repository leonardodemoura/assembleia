document.getElementById('doubt-button').addEventListener('click', () => {
  document.getElementById('doubt-form-container').style.display = 'block';
});

document.getElementById('identify-checkbox').addEventListener('change', (e) => {
  document.getElementById('identify-fields').style.display = e.target.checked ? 'block' : 'none';
});

document.getElementById('cancel-button').addEventListener('click', () => {
  document.getElementById('doubt-form-container').style.display = 'none';
  document.getElementById('doubt-form').reset();
  document.getElementById('identify-fields').classList.add('hidden');
});

document.getElementById('doubt-form').addEventListener('submit', () => {
  document.getElementById('doubt-form').reset();
});
