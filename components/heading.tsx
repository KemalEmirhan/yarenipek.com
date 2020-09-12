import React, { FunctionComponent } from "react";
import styles from "../style/heading.module.scss";

const Heading: FunctionComponent = () => {
    return (
        <header className={`${styles.header} container`}>
            <section className={styles.header_group}>
                <h3>About</h3>
                <h3>Articles</h3>
            </section>
        </header>
    );
}

export default Heading;