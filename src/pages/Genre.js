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
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridGap: '20px',
      padding: '20px',
      boxSizing: 'border-box'
    },
    genreContainer: {
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
    },
    genreContainerHover: {
      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    },
    image: {
      height: '200px',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    },
    name: {
      padding: '10px',
      color: '#333',
      fontSize: '24px',
      fontWeight: 'bold'
    },
    description: {
      padding: '10px',
      color: '#666',
      fontSize: '16px',
      lineHeight: '1.6'
    },
  };

  return (
    <div style={styles.container} className='home'>
      {genres.map((genre, index) => (
        <div key={index} style={styles.genreContainer}>
          <img style={styles.image} src={genre.image} alt={genre.name} />
          <h2 style={styles.name}>{genre.name}</h2>
          <p style={styles.description}>{genre.description}</p>
        </div>
      ))}
    </div>
  );
}

