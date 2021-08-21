import React from 'react';
import { Menu } from 'antd';
import { Header as AntdHeader } from 'antd/lib/layout/layout';
import styles from 'styles/components/NavBar.module.css';
import staticData from 'static/assets/data.json';

export const NavBar = (props: any) => {
    const nav_items: string[] = staticData.NAV_BAR_ITEMS;
    const menu_item = nav_items.map((item, index) => {
        const key = index + 1;
        return <Menu.Item key={ key } className="">
            <a href={ `#${ item.toLowerCase() }` } className={ styles['text-red'] }>
                { item }
            </a>
        </Menu.Item>;
    });

    return <AntdHeader className="flex justify-around sticky top-0 z-10">
        <div className={ styles.logo }>
            <a className=""
               href="https://vnailweb.com/nail-salon-near-me-nails-kute-spa-fleming-island-fl-32003/">
                <img
                    src="https://vnailweb.com/wp-content/uploads/2020/12/Logo-12.png"
                    alt="App logo"
                    className={ styles.logoImg }
                />
            </a>
        </div>

        <Menu className="float-right" theme="dark" mode="horizontal" defaultSelectedKeys={ ['1'] }>
            { menu_item }
        </Menu>
    </AntdHeader>;
};
