import React from "react";
import Image from "../../atoms/Image/Image";

export default function Logo(props) {
    return(
        <div className="row">
            <div className="col-sm-12">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" title="Netflix"
                       incomeWrapClasses="header-logo"/>
            </div>
        </div>
    );
}