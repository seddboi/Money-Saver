// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/login');
//     } else {
//       alert('Failed to log out.');
//     }
//   };
  
  // document.querySelector('#logout').addEventListener('click', logout);
  
  const logout = async function(event) {
    event.preventDefault();
    console.log('logout2')
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
  };
  document.querySelector('#logout').addEventListener('click', logout);