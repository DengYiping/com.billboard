import React from 'react';
import { Row, Col, Input, Button, DatePicker, Icon} from 'antd';
import './home_content_page.less';

class HomeContentPage extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <Row className='greeting-search-section'>
                    <Row className='greeting-row'>
                        Welcome to <span className='greeting-highlight-part'>Billboard</span>
                    </Row>
                    <Row className='search-row'>
                        <Col span={2} />
                        <Col span={11} className='search-input-col'>
                            <Input size='large' placeholder='Place of the advertisement'/>
                        </Col>
                        <Col span={8}>
                            <DatePicker.RangePicker size='large' placeholder={['Start date', 'End date']}/>
                        </Col>
                        <Col span={3} className='search-extra-col'>
                            <Button className='search-btn' type='primary' size='large'>
                                <span>Search</span>
                            </Button>
                        </Col>
                    </Row>
                </Row>
                <Row className='introduction-section'>
                <Row style={{padding: '20px', margin: '20px 0 0 0'}}>
                    <Col span={8}>
                        <Row>
                            <Col span={4}>
                            <Icon type="project" theme="filled" className='introduction-icon'/>
                            </Col>
                            <Col span={20} className='introduction-text'>
                            <b>Great Features</b><br/>
                            Using advanced GPS technology, and databases. We are able to recommend the best places for you to place advertisments.
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={4}>
                            <Icon type="setting" theme="filled" className='introduction-icon'/>
                            </Col>
                            <Col span={20} className='introduction-text'>
                            <b>Completely Customizable</b><br/>
                            Choose the shape and font of your advertisment; have the ability to customize your print and be your own graphic designer.
                            </Col>
                        </Row>

                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={4}>
                            <Icon type="interation" theme="filled" className='introduction-icon'/>
                            </Col>
                            <Col span={20} className='introduction-text'>
                            <b>100% Responsive Layout</b><br/>
                            View and track all your billbords on an interactive map; view and track empty billboards too.
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{padding: '20px'}}>
                   <Col span={8}>
                        <Row>
                            <Col span={4}>
                            <Icon type="smile" theme="filled" className='introduction-icon'/>
                            </Col>
                            <Col span={20} className='introduction-text'>
                            <b>User Friendly</b><br/>
                            No need to be a pro to use our site. Our user friendly interface empowers small buisnesses to take charge of their marketing.
                            </Col>
                        </Row>
                    </Col>
                    <Col span={8}>
                        <Row>
                            <Col span={4}>
                            <Icon type="layout" theme="filled" className='introduction-icon'/>
                            </Col>
                            <Col span={20} className='introduction-text'>
                            <b>Awesome Layout</b><br/>
                            Choose 1 from our 100s of available templates to make your advertisment look professional; if you use our printing service; the template is free.
                            </Col>
                        </Row>
                    </Col>
                     <Col span={8}>
                        <Row>
                            <Col span={4}>
                            <Icon type="rocket" theme="filled" className='introduction-icon'/>
                            </Col>
                            <Col span={20} className='introduction-text'>
                            <b>High Quality</b><br/>
                            High Quality printing service available. We can print big sized advertisments that can suit even the largest billboard.
                            </Col>
                        </Row>
                    </Col>

                </Row>

                </Row>
            </React.Fragment>
        );
    }
}

export default HomeContentPage;
