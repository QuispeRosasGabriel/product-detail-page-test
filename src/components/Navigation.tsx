import { Box, Typography } from "@mui/material";
import { CSSProperties } from "react";

export const Navigation = () => {
  const navItems = ["Home", "Product", "Tv Collection"];
  const title = navItems[navItems.length - 1];
  const titleStyle: CSSProperties = {
    textTransform: "uppercase",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "21.78px",
    textAlign: "center",
    marginTop: "0",
  };

  const navStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const ulStyle: CSSProperties = {
    listStyle: "none",
    display: "flex",
    margin: "0px",
    padding: "0px",
  };

  const linkStyle: CSSProperties = {
    fontSize: "10px",
    fontWeight: 300,
    lineHeight: "12.1px",
    textDecoration: "none",
    color: "black",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
  };

  return (
    <Box sx={{ background: "#F4F5F8", width: "100%", padding: "80px 0" }}>
      <Typography variant="h1" style={titleStyle}>
        {title}
      </Typography>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          {navItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "0px",
              }}
            >
              <a style={linkStyle} href={`/`}>
                <Typography style={linkStyle}>{item}</Typography>
                {index !== navItems.length - 1 && (
                  <Typography style={{ ...linkStyle, padding: "0 5px" }}>
                    /
                  </Typography>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Box>
  );
};
