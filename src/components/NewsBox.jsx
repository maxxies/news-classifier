import React from "react-router-dom";
import Button from "./Button";

function NewsBox(props) {
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <>
            <div className={props.styles.newsBox}>
                <div className={props.styles.newsInfo}>
                    <p className={props.styles.newsDate}>
                        {" "}
                        {`${
                            month[new Date(props.item.publishDate).getMonth()]
                        } ${new Date(
                            props.item.publishDate,
                        ).getDate()}, ${new Date(
                            props.item.publishDate,
                        ).getFullYear()}`}
                    </p>
                    <h3 className={props.styles.newsTitle}>
                        {props.item.title}
                    </h3>
                    <div className={props.styles.newsInnerBox}>
                        <p className={props.styles.newsAuthor}>
                            Author: {props.item.source}
                        </p>
                        <Button
                            name={"Read"}
                            functionCall={props.functionCall}
                            item={props.item}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewsBox;
