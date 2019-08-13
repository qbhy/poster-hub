import React, {Component, Suspense} from 'react';
import styles from './index.css';
import {connect} from "dva";
import {GridContent} from "@ant-design/pro-layout";
import {Col, Row, Carousel, Card} from "antd";

@connect(({loading})=>({loading}))
export default class Homepage extends Component {
    render(){
        return (
            <GridContent>
                <React.Fragment>
                    <Row
                        gutter={24}
                        type="flex"
                        style={{
                            marginTop: 24,
                        }}
                    >
                        <Col xl={20} lg={24} md={24} sm={24} xs={24}>
                                <Carousel autoplay>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                </Carousel>
                        </Col>
                    </Row>
                </React.Fragment>
            </GridContent>
        )
    }
}
