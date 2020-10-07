import React from "react";
import styled from "styled-components";
import BrandInfo from "./Brandinfo";
import image from "./images/blabar.png";
import Maner from "./Maner";
import Splash from "./Splash";
import SwingAnimation from "./Swing";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 300px calc(100vh - 500px) 200px;
`;
const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 2rem 0 0 0;
`;
const StyledImg = styled.img`
  width: auto;
  height: 750px;
`;

const Advertisement = ({ data }) => {
  return (
    <Container>
      <Maner header={data.layout.text} color={data.layout.campaignColor} />
      <Main>
        <StyledImg src={image} alt="image" />
        {/*
         data.layout.animationName 
         Kan skickas in till <SwingAnimation /> (<animation /> vid stöd för flera animationer)
         */}
        <SwingAnimation animationType={data.layout.animationName}>
          <Splash
            color={data.layout.campaignColor}
            promotionUnit={data.promotion_unit}
            promotionSubUnit={data.promotion_sub_unit}
            articleUnitOfMeasurement={data.article_unit_of_measurement}
          />
        </SwingAnimation>
      </Main>

      <BrandInfo
        brandName={data.article_name}
        brandInfo={[
          data.article_brand_name,
          data.article_origin_country,
          data.article_package_info,
        ]}
      />
    </Container>
  );
};

export default Advertisement;
