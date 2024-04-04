import {
  Typography,
  Box,
  TextField,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";
import backImage from "../assets/images/back-img.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

export const Footer = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const textStyles = {
    fontSize: "10px",
    fontWeight: 500,
    lineHeight: "12.1px",
    color: "white",
  };

  const bigTextStyles = {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "21.78px",
    textAlign: "left",
    color: "white",
  };

  const smallTextStyles = {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16.94px",
    textAlign: "left",
    color: "white",
  };

  const linkStyles = {
    ...textStyles,
  };

  const typographyUlStyles = {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16.94px",
    textAlign: "left",
    textDecoration: "none",
    color: "white",
    paddingTop: "10px ",
    paddingRight: "10px",
  };

  const boxStyles = {
    container: {
      width: "100%",
      marginTop: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "#2F333A",
    },
    backgroundBox: {
      backgroundImage: `url('${backImage}')`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
    },
    contentBox: {
      maxWidth: "1000px",
      width: "100%",
      backgroundPosition: "center",
      padding: "20px",
      display: isLargeScreen ? "flex" : "block",
      justifyContent: "space-between",
      height: "100%",
    },
    emailBox: {
      display: "flex",
      width: "60%",
      height: "100%",
      minWidth: "300px",
    },
    infoBox: {
      display: "flex",
      flexDirection: isLargeScreen ? "row" : "column",
      justifyContent: "center",
      marginTop: "20px",
      height: "200px",
      padding: "0 20px",
      maxWidth: "1000px",
    },
  };

  const iconStyles = {
    color: "white",
    paddingRight: "10px",
  };

  const urls: string[] = [
    "About",
    "Privacy Policy",
    "Sales",
    "Terms & Condition",
    "EMI Payment",
  ];

  return (
    <Box sx={boxStyles.container}>
      <Box sx={boxStyles.backgroundBox}>
        <Box sx={boxStyles.contentBox}>
          <Box className={"footer-title"} py={2}>
            <Typography sx={bigTextStyles}>
              Join our newsletter and get offers
            </Typography>
            <Typography sx={smallTextStyles}>Sign up our newsletter</Typography>
          </Box>
          <Box className={"email-input"} sx={boxStyles.emailBox}>
            <TextField
              id="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              sx={{
                ...textStyles,
                background: "white",
                border: "none",
                height: "100%",
              }}
            />
            <Button
              style={{
                background: "#E73C17",
                width: "150px",
                borderRadius: "0px",
              }}
            >
              <Typography
                fontFamily={{ color: "white" }}
                fontSize={"12px"}
                fontWeight={500}
              >
                SUBSCRIBE
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box sx={boxStyles.infoBox}>
          <Box sx={{ flex: isLargeScreen ? 4 : 0 }}>
            <a href="/" style={linkStyles}>
              ABOUT US
            </a>
            {isLargeScreen && (
              <>
                <Typography
                  sx={{
                    ...typographyUlStyles,
                    marginTop: isLargeScreen ? "20px !important" : "0px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris aliquet lacinia nulla ut laoreet. Quisque ultricies et
                  tortor nec laoreet.
                </Typography>
                <Box paddingTop={2}>
                  <FacebookIcon sx={iconStyles} />
                  <WhatsAppIcon sx={iconStyles} />
                  <InstagramIcon sx={iconStyles} />
                  <YouTubeIcon sx={iconStyles} />
                </Box>
              </>
            )}
          </Box>
          <Box sx={{ flex: isLargeScreen ? 3 : 0 }}>
            <a href="/" style={linkStyles}>
              INFORMATION
            </a>
            {isLargeScreen && (
              <ul style={{ padding: "0" }}>
                {urls.map((url, index) => (
                  <Typography
                    key={index}
                    sx={{ ...typographyUlStyles, paddingBottom: "1px" }}
                  >
                    {url}
                  </Typography>
                ))}
              </ul>
            )}
          </Box>
          <Box sx={{ flex: isLargeScreen ? 2 : 0 }}>
            <a href="/" style={linkStyles}>
              ACCOUNT
            </a>
            {isLargeScreen && (
              <ul style={{ padding: "0" }}>
                {urls.map((url, index) => (
                  <Typography
                    key={index}
                    sx={{ ...typographyUlStyles, paddingBottom: "1px" }}
                  >
                    {url}
                  </Typography>
                ))}
              </ul>
            )}
          </Box>
          <Box sx={{ flex: isLargeScreen ? 2 : 0 }}>
            <a href="/" style={linkStyles}>
              STORE
            </a>
            {isLargeScreen && (
              <ul style={{ padding: "0" }}>
                {urls.map((url, index) => (
                  <Typography
                    key={index}
                    sx={{ ...typographyUlStyles, paddingBottom: "1px" }}
                  >
                    {url}
                  </Typography>
                ))}
              </ul>
            )}
          </Box>
          <Box sx={{ flex: isLargeScreen ? 4 : 0 }}>
            <a href="/" style={linkStyles}>
              CONTACT US
            </a>
            {isLargeScreen && (
              <Typography sx={typographyUlStyles}>
                If you have any query, please contact us
                <Typography sx={{ typographyUlStyles, color: "#E73C17" }}>
                  needus24@gmail.com
                </Typography>
                <LocationOnIcon sx={iconStyles} />
                California, USA
                <br />
                <PhoneIcon sx={iconStyles} /> +12012987481
              </Typography>
            )}
          </Box>
        </Box>
        {isLargeScreen && <Divider />}
      </Box>

      <Typography
        variant="body2"
        sx={{
          ...textStyles,
          fontSize: "10px",
          textAlign: "center",
          paddingY: "20px",
        }}
      >
        Copyright 2023 All Right Reserved
      </Typography>
    </Box>
  );
};
