import React from "react";

function NavBar(props) {
    return (
        <>
            <header>
                <h1 className={props.styles.title}>News classification App</h1>
                <nav className={props.styles.navContent}>
                    <ul>
                        <li>
                            <h3 className={props.styles.current}>
                                Categorize news
                            </h3>
                        </li>
                        <li>
                            <h3>Read news</h3>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
export default NavBar;
