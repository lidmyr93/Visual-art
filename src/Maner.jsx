import React from "react";
import styled from "styled-components";

const StyledManer = styled.div`
  background: ${(props) => props.backgroundColor};
  width: 100%;
  height: 300px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;
const StyledHeader = styled.h1`
  color: white;
  font-size: 8rem;
  white-space: nowrap;
  font-family: "Ica Rubrik Bold";
  &::first-letter {
    text-transform: capitalize;
  }
`;
const Absolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Lines = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Line = styled.div`
  background: white;
  height: ${(props) => props.height};
  width: 100%;
  margin-bottom: ${(props) => props.mb};
`;

const Maner = ({ header, color }) => {
  const formatText = (text) => text.replace("_", " ").concat("!");

  return (
    <StyledManer backgroundColor={color}>
      <Absolute>
        <StyledHeader capitalize style={{ margin: 0 }}>
          {formatText(header)}
        </StyledHeader>
      </Absolute>
      <Lines>
        <Line height="4px" mb="7px"></Line>
        <Line height="3px" mb="15px"></Line>
        <Line height="5px" mb="10px"></Line>
      </Lines>
    </StyledManer>
  );
};

export default Maner;
