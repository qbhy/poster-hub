import React, {Component} from "react";
import {GridContent} from "@ant-design/pro-layout";
import {Carousel, Col, Row} from "antd";
import styles from "./banner.scss";

export default class Banner extends Component {
    render(){
        return (
            <Carousel autoplay>
                <div className={styles.banner}>
                    <img src={require('../../../assets/banner.png')} alt="海报"/>
                </div>
                <div className={styles.banner}>
                    <img src={require('../../../assets/banner.png')} alt="海报"/>
                </div>
            </Carousel>

        )
    }
}
