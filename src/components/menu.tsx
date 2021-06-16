import React, { useState, useEffect } from 'react'
import { Menu, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Routers } from '../routers'
import Item from '_antd@4.16.2@antd/lib/list/Item';

type CompanyInfo = {
    name: string,
    inviteCode: number
}

const filterRouters = Routers.filter((item) => {return item.path !== '/login'})

const MenuBar: React.FC<CompanyInfo> = ({ name, inviteCode }) => {
    const [activeMenu, setActiveMenu] = useState<string>('/');
    let history = useHistory();

    const changeMenu = (e: any) => {
        console.log('click ', e);
        setActiveMenu(e.key);
        history.push(e.key)
    };

    useEffect(() => {
        console.log('----------当前页面信息', history, filterRouters);
        if (history.location.pathname === '/') {
            history.push('/home');
            setActiveMenu('/home');
        }
        setActiveMenu(history.location.pathname);
    }, [])

    const logout = () => {
        history.push('/login')
    }

    return (
        <div className="menu">
            <Menu onClick={(e) => changeMenu(e)} selectedKeys={[activeMenu]} mode="horizontal">
                {
                    filterRouters.map((item) => {
                        return (
                            <Menu.Item key={item.path}>
                                {item.name}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
            <div className="menu-info">
                {name}-{inviteCode}
                <Button type='link' onClick={logout}>退出</Button>
            </div>
        </div>
    )
}

export default MenuBar