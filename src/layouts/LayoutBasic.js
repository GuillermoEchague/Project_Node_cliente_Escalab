import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import './LayoutBasic.scss'
import MenuTop from "../components/Admin/MenuTop";


export default function LayoutBasic(props){
    const {routes} = props;
    const {Content, Footer} = Layout;
    return (
    <>
        <Row>
            <Col lg={4} />
            <Col lg={16}>
                <MenuTop />
            </Col>
            <Col lg={4} />
        </Row>
        <LoadRoutes routes={routes} />
        <Footer>Guillermo Echagüe</Footer>
    </>
    );
}

function LoadRoutes({routes}) {
    return (
        <Switch>
           {routes.map((route, index) =>(
        <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))} 
        </Switch>
    );
}

