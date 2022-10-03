import React from "react";
import styles from "./prediction.module.css";
import NavBar from "../components/NavBar";
import PredictionMidsection from "../components/PredictionMidSection";

function Prediction() {
    return (
        <>
            <NavBar styles={styles} index={1} />
            <PredictionMidsection styles={styles} />
        </>
    );
}

export default Prediction;
