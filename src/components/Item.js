import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { LoremIpsum } from "react-lorem-ipsum";
import { Link } from "react-router-dom";
import { Photos } from "../data/Photos";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function Item({ id }) {
  const { alt, src, description, works } = Photos.find(item => item.path === id);
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // this.targetElement = document.querySelector(".card-content-container");
    disableBodyScroll(document.querySelector(".card-content-container"))
  }, []);
  console.log("working?");
  const workItem=(work)=>(
    <img src={work.path} alt={work.alt} />
  );
  return (

    <>
      {/* <motion.div
        className="card-content-container open flex vertical align-center"
        transition={{ duration: 2 }}
        layoutId={`card-content-container-${id}`}
      > */}
      <div
        className="card-content-container open flex vertical align-center"
      >
        <div className="container">
          <motion.div
            transition={{ duration: 2 }}
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img src={src} alt={alt} />
            

          </motion.div>
          <Link to="/">Go back!</Link>
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,  transition: { duration: 2, delay: 1 } }}
          exit={{ opacity: 0, transition: { duration: 2 } }}
          className="text">{description}
          </motion.p>
          <div className="images">
            {works? works.map(workItem): null} 
          </div>


          {/* <LoremIpsum
          p={6}
          avgWordsPerSentence={6}
          avgSentencesPerParagraph={4}
        /> */}
        </div>
      </div>
      {/* </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        transition={{ duration: 2 }}
        style={{ pointerEvents: "auto" }}
        className="overlay"
      >
        <Link to="/" />
        <div className="card-content-container flex-vertical open">
          {/* <motion.div
          transition={{ duration: 3 }}
          className="card-content container"> */}



          {/* <motion.div
            transition={{ duration: 3 }}
            className="something-here"
            layoutId={`card-image-container-${id}`}
          >
            <img src={src} alt={alt} />

          </motion.div> */}

          {/* <img src={src} alt={alt} /> */}
          {/* <div className="dummy"></div> */}

          {/* <motion.div
            transition={{ duration: 3 }}
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <h2>{title}</h2>
          </motion.div> */}
          {/* <motion.div className="content-container" animate> */}


          {/* <LoremIpsum
              p={6}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            /> */}


          {/* </motion.div> */}
          {/* </motion.div> */}
        </div>
      </motion.div>

    </>
  );
}
