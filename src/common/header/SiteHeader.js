import React, {useState}from 'react';
import {Button, Radio} from 'antd';
import "antd/dist/antd.css";

const SiteHeader = (props) => {

    const [menuVal, setMenuVal] = useState(1);

    const radioButtonHandler = (e) => {
        setMenuVal(e.target.value);
    }

    return (
        <div>
            <Radio.Group value={menuVal} onChange={radioButtonHandler}>
                <Radio.Button value={1}>MENU1</Radio.Button>
                <Radio.Button value={2}>MENU2</Radio.Button>
                <Radio.Button value={3}>MENU3</Radio.Button>
            </Radio.Group>
        </div>
    )
}

export default SiteHeader;
