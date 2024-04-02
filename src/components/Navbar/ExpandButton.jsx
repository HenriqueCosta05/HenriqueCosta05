import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ExpandButton = styled.button`
  display: none;
  @media (max-width: 968px) {
    width: 2rem;
    height: 2rem;
    position: fixed;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: nowrap;
    background-color: ${({ theme }) => theme.navbarBackground};
    border: 0.25rem solid ${({ theme }) => theme.text};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.text};
    border-radius: 10px;
    transform-origin: 1px;
    transition: opacity 0.3s, transform 0.3s;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const ExpandButtonComponent = (props) => {

    ExpandButtonComponent.propTypes = {
      open: PropTypes.bool,
      setOpen: PropTypes.func,
    };

    return (
        <>
        <ExpandButton open={props.open} onClick={() => {props.setOpen}}> 
            <div></div>
            <div></div>
            <div></div>
        </ExpandButton> 
        </>
    )
}
