import React, { useState } from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface SliderStyles {
  container: React.CSSProperties;
  slide: React.CSSProperties;
  images: React.CSSProperties;
  image: React.CSSProperties;
  arrowContainer: React.CSSProperties;
}

interface ImageSliderProps {
  images: string[];
  onImageClick: (image: string) => void;
}

export const ImageSlider = ({ images, onImageClick }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageClick = (index: number) => {
    onImageClick(images[index]);
    setSelectedImage(index);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const sliderStyles: SliderStyles = {
    container: {
      width: isLargeScreen ? "none" : "100%",
      overflow: isLargeScreen ? "auto" : "hidden",
      display: "flex",
      justifyContent: "center",
      height: isLargeScreen ? "100%" : "150px",
      maxHeight: isLargeScreen ? "400px" : "none",
    },
    slide: {
      display: "flex",
      alignItems: "center",
      flexDirection: isLargeScreen ? "column" : "row",
      transition: "transform 0.3s ease-in-out",
      width: "90%",
      height: isLargeScreen ? "100%" : "100px",
    },
    images: {
      width: isLargeScreen ? "100px" : "100%",
      height: "70%",
      margin: "0 10px",
      objectFit: "cover",
      border: "red solid 1px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifyItems: "center",
    },
    image: {
      width: "90%",
      maxHeight: "70px",
      objectFit: "contain",
    },
    arrowContainer: {
      width: "100%",
      padding: "0 15px",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center",
      alignContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      zIndex: 1,
    },
  };

  return (
    <Box sx={sliderStyles.container}>
      <Box sx={sliderStyles.arrowContainer}>
        <Box
          sx={{
            background: currentIndex === 0 ? "#D9D9D9" : "#E73C17",
            height: "30px",
            width: "30px",
            display: isLargeScreen ? "none" : "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
            <KeyboardArrowLeftIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>

        <Box sx={sliderStyles.slide}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                ...sliderStyles.images,
                display: isLargeScreen
                  ? "block"
                  : index >= currentIndex && index <= currentIndex + 2
                  ? "flex"
                  : "none",
                border: selectedImage === index ? "solid 2px #E73C17" : "none",
              }}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={sliderStyles.image}
                onClick={() => handleImageClick(index)}
              />
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            background:
              currentIndex === images.length - 3 ? "#D9D9D9" : "#E73C17",
            height: "30px",
            width: "30px",
            display: isLargeScreen ? "none" : "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleNext}
            disabled={currentIndex === images.length - 3}
          >
            <KeyboardArrowRightIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
