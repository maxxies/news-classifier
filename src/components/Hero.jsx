import React from "react";

function Hero(props) {
    return (
        <>
            <div className={props.styles.hero}>
                <div className={props.styles.content}>
                    <small>Welcome to our</small>
                    <h1>News Classification Platform</h1>
                    <p>
                        Explore our pages and enjoy what our platform has to
                        offer
                    </p>
                </div>
            </div>
        </>
    );
}
export default Hero;
