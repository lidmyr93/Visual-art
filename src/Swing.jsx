import React from "react";
import styled, { keyframes, css } from "styled-components";

const Swing = keyframes`
    0%{
        transform: translate(-200%, 0) rotate(30deg)
    }
    10%{
        transform: translate(-50%, 0) rotate(30deg)
    }
    15%{
        transform: translate(0,0) rotate(0)
    }
    20%{
        transform: translate(30%,0) rotate(-20deg)
    }
    30%{
        transform: translate(-30%,0) rotate(20deg)
    }
    40%{
        transform: translate(15%,0) rotate(-10deg)
    }
    50%{
        transform: translate(-10%, 0) rotate(10deg)
    }
    60%{
        transform: translate(10%,0) rotate(-10deg)
    }
    70%{
        transform: translate(-10%, 0) rotate(10deg)
    }

    100%{
        transform: translate(0,0) rotate(0)
    }
        
`;
const Pulse = keyframes`
    0% {
		transform: scale(0.95);
		
	}

	70% {
		transform: scale(1) ;
		
	}

	100% {
		transform: scale(0.95);
		
	}
`;
const SwingWrapper = styled.div`
  animation: ${(props) =>
    props.animationType === "Swing"
      ? css`
          ${Swing} 3s linear 1
        `
      : null};
  animation: ${(props) =>
    props.animationType === "Pulse"
      ? css`
          ${Pulse} 3s linear infinite
        `
      : null};

  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 220px;
`;
const SwingAnimation = ({ animationType, children }) => {
  return <SwingWrapper animationType={animationType}>{children}</SwingWrapper>;
};
export default SwingAnimation;
