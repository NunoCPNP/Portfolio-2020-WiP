import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { below, yellow, darkBlue } from "../../styles";

const MenuItems = () => {
  const animContainer = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const animItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <UList
      data-test="menu-items-component"
      variants={animContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="item" variants={animItem}>
        <StyledLink to="/">Home</StyledLink>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledLink to="/about">About</StyledLink>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledLink to="/projects">Projects</StyledLink>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </motion.li>
      <motion.li className="item" variants={animItem}>
        <StyledLink className="blog" to="/blog">
          Blog
        </StyledLink>
      </motion.li>
    </UList>
  );
};

export default MenuItems;

const UList = styled(motion.ul)`
  list-style: none;
  display: flex;
  padding-right: 3rem;

  ${below.m`
    display: none;
  `}
`;

const StyledLink = styled(Link)`
  transition: all 200ms ease-in-out;
  text-decoration: none;
  color: white;
  font-size: 1.15rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 1rem;

  &.blog {
    background-color: ${yellow};
    color: ${darkBlue};
    border-radius: 10px;
  }

  &:hover {
    color: ${yellow};
  }
`;
