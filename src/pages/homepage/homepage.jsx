import React,{Component} from 'react';

import styles from './index.css';
import {connect} from "dva";

@connect(({loading})=>({loading}))
export default class Homepage extends Component {
    render(){
        return (
            <p>homepage</p>
        )
    }
}
