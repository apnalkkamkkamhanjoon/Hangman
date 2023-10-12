import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface MenuItem {
    stuff: string;
    date: string;
    price: number;
}

const Menu = () => {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const URL = `http://39.116.14.193:8080/api/getOrder`
    useEffect(() => {
        axios.get(URL).then(res => {
            setMenu(res.data)
        }).catch(err => {
            alert('에러')
        })
    }, [])


    return (
        <div>
            {menu.map((list, index) => {
                const formattedDateTimeString = list.date.replace("T", " ");
                const dateWithoutMilliseconds = formattedDateTimeString.split('.')[0];
                return (
                    <li style={{ fontSize: '2rem', fontWeight: 'bold' }} key={index}>
                        {index + 1}번째 주문
                        <ul style={{ fontSize: '1.5rem' }}>
                            재료 : {list.stuff}
                        </ul>
                        <ul style={{ fontSize: '1.5rem' }}>
                            주문 시간 : {dateWithoutMilliseconds}<br />
                        </ul>
                        <ul style={{ fontSize: '1.5rem' }}>
                            가격 : {list.price}원<br />
                        </ul>
                    </li>
                )
            })}
        </div>
    );
};

export default Menu;