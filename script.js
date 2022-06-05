const botao = document.querySelector("#projetos");
function menuShow(event) {
  const botao = document.querySelector("#projetos");
  const menuProjetos = document.querySelector("#menu-projetos");
  const lista = document.querySelector(".lista-projetos");
  menuProjetos.classList.toggle("projetos-ativo");
  lista.classList.toggle("projetos-ativo");
  botao.classList.toggle("projetos");
  const coordenadas = {
    x: event.x,
    y: event.y,
  };
  menuProjetos.style.top = event.y + "px";
  menuProjetos.style.left = event.x + "px";

  let width = lista.offsetWidth;
  let height = lista.offsetHeight;

  console.log(menuProjetos.classList.contains("projetos-ativo"));
  const body = document.querySelector("body");
  if (menuProjetos.classList.contains("projetos-ativo")) {
    body.addEventListener("mousemove", fecharMenu);
    function fecharMenu(event) {
      const coordenadas2 = {
        x: event.x,
        y: event.y,
      };
      if (
        coordenadas.x + width + 50 < coordenadas2.x ||
        coordenadas.x - 50 > coordenadas2.x ||
        coordenadas.y + height + 30 < coordenadas2.y ||
        coordenadas.y - 30 > coordenadas2.y
      ) {
        menuProjetos.classList.remove("projetos-ativo");
        lista.classList.remove("projetos-ativo");
        body.removeEventListener("mousemove", fecharMenu);
        botao.classList.toggle("projetos");
      }
    }
  }
}
botao.addEventListener("click", menuShow);
