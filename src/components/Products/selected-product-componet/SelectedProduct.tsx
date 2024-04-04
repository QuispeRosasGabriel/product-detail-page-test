import { Box, useMediaQuery } from "@mui/material";
import { ProductDetails } from "./ProductDetails";
import { ProductPhotos } from "./ProductPhotos";
import { ProductTabs } from "./ProductTabs";

export function SelectedProduct() {
  interface TabData {
    title: string;
    textDecripcion: string;
  }
  const tabsData: TabData[] = [
    {
      title: "Description",
      textDecripcion: `The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
  
      In addition to its impressive picture quality, the LG C2 comes with advanced gaming features such as HDMI 2.1 ports, variable refresh rate (VRR), and automatic low-latency mode (ALLM), making it a top choice for console and PC gamers alike.
  
      *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
  
      **65C2 Stand model is at a minimum 39% lighter than the C1 series. More...
  
      The LG C2 also boasts a sleek design with slim bezels and a premium metal stand, making it a stylish addition to any living room or entertainment space. Its smart features include voice control with AI ThinQ, access to streaming services, and compatibility with smart home devices for seamless integration.
  
      Whether you're watching movies, playing games, or streaming content, the LG C2 42 (106cm) 4K Smart OLED evo TV delivers an exceptional viewing experience with stunning visuals, immersive sound, and user-friendly features that cater to both casual viewers and avid gamers alike.`,
    },
    {
      title: "Specification",
      textDecripcion:
        "Aaaaa riendly packaging. **65C2 Stand model is at a minimum 39% lighter than the C1 series. More... The LG C2 also boasts a sleek design with slim bezels and a premium metal stand, making it a stylish addition to any living room or entertainment space. Its smart features include voice control with AI ThinQ, access to streaming services, and compatibility with smart home devices for seamless integration. Whether you're watching movies, playing games, or streaming content, the LG C2 42 (106cm) 4K Smart OLED evo TV delivers an exceptional viewing experience with stunning visuals, immersive sound, and user-frie",
    },
    {
      title: "Reviews",
      textDecripcion:
        "Ccccriendly packaging. **65C2 Stand model is at a minimum 39% lighter than the C1 series. More... The LG C2 also boasts a sleek design with slim bezels and a premium metal stand, making it a stylish addition to any living room or entertainment space. Its smart features include voice control with AI ThinQ, access to streaming services, and compatibility with smart home devices for seamless integration. Whether you're watching movies, playing games, or streaming content, the LG C2 42 (106cm) 4K Smart OLED evo TV delivers an exceptional viewing experience with stunning visuals, immersive sound, and user-frie",
    },
  ];
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <Box sx={isLargeScreen ? { display: "flex", flexDirection: "row" } : {}}>
        <ProductPhotos />
        <ProductDetails />
      </Box>
      <ProductTabs tabsData={tabsData} />
    </>
  );
}
