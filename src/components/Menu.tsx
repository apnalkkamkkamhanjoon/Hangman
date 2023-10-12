import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface MenuItem {
    stuff: string;
    date: string;
    price: number;
}

const translateStuff = (originalStuff: string) => {
    // 값들을 쉼표를 기준으로 분할
    const stuffArray = originalStuff.split(',');

    // 각 값에 대해 번역 적용
    const translatedStuffArray = stuffArray.map(item => {
        switch (item.trim()) {
            case 'dan':
                return '단무지';
            case 'che':
                return '치즈';
            case 'cam':
                return '참치';
            case 'dang':
                return '당근';
            case 'oi':
                return '오이';
            case 'ung':
                return '우엉';
            case 'mat':
                return '맛살';
            case 'don':
                return '돈까스';
            case 'egg':
                return '계란';
            case 'ham':
                return '햄';
            default:
                return item;
        }
    });

    // 번역된 값들을 쉼표로 다시 결합
    return translatedStuffArray.join(', ');
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
                const translatedStuff = translateStuff(list.stuff);
                const formatDate = new Date(list.date).toLocaleString();
                return (
                    <>
                        <li style={{ fontSize: '2rem', fontWeight: 'bold' }} key={index}>
                            {Number(reversedMenu.length) - index}번째 주문
                            <ul style={{ fontSize: '1.5rem' }}>
                                재료 : {translatedStuff}
                            </ul>
                            <ul style={{ fontSize: '1.5rem' }}>
                                주문 시간 : {formatDate}<br />
                            </ul>
                            <ul style={{ fontSize: '1.5rem' }}>
                                가격 : {list.price}원<br />
                            </ul>
                        </li>
                    </>
                );
            })}
        </div>
    );
};

export default Menu;
