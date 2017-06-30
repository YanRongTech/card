import React from 'react';
import {Card} from 'antd';
import _ from 'lodash';

import './MetaCard.less';
import {extend, pickProps} from 'util-toolkit';

const defClassName = ['meta-card'];
const defBodyStyle = {
    padding: '10px'
};

export default (props) => {
    let className = defClassName;
    // 如果存在className
    if (typeof props.className === 'string') {
        let arr = props.className.split(' ');
        className = className.concat(arr);
    }
    let bodyStyle = extend({}, defBodyStyle, props.bodyStyle);
    return (
        <Card className={className.join(' ')} style={props.style} bodyStyle={bodyStyle}>
            {props.children}
        </Card>
    )
}
