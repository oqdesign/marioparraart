import React, { Component } from 'react';
import JustifiedGrid from 'react-justified-grid';
import { Link } from "react-router-dom";
import { Welcome } from "./Welcome";
//import { Card } from "./Card";
import { motion } from "framer-motion";
import { Data } from "../data/Data";
import { imageHover, titleHover } from "../helpers/Animations";
import "../styles/flexbin.scss";







export function List({ selectedId }) {
  const theme = '';
  return (
    <main className={`content-wrapper flex-vertical ${selectedId ? 'illustration-open' : ''}`}>
      <div className="container">
        <Welcome />
        <JustifiedGrid images={Data} rows={8} maxRowHeight={400} gutter={16} className="justified-grid">
          {processedImages => (
            <React.Fragment>
              {processedImages.map((image, index) => {
                const { alt, src, width, height, left, top } = image;
                const item = Data[index];
                return (
                  <div
                    className="card-content-container flex vertical align-center"
                  >
                    <motion.div
                      // key={i}
                      className="card-image-container"
                      layoutId={`card-image-container-${item.path}`}
                      style={{
                        position: 'absolute',
                        left: left,
                        top: top
                      }}
                    >
                      <motion.div
                        initial="rest" whileHover="hover" animate="rest"
                        className="hover-container">
                        <motion.img
                          initial="rest"
                          variants={imageHover}
                          src={src} width={width} height={height} alt={alt} />
                        <Link to={`${item.path}`} className={`card-open-link`} />
                        <motion.h3
                          initial="rest"
                          variants={titleHover}
                        >{item.title}</motion.h3>
                      </motion.div>
                    </motion.div>
                    {/* </motion.div> */}
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </JustifiedGrid>
      </div>
    </main>
  );
}
