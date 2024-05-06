"use strict";

var arrowPontoEntrega = document.getElementById("arrow-ponto-entrega");
var arrowIgrejas = document.getElementById("arrow-igrejas");
var arrowCondominio = document.getElementById("arrow-condominio");
var arrowMercados = document.getElementById("arrow-mercados");
var arrowProjetosSociais = document.getElementById("arrow-projetos-sociais");
var arrowEstabelecimentoComercial = document.getElementById("arrow-estabelecimento-comercial");
var svgPontoEntrega = document.getElementById("svg-ponto-entrega");
var svgIgrejas = document.getElementById("svg-igrejas");
var svgCondominio = document.getElementById("svg-condominio");
var svgMercados = document.getElementById("svg-mercados");
var svgProjetosSociais = document.getElementById("svg-projetos-sociais");
var svgEstabelecimentoComercial = document.getElementById("svg-estabelecimento-comercial");
svgPontoEntrega.classList.add("fade_in");
svgIgrejas.classList.add("fade_in");
svgCondominio.classList.add("fade_in");
svgMercados.classList.add("fade_in");
svgProjetosSociais.classList.add("fade_in");
svgEstabelecimentoComercial.classList.add("fade_in");
var link_ponto_entrega = document.querySelector(".link_ponto_entrega");
var link_igreja = document.querySelector(".link_igreja");
var link_condominio = document.querySelector(".link_condominio");
var link_mercado = document.querySelector(".link_mercados");
var link_projetos = document.querySelector(".link_projetos_sociais");
var link_comercial = document.querySelector(".link_comercios");
var text = document.getElementById("text-ponto-entrega");

function activeArrow() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.addEventListener("click", function () {
      var current = document.getElementsByClassName("active-arrow");
      var currentB = document.getElementsByClassName("active-arrow-border");
      current[0].classList.remove("active-arrow");
      currentB[0].classList.remove("active-arrow-border");
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    });
  });
}

function activeContentPontoEntrega() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.classList.remove("active-arrow");
    arrowsBorder[index].classList.remove("active-arrow-border");

    if (arrow.id === "arrow-ponto-entrega") {
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    }
  });
  svgPontoEntrega.style.display = "block";
  svgIgrejas.style.display = "none";
  svgCondominio.style.display = "none";
  svgMercados.style.display = "none";
  svgProjetosSociais.style.display = "none";
  svgEstabelecimentoComercial.style.display = "none";
  text.innerHTML = "\n    <h3 class=\"fade_in\">CONHE\xC7A NOSSOS PONTOS DE ENTREGA E COLETA</h3>\n            <p class=\"fade_in\" >\n              Na Godzilla Reciclagem de \xD3leo, temos o compromisso de tornar o\n              processo de reciclagem de \xF3leo vegetal acess\xEDvel e conveniente para\n              todos. Desenvolvemos parcerias com uma ampla variedade de\n              estabelecimentos comerciais, condom\xEDnios, igrejas, projetos sociais,\n              mercados e outros locais, para oferecer tanto pontos de entrega\n              quanto pontos de coleta.\n            </p>\n            <p class=\"fade_in\">\n              Atuamos tanto com pontos de entrega quanto com pontos de coleta,\n              entenda a diferen\xE7a dos dois a seguir.\n            </p>\n            <p class=\"fade_in\">\n              <strong>Ponto de entrega:</strong> Os pontos de entrega s\xE3o locais\n              acess\xEDveis a qualquer cidad\xE3o, onde \xE9 poss\xEDvel armazenar o \xF3leo\n              usado em garrafas PET e lev\xE1-lo at\xE9 um ponto de entrega para\n              reciclagem de forma segura e correta. Esta op\xE7\xE3o permite que os\n              indiv\xEDduos contribuam ativamente para a preserva\xE7\xE3o do meio\n              ambiente, reciclando seu \xF3leo de cozinha em seu pr\xF3prio ritmo.\n            </p>\n            <p class=\"fade_in\">\n              <strong>Ponto de coleta:</strong> Os pontos de coleta s\xE3o locais\n              exclusivos para empresas parceiras, onde utilizam recipientes\n              espec\xEDficos para armazenar o \xF3leo consumido durante um determinado\n              per\xEDodo. Essa modalidade \xE9 ideal para empresas e institui\xE7\xF5es que\n              desejam adotar pr\xE1ticas sustent\xE1veis em suas opera\xE7\xF5es, contribuindo\n              para a redu\xE7\xE3o do impacto ambiental.\n            </p>\n  \n            <p class=\"fade_in\">\n              Torne-se mais um de nossos parceiros e ajude a preservar o nosso\n              meio ambiente. Juntos, podemos fazer a diferen\xE7a!\n            </p>\n    ";
}

function activeContentIgreja() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.classList.remove("active-arrow");
    arrowsBorder[index].classList.remove("active-arrow-border");

    if (arrow.id === "arrow-igrejas") {
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    }
  });
  svgPontoEntrega.style.display = "none";
  svgIgrejas.style.display = "block";
  svgCondominio.style.display = "none";
  svgMercados.style.display = "none";
  svgProjetosSociais.style.display = "none";
  svgEstabelecimentoComercial.style.display = "none";
  text.innerHTML = "\n    <h3 class=\"fade_in\" >IGREJAS</h3>\n    <p class=\"fade_in\">\n      Em parceria com as par\xF3quias locais, desenvolvemos uma colabora\xE7\xE3o\n      especial para promover a reciclagem de \xF3leo vegetal durante eventos\n      festivos e feiras anuais. Disponibilizamos recipientes especiais\n      para que as igrejas possam armazenar o \xF3leo durante per\xEDodos de\n      festividades paroquiais e quermesses.\n    </p>\n    <p class=\"fade_in\">\n      Al\xE9m de promover um impacto positivo no meio ambiente atrav\xE9s da\n      reciclagem do \xF3leo durante esses eventos, as igrejas tamb\xE9m\n      funcionam como pontos de entrega, abertos para receber o \xF3leo da\n      comunidade local. Recomendamos entrar em contato com a coordena\xE7\xE3o\n      da sua par\xF3quia para verificar se existe um ponto de entrega\n      dispon\xEDvel.\n    </p>\n    <p class=\"fade_in\">\n      Se voc\xEA est\xE1 interessado em transformar sua par\xF3quia em um ponto de\n      entrega para reciclagem de \xF3leo, clique em \"Saiba Mais\" para obter\n      mais informa\xE7\xF5es e come\xE7ar a fazer a diferen\xE7a em sua comunidade.\n    </p>\n    ";
}

function activeContentCondominio() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.classList.remove("active-arrow");
    arrowsBorder[index].classList.remove("active-arrow-border");

    if (arrow.id === "arrow-condominio") {
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    }
  });
  svgPontoEntrega.style.display = "none";
  svgIgrejas.style.display = "none";
  svgCondominio.style.display = "block";
  svgMercados.style.display = "none";
  svgProjetosSociais.style.display = "none";
  svgEstabelecimentoComercial.style.display = "none";
  text.innerHTML = "\n    <h3 class=\"fade_in\">CONDOMINIOS</h3>\n    <p class=\"fade_in\">\n      Em parceria com condom\xEDnios em toda S\xE3o Paulo, fornecemos recipientes para o armazenamento de \xF3leo proveniente do espa\xE7o para festas e dos moradores.\n    </p>\n    <p class=\"fade_in\">\n      Compramos seu \xD3leo: Oferecemos um retorno financeiro para o seu condom\xEDnio, comprando o \xF3leo reciclado por R$2,50 por litro. Ao participar do programa, voc\xEA n\xE3o s\xF3 ajuda o meio ambiente, mas tamb\xE9m contribui para um retorno financeiro positivo para o seu condom\xEDnio.\n    </p>\n    <h4 class=\"fade_in\">\n      Benef\xEDcios de Ter um Recipiente em Seu Condom\xEDnio:\n    </h4>\n    <ul class=\"fade_in\">\n      <li>Retorno Financeiro: A cada litro de \xF3leo reciclado, seu condom\xEDnio recebe R$2,50, proporcionando um benef\xEDcio financeiro adicional.</li>\n      <li>Sem Custos Adicionais: N\xE3o cobramos pelo fornecimento do recipiente para armazenamento nem pelos custos de retirada do \xF3leo, oferecendo uma solu\xE7\xE3o conveniente e sem custos adicionais para o condom\xEDnio.</li>\n    </ul>\n    <p class=\"fade_in\">Sem Custos Adicionais: N\xE3o cobramos pelo fornecimento do recipiente para armazenamento nem pelos custos de retirada do \xF3leo, oferecendo uma solu\xE7\xE3o conveniente e sem custos adicionais para o condom\xEDnio.</p>\n    ";
}

function activeContentMercados() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.classList.remove("active-arrow");
    arrowsBorder[index].classList.remove("active-arrow-border");

    if (arrow.id === "arrow-mercados") {
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    }
  });
  svgPontoEntrega.style.display = "none";
  svgIgrejas.style.display = "none";
  svgCondominio.style.display = "none";
  svgMercados.style.display = "block";
  svgProjetosSociais.style.display = "none";
  svgEstabelecimentoComercial.style.display = "none";
  text.innerHTML = "   \n    <h3 class=\"fade_in\" >MERCADOS</h3>\n    <p class=\"fade_in\">\n      Se voc\xEA n\xE3o mora em um condom\xEDnio, mas tem interesse em ajudar o\n      meio ambiente, os mercados s\xE3o uma excelente op\xE7\xE3o como ponto de\n      entrega. Verifique com o mercado mais pr\xF3ximo \xE0 sua resid\xEAncia se\n      eles possuem um recipiente para armazenamento do \xF3leo usado. Caso\n      identifique um mercado sem esse ponto de entrega, ou se voc\xEA \xE9\n      propriet\xE1rio de um mercado e deseja contribuir para a reciclagem de\n      \xF3leo, entre em contato conosco para solicitar um recipiente.\n    </p>\n    <p class=\"fade_in\">\n      Ao escolher um mercado com ponto de entrega de \xF3leo, voc\xEA est\xE1\n      contribuindo diretamente para a preserva\xE7\xE3o do meio ambiente e\n      ajudando a promover pr\xE1ticas sustent\xE1veis em sua comunidade.\n      Junte-se a n\xF3s nessa iniciativa e fa\xE7a a diferen\xE7a!\n    </p>";
}

function activeContentProjetosSociais() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.classList.remove("active-arrow");
    arrowsBorder[index].classList.remove("active-arrow-border");

    if (arrow.id === "arrow-projetos-sociais") {
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    }
  });
  svgPontoEntrega.style.display = "none";
  svgIgrejas.style.display = "none";
  svgCondominio.style.display = "none";
  svgMercados.style.display = "none";
  svgProjetosSociais.style.display = "block";
  svgEstabelecimentoComercial.style.display = "none";
  text.innerHTML = "\n    <h3 class=\"fade_in\">Projetos Sociais</h3>\n    <p class=\"fade_in\">\n      Porque n\xE3o incluir no seu projeto social a quest\xE3o ambiental? Por\n      que n\xE3o incluir a quest\xE3o ambiental em seu projeto social?\n      Independente da natureza do seu projeto, a pauta ambiental \xE9 um tema\n      atual e indispens\xE1vel. Atrav\xE9s da conscientiza\xE7\xE3o, educa\xE7\xE3o e\n      parceria com a comunidade, incentivamos os participantes dos\n      projetos sociais a armazenarem o \xF3leo de cozinha em suas resid\xEAncias\n      e o levarem at\xE9 o projeto. Dessa forma, transformamos o \xF3leo\n      coletado em retorno para os participantes, atrav\xE9s da venda do \xF3leo\n      para n\xF3s.\n    </p>\n  \n    <h4 class=\"fade_in\">Como funciona:</h4>\n    <ul class=\"fade_in\">\n      <li>\n        Armazenamento e Coleta: Solicitamos aos participantes que\n        armazenem o \xF3leo de cozinha em suas resid\xEAncias e o levem at\xE9 o\n        projeto.\n      </li>\n      <li>\n        Retorno Financeiro: A cada litro de \xF3leo coletado, pagamos R$2,50,\n        proporcionando um retorno para a compra de materiais e ajudando a\n        dar continuidade ao seu projeto.\n      </li>\n    </ul>\n    <p class=\"fade_in\">\n      Ao participar do nosso projeto de reciclagem de \xF3leo, voc\xEA n\xE3o s\xF3\n      contribui para a preserva\xE7\xE3o do meio ambiente, mas tamb\xE9m fortalece\n      o seu projeto social, beneficiando a comunidade de forma ampla e\n      positiva.\n    </p>\n    ";
}

function activeContentEstabelecimentoComercial() {
  var circle = document.querySelector(".circle");
  var arrows = document.querySelectorAll(".arrow");
  var arrowsBorder = circle.getElementsByClassName("arrow-border");
  arrows.forEach(function (arrow, index) {
    arrow.classList.remove("active-arrow");
    arrowsBorder[index].classList.remove("active-arrow-border");

    if (arrow.id === "arrow-estabelecimento-comercial") {
      arrow.classList.add("active-arrow");
      arrowsBorder[index].classList.add("active-arrow-border");
    }
  });
  svgPontoEntrega.style.display = "none";
  svgIgrejas.style.display = "none";
  svgCondominio.style.display = "none";
  svgMercados.style.display = "none";
  svgProjetosSociais.style.display = "none";
  svgEstabelecimentoComercial.style.display = "block";
  text.innerHTML = "\n    <h3 class=\"fade_in\">Estabelecimentos Comerciais</h3>\n    <p class=\"fade_in\">\n      Se voc\xEA busca uma empresa confi\xE1vel para atender suas necessidades,\n      n\xF3s somos a escolha certa. Oferecemos uma ampla variedade de\n      produtos dentro dos padr\xF5es exigidos pela vigil\xE2ncia sanit\xE1ria, al\xE9m\n      de fornecer toda a documenta\xE7\xE3o necess\xE1ria conforme as normas da\n      CETESB.\n    </p>\n  \n    <h4 class=\"fade_in\">Nosso Diferencial</h4>\n    <ul class=\"fade_in\">\n      <li>\n        Recipiente Gratuito: Fornecemos um recipiente para armazenamento\n        do \xF3leo sem nenhum custo adicional. Ap\xF3s cada coleta, deixamos um\n        novo recipiente limpo e livre de res\xEDduos, garantindo praticidade\n        e higiene em todo o processo.\n      </li>\n      <li>\n        Certifica\xE7\xF5es: Emitimos uma nota referente ao controle da coleta.\n        Para estabelecimentos comerciais interessados em firmar uma\n        parceria conosco, fornecemos a documenta\xE7\xE3o exigida pela CETESB,\n        assegurando conformidade com todas as regulamenta\xE7\xF5es ambientais.\n      </li>\n      <li>\n        Variedade de Produtos: Dispomos de uma ampla gama de produtos,\n        incluindo desincrustante, detergente neutro, c\xE2ndida,\n        desinfetante, marid\xE3o, panos brancos e xadrez, sacos de lixo\n        refor\xE7ados, entre outras solu\xE7\xF5es para o seu com\xE9rcio. Todos os\n        produtos s\xE3o disponibilizados em recipientes de 5 litros e 20\n        litros, com r\xF3tulos que seguem rigorosamente as normas exigidas.\n      </li>\n    </ul>\n    <p class=\"fade_in\">\n      Estamos comprometidos em oferecer produtos e servi\xE7os de qualidade,\n      proporcionando uma parceria s\xF3lida e confi\xE1vel para o seu\n      estabelecimento comercial.\n    </p>\n    <p class=\"fade_in\">\n      <strong>Produtos:</strong> Temos uma var\xEDedade grande de produtos\n      como desincrustante, detergente neutro, c\xE2ndida, desinfetante,\n      marid\xE3o, (pano branco, pano xadrez), (saco de lixo refor\xE7ado), entre\n      outras solu\xE7\xF5es pro seu com\xE9rcio em recipientes de 5 litros e 20\n      litros com r\xF3tulo dentro das normas exigidas.\n    </p>\n    ";
}

arrowPontoEntrega.addEventListener("click", activeContentPontoEntrega);
arrowIgrejas.addEventListener("click", activeContentIgreja);
arrowCondominio.addEventListener("click", activeContentCondominio);
arrowMercados.addEventListener("click", activeContentMercados);
arrowProjetosSociais.addEventListener("click", activeContentProjetosSociais);
arrowEstabelecimentoComercial.addEventListener("click", activeContentEstabelecimentoComercial); // link_ponto_entrega.addEventListener("click", activeContentPontoEntrega);

link_igreja.addEventListener("click", activeContentIgreja);
link_condominio.addEventListener("click", activeContentCondominio);
link_mercado.addEventListener("click", activeContentMercados);
link_projetos.addEventListener("click", activeContentProjetosSociais);
link_comercial.addEventListener("click", activeContentEstabelecimentoComercial);
var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll(".nav-item a");
activeArrow();

window.onscroll = function () {
  sections.forEach(function (sec) {
    var top = window.scrollY;
    var offset = sec.offsetTop - 150;
    var height = sec.offsetHeight;
    var id = sec.id;

    if (top >= offset && top < offset + height) {
      navLinks.forEach(function (links) {
        links.classList.remove('active');
        document.querySelector('.nav-item a[href*=' + id + ']').classList.add('active');
      });
    }

    ;
  });
};

function resizeCarrouselImage() {
  var screenWidth = screen.width;

  if (screenWidth > 1320) {
    var carouselImage1 = document.querySelector(".first-carrousel");
    var carouselImage2 = document.querySelector(".second-carrousel");
    carouselImage1.style = "background-size: ".concat(screenWidth, "px 500px;");
    carouselImage2.style = "background-size: ".concat(screenWidth, "px 500px;");
  } else {
    var _carouselImage = document.querySelector(".first-carrousel");

    var _carouselImage2 = document.querySelector(".second-carrousel");

    _carouselImage.style = "background-size:cover ";
    _carouselImage2.style = "background-size:cover ";
  }
}

window.addEventListener("load", function () {
  resizeCarrouselImage();
});
window.addEventListener("resize", function () {
  resizeCarrouselImage();
});
var btn_fale_conoscos = document.querySelector(".btn-fale-conosco");
btn_fale_conoscos.addEventListener("click", function () {
  var inputNome = document.querySelector(".inputNome");
  var inputEmail = document.querySelector(".inputEmail");
  var inputTelefone = document.querySelector(".inputTelefone");
  var inputAssunto = document.querySelector(".inputAssunto");
  var textAreaMensagem = document.querySelector(".textAreaMensagem");
  var envio_form = document.querySelector(".envio_form");
  var data = {
    nome: inputNome.value,
    email: inputEmail.value,
    assunto: inputAssunto.value,
    telefone: inputTelefone.value,
    mensagem: textAreaMensagem.value,
    _template: "table",
    _subject: "Contato do site Godzilla Reciclagem de Óleo"
  };

  try {
    fetch('https://formsubmit.co/ajax/rodrigo@godzillacoletadeoleo.com', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return console.log(json);
    })["catch"](function (err) {
      return console.log(err);
    });
    inputNome.value = "";
    inputEmail.value = "";
    inputTelefone.value = "";
    inputAssunto.value = "";
    textAreaMensagem.value = "";
    envio_form.innerHTML = "<p class=\"fw-bold\">Mensagem enviada com sucesso!</p>";
  } catch (err) {
    envio_form.innerHTML = "<p class=\"fw-bold\">Erro ao enviar a mensagem, tente novamente mais tarde!</p>";
  }
});