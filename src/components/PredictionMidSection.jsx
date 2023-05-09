import React from "react";
import { useState } from "react";
import Button from "./Button";
import axios from "axios";

function PredictionMidsection(props) {
    const [newsBody, setNewsBody] = useState("");
    const [environmental, setEnvironmental] = useState(0);
    const [social, setSocial] = useState(0);
    const [governance, setGovernance] = useState(0);
  

    // handles api calls to model
    function handleNewsSubmit() {
        if (newsBody === "") {
            return;
        } else {
            try {
                clear();
                const options = {
                    method: "GET",
                    url: "https://easy-sentiment-analysis.p.rapidapi.com/sentiment1",
                    params: { text: newsBody },
                   
                };

                axios
                    .request(options)
                    .then(function (response) {
                        setSocial(
                            (
                                response.result.social * 100
                            ).toFixed(2),
                        );
                        setEnvironmental(
                            (
                                response.result.environmental * 100
                            ).toFixed(2),
                        );
                        setGovernance(
                            (
                                response.result.governance *  100
                            ).toFixed(2),
                        );
                    
                    })
                    .catch(function (error) {
                        alert(error);
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
                                placeholder="Write your news content here..."
                                onChange={(event) =>
                                    setNewsBody(event.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className={props.styles.btn}>
                        <Button
                            name={"Submit"}
                            functionCall={handleNewsSubmit}
                            item={props.item}
                        />
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
