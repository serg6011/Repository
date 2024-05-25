import { useEffect, useState, useCallback } from 'react';
import './newslist.css';
import config from '../../params/config';

export default function NewsList({collectionName, limit, paginator = false}) {
    const [news, setNews] = useState([]);

    const fetchNews = useCallback(async () => {
        const response = await fetch(config.api + 'get/' +collectionName+ '/');
        const answer = await response.json();
        setNews(answer.data);
    }, []);

    useEffect(
        () => {fetchNews()}, [fetchNews]
    );

    function getSections() {
        let arElements = {};

        news.map(item => {
            if(!arElements[item.CATEGORY])
                arElements[item.CATEGORY] = [];

            arElements[item.CATEGORY].push(item);
        });

        return (
            <>
                {
                    Object.keys(arElements).map(section => (
                        <>
                            <h2>{section}</h2>
                            {
                                arElements[section].map(el => (
                                    <div className='news-card'>
                                        <img src={'./' + el.IMAGE} alt={el.NAME} />
                                        <h2>{el.NAME}</h2>
                                        <span>{el.OPISANUE}</span>
                                        {el.TROFY != '' && <span className='params'>Награда: <b>{el.TROFY}</b></span>}
                                        {el.CLASS != '' && <span className='params'>Класс: <b>{el.CLASS}</b></span>}
                                    </div>
                                ))
                            }
                        </>
                    ))
                }
            </>
        )
    }

    return (
        <>
        <div className='news-list'>   
            {getSections()}
        </div>
        </>
    )
}