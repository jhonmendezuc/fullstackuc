//declarando una promesa
function verificarUsuario() {
  const usuario = {
    email: "jhon@gmail.com",
    password: "123456",
  };

  return new Promise((resolve, reject) => {
    if (usuario.email === "jhon@gmail.com" && usuario.password === "123456") {
      resolve(usuario);
    } else {
      reject("Usuario incorrecto");
    }
  });
}

//como invocar o usar una promesa

verificarUsuario()
  .then((usuario) => {
    console.log("bienvenido " + usuario.email);
  })
  .catch((err) => {
    console.log("ocurrio un error " + err);
  })
  .finally(() => {
    console.log("fin de la promesa");
  });

//async await
async function verificarUsuarioAsync() {
  try {
    const usuario = await verificarUsuario();
    console.log("bienvenido " + usuario.email);
  } catch (err) {
    console.log("ocurrio un error " + err);
  } finally {
    console.log("fin de la promesa");
  }
}
