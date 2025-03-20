import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MostListened() {
  return (
    <>
      <Typography variant="h1">Top artists</Typography>
      <Typography variant="subtitle1">
        Most popular artists this month
      </Typography>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 300 }}
          image="https://placehold.co/300x300"
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Artist Name
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Artist Genre
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like</Button>
          <Button size="small">more from them</Button>
        </CardActions>
      </Card>{" "}
    </>
  );
}

export default MostListened;
