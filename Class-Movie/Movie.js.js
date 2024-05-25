class Movie {
      constructor(title,studio,rating){
             this.title = title;
             this.studio = studio;
             this.rating = rating;
      }

      static getPG(movie){
           return movie.filter((movie => movie.rating === "PG"));
      }
}

 let movie1 = new Movie("Sarkar","Sun Pictures","U/A");
 let movie2 = new Movie("Irumbu Thirai","Lyca Productions","PG");
 let movie3 = new Movie("Kaala","Lyca Productions","R");
 let movie4 = new Movie("Thaanaa Serndha Koottam","Studio Green","PG");
 let movie5 = new Movie("96","Seven Screen Studio","PG");
 let movie6 = new Movie("Vishwaroopam II","Raaj Kamal Films International","R");

let movieArray = [movie1,movie2,movie3,movie4,movie5,movie6];
let movieGetPG = Movie.getPG(movieArray);
console.log(movieGetPG);
 
