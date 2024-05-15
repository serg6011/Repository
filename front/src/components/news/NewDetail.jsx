import { useEffect, useState, useCallback } from 'react';
import config from '../../params/config';

export default function NewsDetail({ detailCode }) {
    const [news, setNews] = useState([]);

    const fetchDetailNews = useCallback(async () => {
        const response = await fetch(config.api + 'get/news/' + detailCode);
        const answer = await response.json();
        setNews(answer.data);
    }, []);

    useEffect(
        () => {fetchDetailNews()}, [fetchDetailNews]
    );

    return (
        <>
        <h2>Новости</h2>
        <div className='news-list'>   
            {
                
            }
        </div>
        </>
    )
}