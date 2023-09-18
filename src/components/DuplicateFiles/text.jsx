import React, {useRef, useState} from 'react';

const OTPInput = () => {
    const [otp, setOTP] = useState(['', '', '', '']);
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const updatedOTP = [...otp];
        updatedOTP[index] = e.target.value;
        setOTP(updatedOTP);

        if (e.target.value !== '' && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleInputKeyDown = (e, index) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className="bg-black flex justify-center items-center h-[100vh] w-full">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleInputKeyDown(e, index)}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                />
            ))}
        </div>
    );
};

export default OTPInput;
