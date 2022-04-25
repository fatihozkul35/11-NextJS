import Image from "next/image";
import React from "react";
import styles from "../styles/Featured.module.css";

const Featured = () => {
  const images = [
    "/img/featured3.png",
    "/img/featured2.png",
    "/img/featured.png",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowl.png" alt="" layout="fill" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image src={img} key={i} alt="" layout="fill" />
          ))}
        </div>
      </div>
      <div className={styles.arrowContainer}>
        <Image src="/img/arrowr.png" alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Featured;
