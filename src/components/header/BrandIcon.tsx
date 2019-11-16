import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Logo from "../../assets/logo.png";

const BrandIcon: React.FC = () => {
  return (
    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      <Link to="/">
        <BrandImage src={Logo} alt="Logo" />
      </Link>
    </motion.div>
  );
};

export default BrandIcon;

const BrandImage = styled("img")`
  width: 40px;
`;
