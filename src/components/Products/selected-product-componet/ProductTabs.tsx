import React, { useState } from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";

interface TabData {
  title: string;
  textDecripcion: string;
}

interface ProductTabsProps {
  tabsData: TabData[];
}

export const ProductTabs: React.FC<ProductTabsProps> = ({ tabsData }) => {
  const [value, setValue] = useState<number>(0);
  const [showFullText, setShowFullText] = useState<boolean>(false);
  const [currentDescription, setCurrentDescription] = useState<string>(
    tabsData[0].textDecripcion
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCurrentDescription(tabsData[newValue].textDecripcion);
    setShowFullText(false);
  };

  const handleToggleShowText = () => {
    setShowFullText(!showFullText);
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const tabsContainerStyles = {
    width: "100%",
    maxWidth: "500px",
    margin: "20px 0",
  };

  const indicatorStyles = {
    height: "3px",
  };

  const textMoreStyles = {
    paddingLeft: "5px",
    color: "#E73C17",
    cursor: "pointer",
  };

  return (
    <Box sx={tabsContainerStyles}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        sx={{ position: "relative" }}
      >
        {tabsData.map((tab, index) => (
          <Tab key={index} label={capitalizeFirstLetter(tab.title)} />
        ))}
        <Box sx={indicatorStyles} />
      </Tabs>
      <Box sx={tabsContainerStyles}>
        <Typography paddingX={2}>
          {showFullText
            ? currentDescription
            : `${currentDescription.slice(0, 300)}`}
          {currentDescription.length > 300 && (
            <span style={textMoreStyles} onClick={handleToggleShowText}>
              {showFullText ? "Show Less" : "More..."}
            </span>
          )}
        </Typography>
      </Box>
    </Box>
  );
};
