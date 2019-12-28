import React from "react";
import Logo from "../../molecules/Logo/Logo";
import Search from "../../molecules/Search/Search";

export default function Header(props) {
    return(
        <header className="header jumbotron">
            <div className="container">

                <Logo />

                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="display-5 d-block">Find your movie</h1>
                    </div>
                </div>

                <Search {...props}/>

            </div>
        </header>
    );
}