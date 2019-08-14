import React, {Component, Suspense} from 'react';
import styles from './index.scss';
import {connect} from "dva";
import {GridContent} from "@ant-design/pro-layout";
import {Col, Row, List} from "antd";
import Banner from "./banner/banner";

@connect(({loading}) => ({loading}))
export default class Homepage extends Component {
    render() {
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
                        <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                            <Banner/>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={24} xs={24}>
                            <List className={styles.list}
                                header={<div className={styles['list-header']}>热门</div>}
                                bordered
                                dataSource={[
                                    '惹事镖旗',
                                    '惹事镖旗',
                                    '惹事镖旗',
                                    '惹事镖旗',
                                    '惹事镖旗',
                                    '惹事镖旗',
                                ]}
                                renderItem={item => (
                                    <List.Item>
                                        <a href="#">{item}</a>
                                    </List.Item>
                                )}
                            />
                        </Col>
                    </Row>
                </React.Fragment>
            </GridContent>
        )
    }
}
