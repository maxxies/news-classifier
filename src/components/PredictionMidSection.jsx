import React from "react";
import { useState } from "react";
import Button from "./Button";

function PredictionMidsection(props) {
    const [newsBody, setNewsBody] = useState("");
    const [social, setSocial] = useState(0);
    const [environmental, setEnvironmental] = useState(0);
    const [governance, setGovernance] = useState(0);

    function handleNewsSubmit() {
        if (newsBody === "") {
            return;
        } else {
            const data = {
                data: newsBody,
            };

            try {
                fetch("", {
                    method: "POST",
                    headers: {
                        accept: "application.json",
                        "Content-Type": "application/json",
                    },
                    body: data,
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            alert("Something went wrong. try again");
                        }
                    })
                    .then((data) => {
                        if (data.status === true) {
                            setSocial(data.results["social"]);
                            setGovernance(data.results["governance"]);
                            setEnvironmental(data.results["environmental"]);
                        } else if (data.status === false) {
                            alert("Analysis on data failed, try again");
                        }
                    });
            } catch (error) {
                alert(error);
            }
        }
    }
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
                                onChnge={(event) =>
                                    setNewsBody(event.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className={props.styles.btn}>
                        <Button name={"Submit"} />
                    </div>
                </div>
                <div className={props.styles.rightPanel}>
                    <div className={props.styles.resultTitle}>
                        {" "}
                        <h3>Results</h3>
                    </div>
                    <div className={props.styles.results}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Environmental: </p>
                                    </td>
                                    <td>
                                        <span>{`${environmental}%`} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Social: </p>
                                    </td>
                                    <td>
                                        <span>{`${social}%`} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Governance: </p>
                                    </td>
                                    <td>
                                        <span>{`${governance}%`} </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PredictionMidsection;
