import imgBanner from "../assets/banner.jpg" //importa a imagem do banner

const Banner = () => { //cria a função Header que é o cabeçalho da página
    return(
        <div className="banner"> 
            <img src={imgBanner} alt="Banner com o nome da cafeteria" />
        </div>
    )
}

export default Banner //exporta a função