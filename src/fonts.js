import { createGlobalStyle } from "styled-components";
import IcaRubrik from "./fonts/ICARubrikBold.woff";

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Ica Rubrik;
    font-style: normal;
    font-weight: 400;
    src: url(${IcaRubrik});
  }
`;

export default Fonts;
