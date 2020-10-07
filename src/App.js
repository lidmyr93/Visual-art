import React from "react";
import { createGlobalStyle } from "styled-components";
import Advertisement from "./Advertisement";

const adv_data = {
  ad_title: "Blåbär",
  profile: "nara",
  layout: {
    text: "veckans_pris",
    campaignColor: "red",
    animationName: "Swing",
  },
  promotion_image: "blabar.png",
  promotion_unit: "29",
  promotion_sub_unit: "90",
  article_unit_of_measurement: "st",
  article_name: "Blåbär",
  article_brand_name: "Blåbär AB",
  article_origin_country: "Sverige",
  article_package_info: "500g",
};
const adv_data_pink = {
  ad_title: "Blåbär",
  profile: "nara",
  layout: {
    text: "veckans_kortpris",
    campaignColor: "#f8b9d4",
    animationName: "Pulse",
  },
  promotion_image: "blabar.png",
  promotion_unit: "29",
  promotion_sub_unit: "90",
  article_unit_of_measurement: "st",
  article_name: "Blåbär",
  article_brand_name: "Blåbär AB",
  article_origin_country: "Sverige",
  article_package_info: "500g",
};
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Advertisement data={adv_data} />
    </>
  );
}

export default App;
