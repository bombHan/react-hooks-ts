import React, { useState, useEffect } from 'react'
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';
import { Routers } from '../routers'

type CompanyInfo = {
    name: string,
    age: number
}

const MenuBar: React.FC<CompanyInfo> = ({ name, age }) => {
    const [activeMenu, setActiveMenu] = useState<string>('/');
    let history = useHistory();

    const changeMenu = (e: any) => {
        console.log('click ', e);
        setActiveMenu(e.key);
        history.push(e.key)
    };

    useEffect(() => {
        console.log('----------当前页面信息', history, Routers);
        if (history.location.pathname === '/') {
            history.push('/home');
            setActiveMenu('/home');
        }
        setActiveMenu(history.location.pathname);
    }, [])

    return (
        <div className="menu">
            <Menu onClick={(e) => changeMenu(e)} selectedKeys={[activeMenu]} mode="horizontal">
                {
                    Routers.map((item) => {
                        return (
                            <Menu.Item key={item.path}>
                                {item.name}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
            <div className="menu-info">
                {name}-{age}
            </div>
        </div>
    )
}

export default MenuBar