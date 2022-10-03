import React from "react";
import Button from "./Button";

function PredictionMidsection(props) {
    return (
        <>
            <div className={props.styles.midSection}>
                <div className={props.styles.leftPanel}>
                    <div className={props.styles.textarea}>
                        <div className={props.styles.textareaStyle}>
                            <textarea
                                name="textareaDescription"
                                className={props.styles.textareaBox}
                                id="textarea"
                                placeholder="Write your news here..."
                            ></textarea>
                        </div>
                    </div>
                    <div className={props.styles.btn}>
                        <Button name={"Submit"} />
                    </div>
                </div>
                <div className={props.styles.rightPanel}>hi</div>
            </div>
        </>
    );
}

export default PredictionMidsection;
