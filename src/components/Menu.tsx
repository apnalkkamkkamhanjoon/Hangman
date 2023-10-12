import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface MenuItem {
    stuff: string;
    date: string;
    price: number;
}

const Menu = () => {
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const URL = `http://39.116.14.193:8080/api/getOrder`;

    useEffect(() => {
        axios.get(URL).then(res => {
            setMenu(res.data);
        }).catch(err => {
            alert('에러');
        });
    }, []);

    // Sort the menu array in descending order based on the date property
    const sortedMenu = [...menu].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const reversedMenu = sortedMenu.reverse();

    return (
        <div>
            {reversedMenu.map((list, index) => {
                const formatDate = new Date(list.date).toLocaleString();
                return (
                    <li style={{ fontSize: '2rem', fontWeight: 'bold' }} key={index}>
                        {Number(reversedMenu.length) - index}번째 주문
                        <ul style={{ fontSize: '1.5rem' }}>
                            재료 : {list.stuff}
                        </ul>
                        <ul style={{ fontSize: '1.5rem' }}>
                            주문 시간 : {formatDate}<br />
                        </ul>
                        <ul style={{ fontSize: '1.5rem' }}>
                            가격 : {list.price}원<br />
                        </ul>
                    </li>
                );
            })}
        </div>
    );
};

export default Menu;
