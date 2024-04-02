import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ExpandButton = styled.button`
  display: none;
  @media (max-width: 1024px) {
    width: 2rem;
    height: 2rem;
    display: flex;
    margin: auto;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: ${({ theme }) => theme.navbarBackground};
  }

  .line {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 0.3s, transform 0.3s;

  }
`;

export const ExpandButtonComponent = (props) => {

    ExpandButtonComponent.propTypes = {
      open: PropTypes.bool,
      setOpen: PropTypes.func,
    };

    return (
      <>
        <ExpandButton
          open={props.open}
          onClick={() => {
            props.setOpen(!props.open);
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </ExpandButton>
      </>
    );
}
