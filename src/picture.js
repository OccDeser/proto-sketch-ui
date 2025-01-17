import React from "react";
import { Empty } from "antd";

const Picture = (props) => {
    const { link } = props;

    if (link)
        return (
            <div>
                <img src={link} style={{ width: "100%" }} />
            </div>
        );
    else
        return <Empty />;
}

export default Picture;