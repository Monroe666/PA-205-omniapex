import React from 'react'

export default function Genre() {
  // Array of genres' data
  const genres = [
    { 
      name: "Pop", 
      description: "Pop is a genre of popular music...",
      image: "URL_TO_POP_IMAGE" 
    },
    { 
      name: "Rock", 
      description: "Rock music is a broad genre of popular music...",
      image: "URL_TO_ROCK_IMAGE" 
    },
    { 
      name: "Jazz", 
      description: "Jazz is a music genre that originated in the African-American communities...",
      image: "URL_TO_JAZZ_IMAGE" 
    },
    { 
      name: "Hip Hop", 
      description: "Hip hop music, also known as rap music...",
      image: "URL_TO_HIPHOP_IMAGE" 
    },
    { 
      name: "Country", 
      description: "Country music, also known as country and western...",
      image: "URL_TO_COUNTRY_IMAGE" 
    },
    { 
      name: "Blues", 
      description: "Blues is a music genre and musical form...",
      image: "URL_TO_BLUES_IMAGE" 
    },
    { 
      name: "Classical", 
      description: "Classical music is art music produced or rooted...",
      image: "URL_TO_CLASSICAL_IMAGE" 
    },
    // add more genres here...
  ];

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    genreContainer: {
      border: '1px solid #ddd',
      borderRadius: '5px',
      padding: '20px',
      margin: '20px',
      maxWidth: '300px',
      flexBasis: '300px'
    },
    image: {
      width: '100%',
      height: 'auto'
    },
    name: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    description: {
      fontSize: '16px'
    },
  };

  return (
    <div style={styles.container} className='home'>
      {genres.map((genre, index) => (
        <div key={index} style={styles.genreContainer}>
          <img style={styles.image} src={genre.image} alt={genre.name} />
          <h1 style={styles.name}>{genre.name}</h1>
          <p style={styles.description}>{genre.description}</p>
        </div>
      ))}
    </div>
  );
}

