import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { HeaderMovil } from "./HeaderMovil";
import logo from "../assets/images/logo.png";
import vector from "../assets/images/Vector.png";
import vectorWhite from "../assets/images/Vector-white.png";
import headPhone from "../assets/images/head-phones.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const localOpts = ["ENG", "USD"];

export const Header = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {isLargeScreen ? (
        <Box className="header-desktop" px={2} width={"100%"}>
          <Box
            className="message-black"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              color: "#fff",
              backgroundColor: "#000",
              padding: "10px 30px 10px 70px",
            }}
          >
            <Typography>Welcome to Needus & Get the best product</Typography>
            <Box display="flex" alignItems="center">
              {localOpts.map((opt: string, i: number) => (
                <>
                  <Box display="flex" alignItems="center" ml={i === 1 ? 1 : 0}>
                    <Typography display="flex" alignItems="center">
                      {opt} <ArrowDropDown />
                    </Typography>
                  </Box>
                  {i === 0 && "|"}
                </>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 20px",
            }}
          >
            <img src={logo} alt="Logo" style={{ maxWidth: 200 }} />
            <Box
              sx={{
                padding: "0 15px",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                width: "60%",
                border: "2px solid #F0F0F0",
                height: "60px",
              }}
            >
              <Typography>Search Products</Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="search"
                size="large"
              >
                <SearchIcon
                  fontSize="large"
                  sx={{
                    color: "white",
                    background: "#2F333A",
                    padding: "5px",
                  }}
                />
              </IconButton>
              <Typography>All Categories</Typography>
              <img
                src={vector}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
              <Typography>Login</Typography>
              <Typography>Signup</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <FavoriteIcon sx={{ cursor: "pointer" }} />
              <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                width: "40%",
                height: "50px",
                padding: "0 20px",
                background: "#E73C17",
                color: "white",
              }}
            >
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon
                  style={{
                    background: "#E73C17",
                    padding: "10px",
                    color: "white",
                  }}
                />
              </IconButton>
              <Typography>All Categories</Typography>
              <img
                src={vectorWhite}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                width: "100%",
                paddingX: "80px",
                background: "#2F333A",
                height: " 50px",
                textTransform: "uppercase",
              }}
            >
              <Typography sx={{ color: "white" }}>Home</Typography>
              <img
                src={vectorWhite}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
              <Typography sx={{ color: "white" }}>About</Typography>
              <img
                src={vectorWhite}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
              <Typography sx={{ color: "white" }}>Product</Typography>
              <img
                src={vectorWhite}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
              <Typography sx={{ color: "white" }}>Pages</Typography>
              <img
                src={vectorWhite}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
              <Typography sx={{ color: "white" }}>Contact</Typography>
              <img
                src={vectorWhite}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"15px"}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                width: "40%",
                paddingX: "40px",
                background: "#2F333A",
                height: "50px",
                borderLeft: "2px solid white",
              }}
            >
              <img
                src={headPhone}
                alt="Logo"
                style={{ maxWidth: 450 }}
                width={"40px"}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ color: "#FFFFFF" }}>
                  Contact Us 24/7
                </Typography>
                <Typography sx={{ color: "white" }}> +12012987481</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <HeaderMovil />
      )}
    </>
  );
};
