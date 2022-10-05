import React from "react";
import { useState } from "react";
import Button from "./Button";
import axios from "axios";

function PredictionMidsection(props) {
    const [newsBody, setNewsBody] = useState("");
    const [positive, setPositive] = useState(0);
    const [negative, setNegative] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [mixed, setMixed] = useState(0);

    function clear() {
        setPositive(0);
        setMixed(0);
        setNegative(0);
        setNeutral(0);
    }

    function handleNewsSubmit(values) {
        if (newsBody === "") {
            return;
        } else {
            try {
                clear();
                const options = {
                    method: "GET",
                    url: "https://easy-sentiment-analysis.p.rapidapi.com/sentiment1",
                    params: { text: newsBody },
                    headers: {
                        "X-RapidAPI-Key":
                            "57d2339edbmsh8988c8fd64d4f33p13f436jsn993c32452bf2",
                        "X-RapidAPI-Host":
                            "easy-sentiment-analysis.p.rapidapi.com",
                    },
                };

                axios
                    .request(options)
                    .then(function (response) {
                        setPositive(
                            (
                                response.data.Sentiment.SentimentScore
                                    .Positive * 100
                            ).toFixed(2),
                        );
                        setNegative(
                            (
                                response.data.Sentiment.SentimentScore
                                    .Negative * 100
                            ).toFixed(2),
                        );
                        setNeutral(
                            (
                                response.data.Sentiment.SentimentScore.Neutral *
                                100
                            ).toFixed(2),
                        );
                        setMixed(
                            (
                                response.data.Sentiment.SentimentScore.Mixed *
                                100
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
                                placeholder="Write your news here..."
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
                                        <p>Positive: </p>
                                    </td>
                                    <td>
                                        <span>{`${positive}%`} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Negative: </p>
                                    </td>
                                    <td>
                                        <span>{`${negative}%`} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Neutral: </p>
                                    </td>
                                    <td>
                                        <span>{`${neutral}%`} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Mixed: </p>
                                    </td>
                                    <td>
                                        <span>{`${mixed}%`} </span>
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
