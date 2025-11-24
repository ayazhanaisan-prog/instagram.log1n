
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameOrEmail = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    const formData = { username: nameOrEmail, password: password };

    try {
      const response = await fetch('http://localhost:3000/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message);
      form.reset();
    } catch (err) {
      console.error('Ошибка:', err);
    }
  });
});

