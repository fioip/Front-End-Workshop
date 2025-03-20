function Last5songs(){
    const data = [
        {
          title: "Sunset Dreams",
          artist: "The Chillers",
          album: "Chill Vibes",
          year: 2024,
          genre: "Indie Pop",
          link: "https://example.com/sunset-dreams"
        },
        {
          title: "Electric Waves",
          artist: "DJ Spark",
          album: "Electric Night",
          year: 2023,
          genre: "Electronic",
          link: "https://example.com/electric-waves"
        },
        {
          title: "Golden Skies",
          artist: "Sky High",
          album: "Above the Clouds",
          year: 2022,
          genre: "Rock",
          link: "https://example.com/golden-skies"
        },
        {
          title: "Heartbeats",
          artist: "Pulse",
          album: "Rhythms of Life",
          year: 2021,
          genre: "Pop",
          link: "https://example.com/heartbeats"
        },
        {
          title: "Midnight Drive",
          artist: "Night Runners",
          album: "Nocturnal",
          year: 2023,
          genre: "Synthwave",
          link: "https://example.com/midnight-drive"
        }
      ];
    
 
    return(
           <>{data.map((song) => (
            <>
                <p>{song.title}</p>
    </>))}</>
    )
}   

export default Last5songs