import axios from 'axios';
import { useState, useEffect } from 'react';

interface RankItem {
    gender: string;
    time: number;
    age: string;
}

const Rank = () => {
    const URL = 'http://39.116.14.193:8080/api/ranking'
    const [rank, setRank] = useState<RankItem[]>([]);
    useEffect(() => {
        axios.get(URL).then(res => setRank(res.data)).catch(err => alert(err))
    }, [])
    return (
        <div>
            {rank.map((list, index) => {
                return (
                    <li style={{ fontSize: '2rem', fontWeight: 'bold' }} key={index}>
                        {index + 1}등
                        <ul style={{ fontSize: '1.5rem' }}>
                            성별 : {list.gender}
                        </ul>
                        <ul style={{ fontSize: '1.5rem' }}>
                            시간 : {list.time}
                        </ul>
                        <ul style={{ fontSize: '1.5rem' }}>
                            나이 : {list.age}
                        </ul>
                    </li>
                )
            })}
        </div>
    );
};

export default Rank;