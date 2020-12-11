import React, { useState } from "react";
import "./styles.css";
const movieList = {
  Action: [
    {
      Movie: " The Dark Knight (2008)",
      Rating: " 9.0/10"
    },
    {
      Movie: " The Lord of the Rings: The Return of the King (2003)",
      Rating: " 8.9/10"
    },
    {
      Movie: " Inception (2010)",
      Rating: " 8.8/10"
    },
    {
      Movie: " The Lord of the Rings: The Fellowship of the Ring (2001)",
      Rating: " 8.8/10"
    },
    {
      Movie: " The Lord of the Rings: The Two Towers (2002)",
      Rating: " 8.7/10"
    }
  ],
  Comedy: [
    {
      Movie: " Parasite (2019)",
      Rating: " 8.6/10"
    },
    {
      Movie: " Life Is Beautiful (1997)",
      Rating: " 8.6/10"
    },
    {
      Movie: " The Intouchables (2011)",
      Rating: " 8.5/10"
    },
    {
      Movie: " Back to the Future (1985)",
      Rating: " 8.5/10"
    },
    {
      Movie: " Modern Times (1936)",
      Rating: " 8.5/10"
    }
  ],
  Drama: [
    {
      Movie: " The Shawshank Redemption(1994)",
      Rating: " 9.3/10"
    },
    {
      Movie: " The Godfather (1972)",
      Rating: " 9.2/10"
    },
    {
      Movie: " The Dark Knight (2008)",
      Rating: " 9.0/10"
    },
    {
      Movie: " The Godfather: Part II (1974)",
      Rating: " 9.0/10"
    },
    {
      Movie: " 12 Angry Men (1957)",
      Rating: " 9.0/10"
    }
  ],
  Horror: [
    {
      Movie: " Psycho (1960)",
      Rating: " 8.5/10"
    },
    {
      Movie: " The Shining (1980)",
      Rating: " 8.4/10"
    },
    {
      Movie: " Alien (1979)",
      Rating: " 8.4/10"
    },
    {
      Movie: " Tumbbad (2018)",
      Rating: " 8.3/10"
    },
    {
      Movie: " The Blue Elephant (2014)",
      Rating: " 8.1/10"
    }
  ]
};

export default function App() {
  const [movie, setMovie] = useState("Action");
  function onClickHandler(seemovie) {
    setMovie(seemovie);
  }
  return (
    <div className="App">
      <h1>Top Rated Movies</h1>
      <h2>best imdb rated movies in different genres</h2>

      {Object.keys(movieList).map((seemovie) => {
        return (
          <button onClick={() => onClickHandler(seemovie)} key={seemovie}>
            {seemovie}
          </button>
        );
      })}
      {movieList[movie].map((data) => {
        return (
          <ul>
            <li>
              <div>
                <div>Movie:{data.Movie}</div>
                <div>Rating:{data.Rating}</div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
