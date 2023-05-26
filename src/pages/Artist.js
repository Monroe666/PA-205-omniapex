import React from 'react'
import "../styles/artist.css"

export default function Artist() {
  const artists = [
    {
      name: "Taylor Swift",
      bio: "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her narrative songwriting, which often centers around her personal life, has received widespread critical plaudits and media coverage.",
      albums: ["Fearless", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore"],
      image: "URL_TO_TAYLOR_IMAGE"
    },
    {
      name: "Adele",
      bio: "Adele Laurie Blue Adkins (born 5 May 1988) is an English singer-songwriter. After graduating from the BRIT School in 2006, Adele signed a recording contract with XL Recordings.",
      albums: ["19", "21", "25", "30"],
      image: "URL_TO_ADELE_IMAGE"
    },{
      name: "Beyonce",
      bio: "Beyoncé Giselle Knowles-Carter is an American singer and actress...",
      albums: ["Dangerously in Love", "B'Day", "I Am... Sasha Fierce", "Beyoncé"],
      image: "URL_TO_BEYONCE_IMAGE"
    },
    {
      name: "Justin Bieber",
      bio: "Justin Drew Bieber is a Canadian singer-songwriter and actor...",
      albums: ["My World 2.0", "Believe", "Purpose", "Changes"],
      image: "URL_TO_JUSTIN_IMAGE"
    },
    {
      name: "Ariana Grande",
      bio: "Ariana Grande-Butera is an American singer and actress...",
      albums: ["Yours Truly", "My Everything", "Sweetener"],
      image: "URL_TO_ARIANA_IMAGE"
    },
    {
      name: "Ed Sheeran",
      bio: "Edward Christopher Sheeran is an English singer-songwriter...",
      albums: ["+", "x", "÷", "="],
      image: "URL_TO_ED_IMAGE"
    }
    // add more artists here...
  ];

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    artistContainer: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
      margin: '20px',
      maxWidth: '300px'
    },
    image: {
      width: '100%',
      height: 'auto'
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    bio: {
      fontSize: '16px'
    },
    albums: {
      listStyleType: 'none'
    }
  };

  return (
    <div style={styles.container} className='home'>
      {artists.map((artist, index) => (
        <div key={index} style={styles.artistContainer}>
          <img style={styles.image} src={artist.image} alt={artist.name} />
          <h1 style={styles.name}>{artist.name}</h1>
          <p style={styles.bio}>{artist.bio}</p>
          <h2>Albums</h2>
          <ul style={styles.albums}>
            {artist.albums.map((album, index) => (
              <li key={index}>{album}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
  
    
    
  



