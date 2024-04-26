class Multimedia {
    constructor(url){
        let _url = url;
        this.geturl = () => _url
    }
    setInicio(){
        return `Este método es para realizar un cambio en la URL del video`;
    }
}

const test = new Multimedia("Viva el equipo gato (=^･ｪ･^=)");
console.log(test.geturl())

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url)
        this._id = id;
    }
    playMultimedia (){
        const url = this.geturl()
        videoModule.playVideo(url, this._id);
    }

    setInicio(tiempo){
        const url = `${this.geturl()}?start=${tiempo}`;
        videoModule.playVideo(url, this._id);
    }
}

const videoModule = (()=>{
    const insertVideo = (url, id) => {
        const iframe = document.getElementById(id);
        iframe.setAttribute("src", url)
    }
    return {playVideo: (url, id) => insertVideo(url, id)}
})() 

const pelicula = new Reproductor ("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas")
pelicula.playMultimedia()
pelicula.setInicio(7);

const musica = new Reproductor ("https://www.youtube.com/embed/fRAA3qv7aNE", "musica")
musica.playMultimedia()
musica.setInicio(5);

const serie = new Reproductor ("https://www.youtube.com/embed/44qfOGvEWAU", "series")
serie.playMultimedia()
serie.setInicio(12);