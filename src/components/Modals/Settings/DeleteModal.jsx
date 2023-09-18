import React from "react";
import {Modal} from "antd";
import ButtonComp from "../../ButtonComp/ButtonComp";

const DeleteModal = (props) => {
    return (
        <>
            <Modal
                title={props.title}
                centered
                width={props.width ?? "auto"}
                open={props.open}
                onOk={() => props.setOpen(false)}
                onCancel={() => props.setOpen(false)}
                footer={null}
            >
                <div className="border-t-2 mt-5">
                    <div className="my-5">
                        <p className="inner-size text-[#A0A0A0]">
                            This cannot be undone. You are about to delete your organization,s
                            Candor Video account, all user accounts, all Candor Videos, all
                            interactions,and all other data.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="bg-[#FFEDED] w-[90%] text-[#FF5050] border-[1px] border-[#FF5050] p-4 rounded-md">
                            <p className="text-[15px]">
                                We cannot restore your account or any data after this point.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-3">
                        <p className="inner-size text-[#A0A0A0]">
                            Are you sure want to do this?
                        </p>
                        <p className="inner-size text-[#A0A0A0]">
                            Please type Mark Johnson in the field below to confirm:
                        </p>
                    </div>
                    <div>
                        <input
                            type="text"
                            className="bg-[#F5F5F5] p-2 w-full mt-3 custom-input-settings placeholder-input-modal"
                            placeholder="Type : Mark Johnson"
                        />
                    </div>
                    <div className="mt-5 flex items-center justify-center flex-col">
                        <ButtonComp
                            buttonSize="w-[100%]"
                            className="  flex justify-center items-center h-[40px] bg-[#F24B59] w-[100%] xxl:h-[60px] text-white py-[15px] px-[30px] rounded-[5px] xxl:text-[20px]"
                            name="Permanently delete everything"
                        />
                        <ButtonComp
                            name="Cancel"
                            buttonSize="w-[100%]"
                            className="border-[1px] w-full mt-2 text-[#A0A0A0] border-[#AEBFF2] flex justify-center items-center h-[40px]  xxl:h-[60px]  py-[15px] px-[30px] rounded-[5px] xxl:text-[20px]"
                        />
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default DeleteModal;
