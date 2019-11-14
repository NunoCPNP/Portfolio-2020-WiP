import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { yellow, darkBlue } from "../../styles";

const BlogButton: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.8, rotate: -10 }}
    >
      <StyledLink to="/blog">Blog</StyledLink>
    </motion.div>
  );
};

export default BlogButton;

const StyledLink = styled(Link)`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  font-size: 1.15rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 1rem;
  background-color: ${yellow};
  color: ${darkBlue};
  border-radius: 1rem;
  margin-left: 1rem;
`;
