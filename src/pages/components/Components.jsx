import React, {useState} from 'react';
import {DownloadOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import ButtonComp from '../../components/ButtonComp/ButtonComp';
import IconButtonComp from '../../components/IconButtonComp/IconButtonComp';
import InputComp from '../../components/InputComp/InputComp';
import ImageComp from '../../components/ImageComp/ImageComp';
import CheckboxComp from '../../components/CheckboxComp/CheckboxComp';

const Components = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');
    return (
        <>
            <div className="flex flex-col gap-3">
                <h2>Inputs</h2>
                <InputComp
                    type="password"
                    placeholder="Enter password"
                    icon={<UserOutlined/>}
                    size="large"
                    isButton={true}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <InputComp
                    type="password"
                    placeholder="Enter password"
                    icon={<UserOutlined/>}
                    size="large"
                    isButton={true}
                    disabled={true}
                />
                <InputComp
                    type="text"
                    size="middle"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <InputComp
                    type="number"
                    size="large"
                    placeholder="Enter age"
                    value={number}
                    onChange={(e) => {
                        setNumber(e.target.value);
                    }}
                />
                <InputComp
                    type="email"
                    size="large"
                    placeholder="Enter email"
                    icon={<MailOutlined/>}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <InputComp
                    type="text-area"
                    size="large"
                    placeholder="Enter something about yourself"
                    rows={3}
                    icon={<MailOutlined/>}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
            </div>
            <div className="mt-5">
                <h1>Images</h1>
                <div className="mt-3 flex gap-3">
                    <ImageComp
                        width={200}
                        height={200}
                        preview={false}
                        src={''}
                    />
                    <ImageComp/>
                </div>
            </div>
            <div className="mt-5">
                <h1>Checkboxes</h1>
                <div className="mt-3">
                    <CheckboxComp/>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
                <h2>Buttons</h2>
                <ButtonComp
                    className="text-[18px]  py-[15px] px-[30px] w-[206px]"
                    name="Add Contact"
                />
                <ButtonComp
                    className="text-[18px]  py-[15px] px-[30px] w-[206px]"
                    name="Cancel"
                    variant="Secondry"
                />
                <h2>Icon Buttons</h2>
                <IconButtonComp
                    className="w-[100px]"
                    type="primary"
                    disabled={false}
                    color="black"
                    icon={<DownloadOutlined/>}
                    href="https://www.google.com/"
                    size="large"
                    dynamicText=""
                />
            </div>
        </>
    );
};

export default Components;
