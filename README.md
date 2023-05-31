![#](./public/logo%201.svg)

Projeto de uma homepage de produtos de e-commerce, construída a partir do desafio disponível do [FrontendMentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Utilizei o design fornecido pela plataforma e elaborei a página da maneira mais fidedigna possível, desenvolvido com React.js e SASS. E esse foi o meu resultado final 💻<https://sneakers-one-zeta.vercel.app/>.

![#](./public/Mask%20group.svg)

> Veja o comparativo da minha solução com o resultado esperado, [clicando aqui!](https://www.frontendmentor.io/solutions/homepage-de-produtos-de-ecommerce-qtyGelvJZG)

</br>

## 🎯 Objetivos

### Design

Elaborar uma homepage que se aproxime o máximo possível da imagem de referência.

> - Visualizar o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
> - Visualizar os estados de foco para todos os elementos interativos na página

### Funcionalidades

Os usuários devem ser capazes de:

> - Alterar a imagem grande do produto clicando nas miniaturas
> - Utilizar o menu hamburguer na versão mobile
> - Visualizar o carrinho em ambas as versões

</br>

## 🔧 Propriedades e Tecnologias

> - React
> - Vite
> - SASS
> - Mobile-first
> - Semântica HTML
> - Manipulação do DOM

</br>

## 🧠 Meu aprendizado

Vários conceitos foram abordados, com foco no ReactJS, como:

> - Vite
> - PROPS
> - Componentização
> - Hooks

Para dar início ao projeto optei por utilizar o Vite, por sua simples integração com React e SASS. Desse modo, no desenvolvimento foquei na construção dos componentes usando seus atributos com "props", sua estrutura de objeto deixa a documentação mais clara e intuitiva. Com o auxilio da componentização, a aplicação do State Hook foi explorada em todas as possíveis aplicações da página, contribuindo de maneira prática.

React.js

```js
...
const [ counter, setCounter ] = useState(0);

const goBack = () => {
    setCounter((prev) => {
        if(counter > 0) {
            return prev - 1;
        } else {
            return prev;
        }
    })
};

const goToNext = () => {
    setCounter((prev) => {
        return prev + 1;
    })
};
...
```

Acima temos uma aplicação do Hook useState. No decorrer do projeto surgiu a necessidade de ser criado um contador de produtos, que determina a quantidade de produtos que serão comprados. A função é perfeita para essa situação, onde precisamos incrementar ou decrementar números.

</br>

## 💻 Rodando o projeto

Para conferir a versão final é só acessar o link: 💻<https://sneakers-one-zeta.vercel.app/>.

Observação: os testes referente ao layout e responsividade foram realizadas somente utilizando as resoluções 375px e 1360px.

<video>
    <source src="./public/video.mp4" type="video/mp4">
<video>

</br>

## Autor

- LinkedIn - [Pedro A. Lima](https://www.linkedin.com/in/pedroalima6/)
