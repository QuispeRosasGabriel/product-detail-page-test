import { useState } from "react";
import Rating from "@mui/material/Rating";
import { Box, Divider, Typography } from "@mui/material";

export const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState(0);

  type ProductDetails = {
    brand: string;
    model: string;
    availability: number;
    title: string;
    stars: 1 | 2 | 3 | 4 | 5;
    characteristics: string[];
    sizes: string[];
  };

  const product: ProductDetails = {
    brand: "LG",
    model: "OLED42C2PSA",
    availability: 2,
    title: "LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR",
    stars: 4,
    characteristics: [
      "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
      "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
      "Hands-free Voice Control, Always Ready",
      "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
      "Eye Comfort Display: Low-Blue Light, Flicker-Free",
    ],
    sizes: [
      "106 cm (42)",
      "121 cm (48)",
      "139 cm (55)",
      "164 cm (65)",
      "164 cm (65)",
      "196 cm (77)",
      "210 cm (83)",
    ],
  };

  const handleSizeSelect = (index: number) => {
    setSelectedSize(index);
  };

  const styles = {
    container: {
      maxWidth: "500px",
      padding: "0 15px",
    },
    heading: {
      fontFamily: "Arial",
      fontSize: "24px",
      fontWeight: "bold",
    },
    label: {
      fontFamily: "Arial",
      fontSize: "16px",
      display: "flex",
      padding: "0 5px 0 0 ",
    },
    text: {
      fontFamily: "Arial",
      fontSize: "16px",
      display: "flex",
    },
    characteristic: {
      fontFamily: "Arial",
      fontSize: "14px",
      marginBottom: "10px",
    },
    size: {
      cursor: "pointer",
      margin: "5px",
      padding: "15px 15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      fontSize: "14px",
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.text}>
        <Typography sx={styles.label}>Brand:</Typography> {product.brand}
      </Typography>
      <Typography sx={styles.text}>
        <Typography sx={styles.label}>Model:</Typography> {product.model}
      </Typography>
      <Typography sx={styles.text}>
        <Typography sx={styles.label}>Availability: </Typography>
        Only {product.availability} in Stock
      </Typography>
      <h2 style={{ margin: "10px 0 0 0" }}>{product.title}</h2>
      <Box sx={{ margin: " 5px 0" }}>
        <Rating
          value={product.stars}
          precision={0.5}
          readOnly
          emptyIcon={<Typography sx={{ color: "#F1F1F1" }}>★</Typography>}
          icon={<Typography sx={{ color: "#E73C17" }}>★</Typography>}
        />
      </Box>
      <Box>
        <ul style={{ padding: "0 15px" }}>
          {product.characteristics.map((charac, index) => (
            <li key={index} style={styles.characteristic}>
              {charac}
            </li>
          ))}
        </ul>
      </Box>
      <Divider />

      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {product.sizes.map((size, index) => (
          <Box
            key={index}
            onClick={() => handleSizeSelect(index)}
            sx={
              selectedSize === index
                ? {
                    ...styles.size,
                    border: "1px solid #E73C17",
                    color: "#E73C17",
                  }
                : styles.size
            }
          >
            {size}
          </Box>
        ))}
      </Box>
      <Divider />
    </Box>
  );
};
