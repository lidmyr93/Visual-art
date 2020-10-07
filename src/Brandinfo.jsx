import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h4`
  font-size: 4rem;
  margin: 0;
`;
const ArticleSubInfo = styled.div`
  display: flex;
`;
const ArticleSubData = styled.p`
  padding-right: 0.75rem;
  font-size: 1.5rem;
  color: gray;
  margin: 0;
`;
const Footer = styled.footer`
  margin: 0 6rem;
`;
const BrandInfo = ({ brandName, brandInfo }) => {
  return (
    <Footer>
      <StyledHeader style={{ fontFamily: "Ica black font" }}>
        {brandName}
      </StyledHeader>
      <ArticleSubInfo>
        {brandInfo.map((item) => (
          <ArticleSubData style={{ fontFamily: "Ica regular" }}>
            {item}
          </ArticleSubData>
        ))}
      </ArticleSubInfo>
    </Footer>
  );
};
export default BrandInfo;
