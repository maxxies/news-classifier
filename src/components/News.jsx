import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewsBox from "./NewsBox";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function News(props) {
    const [news, setNews] = useState();
    const [changePage, setChangePage] = useState(false);
    const [newsToDisplay, setNewsToDisplay] = useState();
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

    useEffect(() => {
        function fetchNews() {
            try {
                fetch(
                    "https://news-app-4d4c8-default-rtdb.europe-west1.firebasedatabase.app/news-articles.json",
                )
                    .then((response) => {
                        if (response.ok) {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        setNews(data);
                    });
            } catch (error) {
                alert(error.message);
            }
        }
        fetchNews();
    }, []);

    function newsDisplay(news) {
        setChangePage(true);
        setNewsToDisplay(news);
    }

    return (
        <>
            <section className={props.styles.newsSection}>
                <div className={props.styles.newsBoxes}>
                    {news
                        ? news.map((item, j) => {
                              return (
                                  <NewsBox
                                      styles={props.styles}
                                      item={item}
                                      key={j}
                                      functionCall={newsDisplay}
                                  />
                              );
                          })
                        : null}
                </div>
            </section>

            <section
                className={
                    changePage
                        ? `${props.styles.newsPageSection} ${props.styles.active}`
                        : props.styles.newsPageSection
                }
            >
                {newsToDisplay ? (
                    <div className={props.styles.newsPage}>
                        <span onClick={() => setChangePage(false)}>
                            <i>
                                <BsFillArrowLeftCircleFill />
                            </i>
                        </span>

                        <div className={props.styles.newsPageBox}>
                            <p className={props.styles.newsPageAuthor}>
                                Author: {newsToDisplay.source}
                            </p>
                            <p className={props.styles.newsPageDate}>
                                {`${
                                    month[
                                        new Date(
                                            newsToDisplay.publishDate,
                                        ).getMonth()
                                    ]
                                } ${new Date(
                                    newsToDisplay.publishDate,
                                ).getDate()}, ${new Date(
                                    newsToDisplay.publishDate,
                                ).getFullYear()}`}
                            </p>
                        </div>
                        <h2 className={props.styles.newsPageTitle}>
                            {newsToDisplay.title}
                        </h2>
                        <p className={props.styles.newsPageDescription}>
                            {newsToDisplay.body}
                        </p>
                    </div>
                ) : null}
            </section>
        </>
    );
}
export default News;
