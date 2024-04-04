import { AppBar, Toolbar, IconButton, Box, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.png";

export const HeaderMovil = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "transparent",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "15px",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Box className="hamburger-menu app-bar-left">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon
              style={{
                background: "#E73C17",
                padding: "10px",
              }}
            />
          </IconButton>
        </Box>
        <Box
          className="logo-menu app-bar-middle"
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="Logo" style={{ maxWidth: 450 }} width={"40%"} />
        </Box>
        <Box className="icons-menu app-bar-right" display="flex">
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            size="medium"
          >
            <SearchIcon
              style={{ color: theme.palette.common.black }}
              fontSize="medium"
            />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="account"
            size="medium"
          >
            <AccountCircleIcon
              style={{ color: theme.palette.common.black }}
              fontSize="medium"
            />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="favorites"
            size="medium"
          >
            <FavoriteIcon
              style={{ color: theme.palette.common.black }}
              fontSize="medium"
            />
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="cart"
            size="medium"
          >
            <ShoppingCartIcon
              style={{ color: theme.palette.common.black, paddingLeft: "5px" }}
              fontSize="medium"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
