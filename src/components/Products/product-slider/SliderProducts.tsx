import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  MobileStepper,
  useMediaQuery,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IProduct } from "../../../common";

interface SliderProductsProps {
  products: IProduct[];
}

interface TypographyStyles {
  [key: string]: React.CSSProperties;
}

const typographyStyles: TypographyStyles = {
  productTitle: {
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "13.31px",
    padding: "20px 0",
  },
  productPrice: {
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "16px",
  },
  cartButton: {
    background: "white",
  },
  cartButtonText: {
    color: "#6F6F6F",
    fontWeight: 500,
    fontSize: 8,
  },
  newStyle: {
    fontSize: "10px",
    backgroundColor: "#12A05C",
    color: "#ffffff",
    padding: "2px 5px",
    borderRadius: "5px",
    position: "absolute",
    top: "5px",
    left: "5px",
    zIndex: 1,
  },
  hotStyle: {
    fontSize: "10px",
    backgroundColor: "#FF9900",
    color: "#ffffff",
    padding: "2px 5px",
    borderRadius: "5px",
    position: "absolute",
    top: "5px",
    left: "5px",
    zIndex: 1,
  },
  paperContainer: {
    width: "35vw",
    maxWidth: "200px",
    height: "100%",
    backgroundColor: "#F1F1F1",
    padding: "10px",
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  paperContainerLargeScreen: {},
};

export const SliderProducts: React.FC<SliderProductsProps> = ({ products }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number>(0);
  const maxSteps = products.length;

  const handleStepChange = (index: number) => {
    setSelectedProductIndex(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "scroll",
        height: "350px",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        maxWidth: "1000px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
        }}
      >
        {products.map((product, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "20px",
              position: "relative",
            }}
          >
            <Paper
              onClick={() => handleStepChange(index)}
              sx={typographyStyles.paperContainer}
            >
              {product.status === "new" && (
                <Typography variant="subtitle2" sx={typographyStyles.newStyle}>
                  NEW
                </Typography>
              )}
              {product.status === "hot" && (
                <Typography variant="subtitle2" sx={typographyStyles.hotStyle}>
                  HOT
                </Typography>
              )}
              <img
                src={product.image}
                alt={product.name}
                style={{ maxWidth: "100%" }}
              />
              <Button
                sx={typographyStyles.cartButton}
                startIcon={
                  <ShoppingCartIcon
                    sx={{
                      color: "#6F6F6F",
                    }}
                    color="secondary"
                    fontSize="small"
                  />
                }
              >
                <Typography sx={typographyStyles.cartButtonText}>
                  Add to Cart
                </Typography>
              </Button>
            </Paper>
            <Typography variant="body1" sx={typographyStyles.productTitle}>
              {product.name}
            </Typography>
            <Typography sx={typographyStyles.productPrice}>
              ${product.price}
            </Typography>
          </Box>
        ))}
      </Box>
      {maxSteps > 1 && (
        <MobileStepper
          steps={maxSteps}
          variant="dots"
          activeStep={selectedProductIndex}
          nextButton={null}
          backButton={null}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            position: "absolute",
          }}
        />
      )}
    </Box>
  );
};
