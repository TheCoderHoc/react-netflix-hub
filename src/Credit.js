import React from "react";
import "./Credit.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Credit = () => {
    return (
        <div className="credit">
            <p>
                Made With <FavoriteIcon className="credit__icon" /> in React
                <br /> by <a href="http://jboldkid.com">Dave Wilson</a>
            </p>
        </div>
    );
};

export default Credit;
