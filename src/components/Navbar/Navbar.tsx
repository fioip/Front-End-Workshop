import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/material";

const pages = [
  { pathName: "Home Page", url: "/" },
  { pathName: "Search Page", url: "/search" },
];

function Navbar() {
  //   const nav = useNavigate();

  //   const navigate = (path: string) => {
  //     console.log(path);
  //     nav(path);
  //   };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2ecc71" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 800,
              letterSpacing: ".2rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            Song Finder
          </Typography>
          <Stack direction="row" spacing={2}>
            {pages.map((page) => (
              <NavLink to={page.url} style={{ textDecoration: "none" }}>
                <Typography variant="h6" color="white">
                  {page.pathName}
                </Typography>
              </NavLink>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
