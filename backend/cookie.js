function getCookie(cookieName) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const [name, value] = cookies[i].split('=');
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
  }


const cookieUsuario = getCookie('username');

if (cookieUsuario) {
  console.log("Bem-vindo,", cookieUsuario);
} else {
  console.log("Cookie de nome de usuário não encontrado.");
}



