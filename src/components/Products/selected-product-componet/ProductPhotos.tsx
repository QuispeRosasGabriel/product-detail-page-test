import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PhotoProduct1 from "../../../assets/images/tv1-main-product.png";
import { ImageSlider } from "./ImageSlider";
import PhotoProduct2 from "../../../assets/images/tv2-main-product.png";
import PhotoProduct3 from "../../../assets/images/tv3-main-product.png";
import PhotoProduct4 from "../../../assets/images/tv4-main-product.png";

export const ProductPhotos = () => {
  const [mainPhoto, setMainPhoto] = useState(PhotoProduct1);

  const handleImageClick = (image: string) => {
    setMainPhoto(image);
  };
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <Box
      sx={{
        width: isLargeScreen ? "460px" : "100%",
        display: "flex",
        flexDirection: isLargeScreen ? "row-reverse" : " column",
        alignContent: "center",
        justifyContent: isLargeScreen ? "space-between" : "center",
      }}
    >
      <Box
        className="main-image"
        sx={{
          display: "flex",
          flexDirection: " column",
          justifyContent: "center",
          alignContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <img
          src={mainPhoto}
          alt="Main Product"
          style={{ width: "80%", height: "200px", objectFit: "contain" }}
        />
        <Typography
          style={{
            fontSize: "10px",
            fontWeight: 300,
            lineHeight: "12.1px",
            textAlign: "center",
            color: "#6F6F6F",
          }}
        >
          *LG C2 42 (106cm) 4K Smart OLED evo TV
        </Typography>
      </Box>
      <ImageSlider
        images={[
          PhotoProduct1,
          PhotoProduct2,
          PhotoProduct3,
          PhotoProduct4,
          PhotoProduct2,
          PhotoProduct3,
          PhotoProduct4,
        ]}
        onImageClick={handleImageClick}
      />
    </Box>
  );
};
