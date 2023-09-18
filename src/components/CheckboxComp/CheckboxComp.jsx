import React, {useState} from "react";


const CheckboxComp = (props) => {
    // return <Checkbox className="p-4">Checkbox</Checkbox>;
    const [check, setCheck] = useState(true);

    const register = props.register;
    const control = props.control;
    return (
        <>
            <input
                id={props.id}
                type="checkbox"

                // {...register("checkbox")}
                className={props.className +
                    "rounded-[4px]  border-[#3A37A6] border-[2px] border-solid flex items-center justify-center"}
            />
            {/* <Controller
        control={register}
        name="checkbox"
        defaultValue={false}
        {...register("checkbox")}
        render={({field: { value, onChange }}) => {
          <Checkbox
          checked={value}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        >
          Checkbox
        </Checkbox>
        }}
      />
      <span>
        <label
          htmlFor={props.id}
          className={`rounded-[4px]  border-[#3A37A6] border-[2px] border-solid flex items-center justify-center ${
            !check && "bg-[#3A37A6] text-white"
          }`}
          style={{width: 'calc(1rem + 0.2vw)', height: 'calc(1rem + 0.2vw)'}}
        >
          {!check && (
            <CheckOutlined
              className={`text-[10px] mb-0 text-white ${!check && "text-white "}`}
            />
          )}
        </label>
      </span> */}
        </>
    );
};

export default CheckboxComp;

