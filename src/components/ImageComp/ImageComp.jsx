import React from "react";
import {Image} from "antd";

const ImageComp = (props) => {
    let {src, width, height, preview} = props;

    src =
        src ||
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";
    width = width;
    height = height;
    preview = false;

    return <Image width={width} height={height} src={src}/>;
};

export default ImageComp;
