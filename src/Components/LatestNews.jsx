import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    const [breakingNews, setBreakingNews] = useState([]);

    useEffect(() => {
        axios.get('/news.json')
            .then(res => {
                const todayPick = res.data.filter(news => news.others.is_today_pick);
                setBreakingNews(todayPick);
            })
            .catch(err => console.error(err));
    }, []); 

    return (
        <div className='flex items-center gap-5 p-3 my-3 bg-base-200'>
            <p className='text-base-100 py-2 px-4 bg-secondary'>Latest</p>

            <Marquee className='flex gap-5' pauseOnHover={true} speed={50}>
                { 
                    breakingNews.map((news, index) => (
                    <span key={news.id} className='font-medium'>
                        {news.title}. <span> &nbsp; </span>
                    </span>
                    ))
                }
            </Marquee>

        </div>
    );
};

export default LatestNews;