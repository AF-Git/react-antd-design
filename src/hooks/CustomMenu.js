import React, { useState, useEffect, useReducer } from 'react';
import {  Row, Col } from 'antd';
import https from "../api/https";
import Menu from './Menu'
import MenuDetail from './MenuDetail'
import MenuInfoContext from './MenuInfoContext';
import "../styles/customizeMenu.css";

export default function CustomMenu() {

    function reducer(state, action) {
        switch (action.type) {
            case 'update':
                return action.menuInfo;
            default:
                return state;
        }
    }
    const [list, setList] = useState([]);
    const imgIop = require('../styles/img/top.png');
    const imgBot = require('../styles/img/bottom.png');
    const [menuInfo, dispatch] = useReducer(reducer, {menuName:'菜单'});

    useEffect(() => {
        getMenuList();
    }, []);

    const getMenuList = () => {
        let params = {};
        https.fetchGet("/publicMenu/getAllMenu", params).then(data => {
            if (data.code === 200) {
                setList(data.data)
            }
        })
    };

    return (
        <div className="hooks">
            <MenuInfoContext.Provider  value={{menuInfo,dispatch}}>
                <Row>
                    <Col flex="320px" className="cusLeft">
                        <div className="cusMenu">
                            <img className="imgIop" src={imgIop} />
                            <img className="imgBot" src={imgBot} />
                            <div className="imgMid"></div>
                            <Menu list={list} />
                        </div>
                    </Col>
                    <Col flex="auto" className="cusRight">
                        <MenuDetail />
                    </Col>
                </Row>
            </MenuInfoContext.Provider>
        </div>
    );
}
