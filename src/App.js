import React, { useState } from "react";
import "./styles.css";

const musicCatalog = {
  hiphop: [
    {
      name: "paathshala",
      description: "A modern world but still old school hip-hop song.",
      artist: "spitfire",
      rating: "4.8/5",
      link: "https://www.youtube.com/watch?v=_bURZgrnmoE"
    },
    {
      name: "kohinoor",
      description: "A gem of a rap written by a Kohinoor himself.",
      artist: "divine",
      rating: "4.4/5",
      link: "https://www.youtube.com/watch?v=7dt9LvdSdIA"
    },
    {
      name: "mawali qawali",
      description: "A fun beat song, will definitely make you dance!",
      artist: "mojo jojo",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=yoyKqkHqGcc"
    }
  ],
  qawwali: [
    {
      name: "saadagi to hamari zara dekhiye",
      description: "Well, this one will make you remember people.",
      artist: "nusrat fateh ali khan",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=AMUGle-YeVI"
    },
    {
      name: "kali kali zulfon ke phande na dalo",
      description: "And this is gonna make you repel some people.",
      artist: "nusrat fateh ali khan",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=lsqsggtTZfs"
    },
    {
      name: "kun faya kun",
      description: "A song which you will always need!",
      artist: "a. r. rahman",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=T94PHkuydcw"
    }
  ],
  devotional: [
    {
      name: "shree ganeshay dheemahi",
      description:
        "This song needs no description. This song gives you peace, gives you confidence, etc.",
      artist: "shankar mahadevan",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=H8ezdkxrx0c"
    },
    {
      name: "hanuman chalisa",
      description:
        "This one's for the OG Indian Superhero. This song describes the life of Hanuman along with the events.",
      artist: "shankar mahadevan",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=r8ctRBDuE8Y"
    },
    {
      name: "o paalanhaare",
      description:
        "This song speaks to people in difficulty by asking Lord Krishna to help them.",
      artist: "a. r. rahman",
      rating: "5/5",
      link: "https://www.youtube.com/watch?v=kbMinfmC3E0"
    }
  ]
};

var genres = Object.keys(musicCatalog);

export default function App() {
  const [genre, setGenre] = useState("hiphop");

  function genreClickHandler(genre) {
    // processing
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="bookshelf">
          🎵
        </span>{" "}
        music-catalog
      </h1>
      <p>explore your genre.</p>

      {genres.map((genre) => {
        return (
          <button
            onClick={() => genreClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(229, 231, 235)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
            className="bigButton"
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {musicCatalog[genre].map((song) => {
          return (
            <a href={song.link} style={{ textDecoration: "none" }}>
              <li
                style={{
                  listStyleType: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "0.5rem",
                  margin: "1rem 0rem",
                  fontSize: "larger"
                }}
                key={song.name}
              >
                <div style={{ fontSize: "1.5rem", padding: "0.2rem" }}>
                  {song.name}
                </div>
                <div style={{ fontSize: "1rem", padding: "0.1rem" }}>
                  description: {song.description}
                </div>
                <div style={{ fontSize: "0.8rem", padding: "0.1rem 0.2rem" }}>
                  artist: {song.artist}
                </div>
                <div style={{ fontSize: "1rem", padding: "0 0.2rem" }}>
                  rating: {song.rating}
                </div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
