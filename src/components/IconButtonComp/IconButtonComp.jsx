import {Button} from "antd";

function IconButtonComp(proptotype) {
    let props = new prototype(proptotype);

    return (
        <>
            <Button
                color={props.color}
                className={props.className}
                icon={props.icon}
                onClick={props.onClick}
                type={props.type}
                href={props.href}
                size={props.size}
            >
                {props.dynamicText}
            </Button>
        </>
    );
}

function prototype(value) {
    this.className = value.className || "";
    this.onClick = value.onClick;
    this.type = value.type || "primary";
    this.disabled = value.disabled || false;
    this.color = value.color || "white";
    this.icon = value.icon;
    this.href = value.href;
    this.size = value.size || "large";
    this.dynamicText = value.dynamicText || "";
}

export default IconButtonComp;
