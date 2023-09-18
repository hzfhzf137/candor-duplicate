import React from "react";
import {Input} from "antd";

const InputComp = (props) => {
    const {TextArea, Password} = Input;
    let {
        name,
        type,
        placeholder,
        icon,
        size,
        rows,
        maxLength,
        disabled,
        className,
        value,
        onChange,
    } = props;
    name = name || "";
    type = type || "text";
    placeholder = placeholder || `Enter something...`;
    icon = icon || "";
    size = size || "small";
    maxLength = maxLength || 6;
    rows = rows || 4;
    disabled = disabled || false;
    className = className || "";
    value = value || "";
    onChange = onChange || "";

    if (type == "password") {
        return (
            <Password
                size={size}
                placeholder={placeholder}
                prefix={icon}
                className={className}
                enterButton="Search"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        );
    } else if (type == "text-area") {
        return (
            <TextArea
                rows={rows}
                placeholder={placeholder}
                maxLength={maxLength}
                className={className}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        );
    }
    return (
        <>
            <Input
                type={type}
                size={size}
                placeholder={placeholder}
                prefix={icon}
                className={`${className} custom-play`}
                value={value}
                onChange={onChange}
                disabled={disabled}
                icon={icon}
            />
        </>
    );
};

export default InputComp;
