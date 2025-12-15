import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  width: fit-content;
`;

export const ButtonContainer = styled.div`
  position: relative;
  height: 60px;
  background: linear-gradient(to right, #1e40af, #1e3a8a, #000000);
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
