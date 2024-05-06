const arrowPontoEntrega = document.getElementById("arrow-ponto-entrega");
const arrowIgrejas = document.getElementById("arrow-igrejas");
const arrowCondominio = document.getElementById("arrow-condominio");
const arrowMercados = document.getElementById("arrow-mercados");
const arrowProjetosSociais = document.getElementById("arrow-projetos-sociais");
const arrowEstabelecimentoComercial = document.getElementById("arrow-estabelecimento-comercial");

const svgPontoEntrega = document.getElementById("svg-ponto-entrega");
const svgIgrejas = document.getElementById("svg-igrejas");
const svgCondominio = document.getElementById("svg-condominio");
const svgMercados = document.getElementById("svg-mercados");
const svgProjetosSociais = document.getElementById("svg-projetos-sociais");
const svgEstabelecimentoComercial = document.getElementById("svg-estabelecimento-comercial");

svgPontoEntrega.classList.add("fade_in")
svgIgrejas.classList.add("fade_in")
svgCondominio.classList.add("fade_in")
svgMercados.classList.add("fade_in")
svgProjetosSociais.classList.add("fade_in")
svgEstabelecimentoComercial.classList.add("fade_in")


const link_ponto_entrega = document.querySelector(".link_ponto_entrega");
const link_igreja = document.querySelector(".link_igreja");
const link_condominio = document.querySelector(".link_condominio");
const link_mercado = document.querySelector(".link_mercados");
const link_projetos = document.querySelector(".link_projetos_sociais");
const link_comercial = document.querySelector(".link_comercios");

const text = document.getElementById("text-ponto-entrega");

function activeArrow() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");
	const arrowsBorder = circle.getElementsByClassName("arrow-border");
	arrows.forEach((arrow, index) => {
		arrow.addEventListener("click", () => {
			const current = document.getElementsByClassName("active-arrow");
			const currentB = document.getElementsByClassName("active-arrow-border");
			current[0].classList.remove("active-arrow");
			currentB[0].classList.remove("active-arrow-border");
			arrow.classList.add("active-arrow");
			arrowsBorder[index].classList.add("active-arrow-border");
		});
	});
}

function activeContentPontoEntrega() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");

	const arrowsBorder = circle.getElementsByClassName("arrow-border");

	arrows.forEach((arrow, index) => {
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
	text.innerHTML = `
    <h3 class="fade_in">CONHEÇA NOSSOS PONTOS DE ENTREGA E COLETA</h3>
            <p class="fade_in" >
              Na Godzilla Reciclagem de Óleo, temos o compromisso de tornar o
              processo de reciclagem de óleo vegetal acessível e conveniente para
              todos. Desenvolvemos parcerias com uma ampla variedade de
              estabelecimentos comerciais, condomínios, igrejas, projetos sociais,
              mercados e outros locais, para oferecer tanto pontos de entrega
              quanto pontos de coleta.
            </p>
            <p class="fade_in">
              Atuamos tanto com pontos de entrega quanto com pontos de coleta,
              entenda a diferença dos dois a seguir.
            </p>
            <p class="fade_in">
              <strong>Ponto de entrega:</strong> Os pontos de entrega são locais
              acessíveis a qualquer cidadão, onde é possível armazenar o óleo
              usado em garrafas PET e levá-lo até um ponto de entrega para
              reciclagem de forma segura e correta. Esta opção permite que os
              indivíduos contribuam ativamente para a preservação do meio
              ambiente, reciclando seu óleo de cozinha em seu próprio ritmo.
            </p>
            <p class="fade_in">
              <strong>Ponto de coleta:</strong> Os pontos de coleta são locais
              exclusivos para empresas parceiras, onde utilizam recipientes
              específicos para armazenar o óleo consumido durante um determinado
              período. Essa modalidade é ideal para empresas e instituições que
              desejam adotar práticas sustentáveis em suas operações, contribuindo
              para a redução do impacto ambiental.
            </p>
  
            <p class="fade_in">
              Torne-se mais um de nossos parceiros e ajude a preservar o nosso
              meio ambiente. Juntos, podemos fazer a diferença!
            </p>
    `;
}

function activeContentIgreja() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");
	const arrowsBorder = circle.getElementsByClassName("arrow-border");

	arrows.forEach((arrow, index) => {
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

	text.innerHTML = `
    <h3 class="fade_in" >IGREJAS</h3>
    <p class="fade_in">
      Em parceria com as paróquias locais, desenvolvemos uma colaboração
      especial para promover a reciclagem de óleo vegetal durante eventos
      festivos e feiras anuais. Disponibilizamos recipientes especiais
      para que as igrejas possam armazenar o óleo durante períodos de
      festividades paroquiais e quermesses.
    </p>
    <p class="fade_in">
      Além de promover um impacto positivo no meio ambiente através da
      reciclagem do óleo durante esses eventos, as igrejas também
      funcionam como pontos de entrega, abertos para receber o óleo da
      comunidade local. Recomendamos entrar em contato com a coordenação
      da sua paróquia para verificar se existe um ponto de entrega
      disponível.
    </p>
    <p class="fade_in">
      Se você está interessado em transformar sua paróquia em um ponto de
      entrega para reciclagem de óleo, clique em "Saiba Mais" para obter
      mais informações e começar a fazer a diferença em sua comunidade.
    </p>
    `;
}

function activeContentCondominio() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");
	const arrowsBorder = circle.getElementsByClassName("arrow-border");

	arrows.forEach((arrow, index) => {
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
	text.innerHTML = `
    <h3 class="fade_in">CONDOMINIOS</h3>
    <p class="fade_in">
      Em parceria com condomínios em toda São Paulo, fornecemos recipientes para o armazenamento de óleo proveniente do espaço para festas e dos moradores.
    </p>
    <p class="fade_in">
      Compramos seu Óleo: Oferecemos um retorno financeiro para o seu condomínio, comprando o óleo reciclado por R$2,50 por litro. Ao participar do programa, você não só ajuda o meio ambiente, mas também contribui para um retorno financeiro positivo para o seu condomínio.
    </p>
    <h4 class="fade_in">
      Benefícios de Ter um Recipiente em Seu Condomínio:
    </h4>
    <ul class="fade_in">
      <li>Retorno Financeiro: A cada litro de óleo reciclado, seu condomínio recebe R$2,50, proporcionando um benefício financeiro adicional.</li>
      <li>Sem Custos Adicionais: Não cobramos pelo fornecimento do recipiente para armazenamento nem pelos custos de retirada do óleo, oferecendo uma solução conveniente e sem custos adicionais para o condomínio.</li>
    </ul>
    <p class="fade_in">Sem Custos Adicionais: Não cobramos pelo fornecimento do recipiente para armazenamento nem pelos custos de retirada do óleo, oferecendo uma solução conveniente e sem custos adicionais para o condomínio.</p>
    `;
}

function activeContentMercados() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");
	const arrowsBorder = circle.getElementsByClassName("arrow-border");

	arrows.forEach((arrow, index) => {
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
	text.innerHTML = `   
    <h3 class="fade_in" >MERCADOS</h3>
    <p class="fade_in">
      Se você não mora em um condomínio, mas tem interesse em ajudar o
      meio ambiente, os mercados são uma excelente opção como ponto de
      entrega. Verifique com o mercado mais próximo à sua residência se
      eles possuem um recipiente para armazenamento do óleo usado. Caso
      identifique um mercado sem esse ponto de entrega, ou se você é
      proprietário de um mercado e deseja contribuir para a reciclagem de
      óleo, entre em contato conosco para solicitar um recipiente.
    </p>
    <p class="fade_in">
      Ao escolher um mercado com ponto de entrega de óleo, você está
      contribuindo diretamente para a preservação do meio ambiente e
      ajudando a promover práticas sustentáveis em sua comunidade.
      Junte-se a nós nessa iniciativa e faça a diferença!
    </p>`;
}

function activeContentProjetosSociais() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");
	const arrowsBorder = circle.getElementsByClassName("arrow-border");

	arrows.forEach((arrow, index) => {
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
	text.innerHTML = `
    <h3 class="fade_in">Projetos Sociais</h3>
    <p class="fade_in">
      Porque não incluir no seu projeto social a questão ambiental? Por
      que não incluir a questão ambiental em seu projeto social?
      Independente da natureza do seu projeto, a pauta ambiental é um tema
      atual e indispensável. Através da conscientização, educação e
      parceria com a comunidade, incentivamos os participantes dos
      projetos sociais a armazenarem o óleo de cozinha em suas residências
      e o levarem até o projeto. Dessa forma, transformamos o óleo
      coletado em retorno para os participantes, através da venda do óleo
      para nós.
    </p>
  
    <h4 class="fade_in">Como funciona:</h4>
    <ul class="fade_in">
      <li>
        Armazenamento e Coleta: Solicitamos aos participantes que
        armazenem o óleo de cozinha em suas residências e o levem até o
        projeto.
      </li>
      <li>
        Retorno Financeiro: A cada litro de óleo coletado, pagamos R$2,50,
        proporcionando um retorno para a compra de materiais e ajudando a
        dar continuidade ao seu projeto.
      </li>
    </ul>
    <p class="fade_in">
      Ao participar do nosso projeto de reciclagem de óleo, você não só
      contribui para a preservação do meio ambiente, mas também fortalece
      o seu projeto social, beneficiando a comunidade de forma ampla e
      positiva.
    </p>
    `;
}

function activeContentEstabelecimentoComercial() {
	const circle = document.querySelector(".circle");
	const arrows = document.querySelectorAll(".arrow");
	const arrowsBorder = circle.getElementsByClassName("arrow-border");

	arrows.forEach((arrow, index) => {
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
	text.innerHTML = `
    <h3 class="fade_in">Estabelecimentos Comerciais</h3>
    <p class="fade_in">
      Se você busca uma empresa confiável para atender suas necessidades,
      nós somos a escolha certa. Oferecemos uma ampla variedade de
      produtos dentro dos padrões exigidos pela vigilância sanitária, além
      de fornecer toda a documentação necessária conforme as normas da
      CETESB.
    </p>
  
    <h4 class="fade_in">Nosso Diferencial</h4>
    <ul class="fade_in">
      <li>
        Recipiente Gratuito: Fornecemos um recipiente para armazenamento
        do óleo sem nenhum custo adicional. Após cada coleta, deixamos um
        novo recipiente limpo e livre de resíduos, garantindo praticidade
        e higiene em todo o processo.
      </li>
      <li>
        Certificações: Emitimos uma nota referente ao controle da coleta.
        Para estabelecimentos comerciais interessados em firmar uma
        parceria conosco, fornecemos a documentação exigida pela CETESB,
        assegurando conformidade com todas as regulamentações ambientais.
      </li>
      <li>
        Variedade de Produtos: Dispomos de uma ampla gama de produtos,
        incluindo desincrustante, detergente neutro, cândida,
        desinfetante, maridão, panos brancos e xadrez, sacos de lixo
        reforçados, entre outras soluções para o seu comércio. Todos os
        produtos são disponibilizados em recipientes de 5 litros e 20
        litros, com rótulos que seguem rigorosamente as normas exigidas.
      </li>
    </ul>
    <p class="fade_in">
      Estamos comprometidos em oferecer produtos e serviços de qualidade,
      proporcionando uma parceria sólida e confiável para o seu
      estabelecimento comercial.
    </p>
    <p class="fade_in">
      <strong>Produtos:</strong> Temos uma varíedade grande de produtos
      como desincrustante, detergente neutro, cândida, desinfetante,
      maridão, (pano branco, pano xadrez), (saco de lixo reforçado), entre
      outras soluções pro seu comércio em recipientes de 5 litros e 20
      litros com rótulo dentro das normas exigidas.
    </p>
    `;
}

arrowPontoEntrega.addEventListener("click", activeContentPontoEntrega);
arrowIgrejas.addEventListener("click", activeContentIgreja);
arrowCondominio.addEventListener("click", activeContentCondominio);
arrowMercados.addEventListener("click", activeContentMercados);
arrowProjetosSociais.addEventListener("click", activeContentProjetosSociais);
arrowEstabelecimentoComercial.addEventListener("click", activeContentEstabelecimentoComercial);

// link_ponto_entrega.addEventListener("click", activeContentPontoEntrega);
link_igreja.addEventListener("click", activeContentIgreja);
link_condominio.addEventListener("click", activeContentCondominio);
link_mercado.addEventListener("click", activeContentMercados);
link_projetos.addEventListener("click", activeContentProjetosSociais);
link_comercial.addEventListener("click", activeContentEstabelecimentoComercial);

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-item a");

activeArrow();

window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.id;
      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('.nav-item a[href*=' + id + ']').classList.add('active');
          });
      };
  });
};

function resizeCarrouselImage() {
    let screenWidth = screen.width;
    if(screenWidth > 1320) {
        const carouselImage1 = document.querySelector(".first-carrousel");
        const carouselImage2 = document.querySelector(".second-carrousel");
        carouselImage1.style = `background-size: ${screenWidth}px 500px;`;
        carouselImage2.style = `background-size: ${screenWidth}px 500px;`;
    }
    else{
        const carouselImage1 = document.querySelector(".first-carrousel");
        const carouselImage2 = document.querySelector(".second-carrousel");
        carouselImage1.style = `background-size:cover `;
        carouselImage2.style = `background-size:cover `;
    }
    
  }
  window.addEventListener("load", function () {
    resizeCarrouselImage();
  });
  
  window.addEventListener("resize", function () {
    resizeCarrouselImage();
  });

  const btn_fale_conoscos = document.querySelector(".btn-fale-conosco");

  btn_fale_conoscos.addEventListener("click", () => {
    let inputNome = document.querySelector(".inputNome");
    let inputEmail = document.querySelector(".inputEmail");
    let inputTelefone = document.querySelector(".inputTelefone");
    let inputAssunto = document.querySelector(".inputAssunto");
    let textAreaMensagem = document.querySelector(".textAreaMensagem");
    let envio_form = document.querySelector(".envio_form");

    let data = {
      nome: inputNome.value,
      email: inputEmail.value,
      assunto: inputAssunto.value,
      telefone: inputTelefone.value,
      mensagem: textAreaMensagem.value,
      _template: "table",
      _subject: "Contato do site Godzilla Reciclagem de Óleo"
    }

   try{
    fetch('https://formsubmit.co/ajax/rodrigo@godzillacoletadeoleo.com', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));
    
    inputNome.value = "";
    inputEmail.value = "";
    inputTelefone.value = "";
    inputAssunto.value = "";
    textAreaMensagem.value = "";

    envio_form.innerHTML = `<p class="fw-bold">Mensagem enviada com sucesso!</p>`;
   }catch(err) {
    envio_form.innerHTML = `<p class="fw-bold">Erro ao enviar a mensagem, tente novamente mais tarde!</p>`;
   }

  });