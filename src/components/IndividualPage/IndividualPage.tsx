import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function IndividualPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#282727",
        padding: 3,
      }}
    >
      <Card
        sx={{
          width: 550,
          padding: 4,
          borderRadius: 3,
          boxShadow: 5,
          background: "#1DB954",
          color: "white",
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 7 }}>
            Now Playing: <strong>Artist Name</strong>
          </Typography>
          
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 7 }}>
            Song Title
          </Typography>

          <Typography sx={{ opacity: 0.8 }}>
            Released: <strong>Release Date</strong>
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            Duration: <strong>3:45 min</strong>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
