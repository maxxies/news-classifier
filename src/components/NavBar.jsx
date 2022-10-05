import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <>
            <header>
                <Link to={"/home"}>
                    <h1 className={props.styles.title}>News Insight</h1>
                </Link>

                <nav className={props.styles.navContent}>
                    <ul>
                        <li>
                            <Link to={"/prediction"}>
                                <h3
                                    className={
                                        props.index === 1
                                            ? props.styles.current
                                            : ""
                                    }
                                >
                                    Sentiment Analysis
                                </h3>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/read-news"}>
                                <h3
                                    className={
                                        props.index === 2
                                            ? props.styles.current
                                            : ""
                                    }
                                >
                                    Read news
                                </h3>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default NavBar;
