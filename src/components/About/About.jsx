import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
               src={getImageUrl("about/try.png")}
               alt="Coding in a laptop"
               className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Passion for Learning</h3>
                        <p>
                        I love learning! Whether it's exploring new code or keeping up with the latest tech trends, 
                        I'm always excited to learn more.  
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Collaboration and Teamwork</h3>
                        <p>
                        Teamwork makes the dream work! I work best in teams where we communicate openly 
                        and work together toward our goals.
                        </p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Strong Work Ethic</h3>
                        <p>
                        I believe in doing things well. With a strong work ethic, I'm dependable, dedicated, 
                        and always up for a challenge.  
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section> 
    );
};