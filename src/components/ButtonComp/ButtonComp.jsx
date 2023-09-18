function ButtonComp(proptotype) {
    let props = new prototype(proptotype);

    return (
        <div className={`relative ${props.buttonSize}`}>
            <button
                className={props.className}
                type={props.type}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.name}
            </button>
            <img src={props.logo} alt={props.alt} className={props.size}/>
        </div>
    );
}

function prototype(value) {
    this.className = value.className || "btn submit-btn";
    this.onClick = value.onClick;
    this.type = value.type || "text";
    this.disabled = value.disabled || false;
    this.name = value.name || "SUBMIT";
    this.variant = value.variant || "Primary";
    this.logo = value.logo;
    this.buttonSize = value.buttonSize;
    this.size = value.size;
}

export default ButtonComp;
