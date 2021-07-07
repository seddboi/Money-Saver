
 const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("test");
  const username = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
 console.log(username, email, password)
  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};


document
  .querySelector('#submit')
  .addEventListener('click', signupFormHandler);