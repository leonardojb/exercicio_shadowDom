// Cria a classe
class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        // Diz que o build e o style pertencem à classe
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // Cria os elementos dentro de um build
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "container");

        const elementosNoticia = document.createElement("div");
        elementosNoticia.setAttribute("class", "card")
        const cardLeft = document.createElement("div"); 
        cardLeft.setAttribute("class", "card__left")
        const cardRight = document.createElement("div"); 
        cardRight.setAttribute("class", "card__right")

        const autorImg = document.createElement("div");
        autorImg.setAttribute("class", "photoAutor")
        const autorPhoto = document.createElement("img");
        autorPhoto.src = this.getAttribute("autor-photo")
        autorPhoto.setAttribute("class", "authorPhoto");
        const autor = document.createElement("span");
        autor.textContent = this.getAttribute("autor") || "Redação";

        componentRoot.appendChild(elementosNoticia);
        autorImg.appendChild(autorPhoto)
        autorImg.appendChild(autor);

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("tituloMateria");
        linkTitle.href = this.getAttribute("linkNoticia")
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("conteudoMateria");

        cardLeft.appendChild(autorImg);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("noticia-photo")
        newsImage.setAttribute("class", "imgNoticia");

        cardRight.appendChild(newsImage);

        elementosNoticia.appendChild(cardLeft);
        elementosNoticia.appendChild(cardRight);
        
        return componentRoot
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .card {
        padding: 1rem;
        margin: 1rem;
        width: 90%;
        display: flex;
        flex-direction: row;
        box-shadow: -5px 5px 23px 0px rgba(0,0,0,0.41);
        -webkit-box-shadow: -5px 5px 23px 0px rgba(0,0,0,0.41);
        -moz-box-shadow: -5px 5px 23px 0px rgba(0,0,0,0.41);
    }
    .imgNoticia {
        max-width: 20rem;
    }
    .photoAutor {
        display: flex;
        flex-direction: row;
        text-align: center;
    }
    .authorPhoto{
        margin-right: 10px;
        max-width: 2rem;
    }
    
    .card__left{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .card__left > a{
        font-weight: 700;
        margin-top: 1.5rem;
        font-size: 25px;
        text-decoration: none;
        color: black;
    }
    
    .card__left > p{
        color: gray;
    }
    
    @media screen and (max-width: 635px){
        .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .card__right{
            text-align: center;
        }
    }
    
    @media screen and (min-width: 636px){
        .card {
            display: flex;
            flex-direction: row;
        }
        .card__right{
            text-align: center;
            justify-content: center;
        }
    }
`
    return style
    }
}

customElements.define("card-news", Cardnews);