import React from "react";
import Home from "./Home";
import Searched from "../components/Searched";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
