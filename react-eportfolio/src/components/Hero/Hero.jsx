import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import ZahirCV from "../../../assets/hero/Zahir'sCV.pdf";
import { FaDownload } from "react-icons/fa";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Zahir</h1>
                <p className={styles.description}>
                Explore my skills, projects and experiences to get to know me better. 
                Feel free to connect with me!
                </p>
                <a href={ZahirCV} target="_blank" rel="noopener noreferrer" className={styles.contactBtn}>
                    <FaDownload className={styles.downloadIcon} />
                    Download CV
                </a>
            </div>
            <img 
                src={getImageUrl("hero/zahir.png")} 
                alt="Hero image of me" 
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};
