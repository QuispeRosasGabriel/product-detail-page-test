import { IProduct } from "../common";
import {
  Footer,
  Header,
  Navigation,
  SliderProducts,
  SelectedProduct,
} from "../components";
import product1 from "../assets/images/1product-slide.png";
import product2 from "../assets/images/2product-slide.png";
import product3 from "../assets/images/3product-slide.png";
import product4 from "../assets/images/4product-slide.png";

export const ProductsDetailPage = () => {
  const products: IProduct[] = [
    {
      image: product1,
      name: "Sony BRAVIA XR Android Tv",
      price: 50,
      status: "hot",
    },
    {
      image: product2,
      name: "Mi P1 Smart Android HD TV",
      price: 70,
      status: "new",
    },
    {
      image: product3,
      name: "Konka OLED Android Tv",
      price: 90,
      status: "hot",
    },
    {
      image: product4,
      name: "TCL Roku Android HD Pro Tv",
      price: 90,
      status: "new",
    },
  ];

  return (
    <div
      className="main"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <Navigation />
      <SelectedProduct />
      <SliderProducts products={products} />
      <Footer />
    </div>
  );
};
