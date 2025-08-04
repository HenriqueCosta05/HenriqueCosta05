import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  width: fit-content;
`;

export const ButtonContainer = styled.div`
  position: relative;
  height: 60px;
  background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
  width: fit-content;
  min-width: 120px;
  padding: 0 20px;
`;

export const StyledMotionButton = styled(motion.button)`
  position: absolute;
  height: 60px;
  width: 100%;
  background-color: black;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
