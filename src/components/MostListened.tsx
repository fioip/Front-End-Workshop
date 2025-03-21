import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const URL = "https://accounts.spotify.com/api/token";
const CLIENT_ID = "717333395b5f4dd49fcb98e2b595ddee";
const CLIENT_SECRET = "8c1d5f7cedcf4186a34dd5c3722d4a99";
const PLAYLIST_ID = "019pM9GwWYhDkUnyMGFYOn";

function MostListened() {
  const [accessToken, setAccessToken] = useState("");
  const [playlistData, setPlaylistData] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Fetch Spotify access token
  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch token");
        }

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error("Error getting token:", error);
      }
    };

    getToken();
  }, []);

  // Fetch playlist data when accessToken is set
  useEffect(() => {
    if (!accessToken) return;

    const fetchPlaylist = async () => {
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch playlist");
        }

        const data = await response.json();
        setPlaylistData(data);
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    fetchPlaylist();
  }, [accessToken]);

  return (
    <>
      <Typography variant="h2" className="text-center">
        Top Songs
      </Typography>
      <Typography variant="subtitle1" className="text-center">
        These are the most listened songs in the world right now
      </Typography>

      {playlistData && (
        <>
          {/* <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={
                playlistData.images?.[0]?.url || "https://placehold.co/300x300"
              }
              title={playlistData.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                {playlistData.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {playlistData.description || "No description available"}
              </Typography>
            </CardContent>
          </Card> */}

          <List>
            {(showAll
              ? playlistData.tracks.items
              : playlistData.tracks.items.slice(0, 10)
            ).map((track, index) => (
              <ListItem key={index} divider>
                {/* Clickable Album Cover */}
                <ListItemAvatar>
                  <a
                    href={track.track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Avatar
                      src={track.track.album.images?.[0]?.url}
                      alt={track.track.name}
                      sx={{ width: 56, height: 56 }}
                    />
                  </a>
                </ListItemAvatar>

                {/* Song Name & Artist */}
                <ListItemText
                  primary={`${index + 1}. ${track.track.name}`}
                  secondary={`By ${track.track.artists
                    .map((artist) => artist.name)
                    .join(", ")}`}
                />

                {/* Play Button */}
                <IconButton
                  component="a"
                  href={track.track.external_urls.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  <PlayArrowIcon fontSize="large" />
                </IconButton>
              </ListItem>
            ))}
          </List>

          {playlistData.tracks.items.length > 10 && (
            <Button
              variant="contained"
              onClick={() => setShowAll(!showAll)}
              sx={{ display: "block", margin: "auto" }}
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          )}
        </>
      )}
    </>
  );
}

export default MostListened;
