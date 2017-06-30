import React from 'react';
import {Card} from 'antd';
import _ from 'lodash';

import './BasicCard.less';
import {extend} from 'util-toolkit';

const defBodyStyle = {
    padding: '20px'
};
const defClassName = ['basic-card'];
const extractPropsName = ['className', 'bodyStyle', 'children', 'title'];

export default (props)=> {
    const extraProps = _.pick(props, (value, key)=> {
        return extractPropsName.indexOf(key) == -1;
    });
    let bodyStyle = extend({}, defBodyStyle, props.bodyStyle);
    let className = defClassName;
    // 如果存在className
    if (typeof props.className === 'string') {
        let arr = props.className.split(' ');
        if (arr.indexOf('no-padding') !== -1) {
            extend(bodyStyle, {
                padding: 0
            });
        }
        className = className.concat(arr);
    }

    // 存在title
    const title = props.title != null ?
        <h3 className="card-title">{props.title}</h3> :
        null;
    return (
        <Card className={className.join(' ')} bodyStyle={bodyStyle} {...extraProps}>
            {title}
            {props.children}
        </Card>
    )
}
