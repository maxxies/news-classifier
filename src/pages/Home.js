import React from "react";
import styles from "./home.module.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Home() {
    return (
        <>
            <NavBar styles={styles} />
            <Hero styles={styles} />
        </>
    );
}

export default Home;
