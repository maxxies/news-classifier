import React from "react";
import styles from "./readnews.module.css";
import NavBar from "../components/NavBar";
import News from "../components/News";

function Home() {
    return (
        <>
            <NavBar styles={styles} index={2} />
            <News styles={styles} />
        </>
    );
}

export default Home;
