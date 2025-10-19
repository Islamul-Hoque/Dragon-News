import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(()=> {
        if(Number(id) === 0){
            return setCategoryNews(data)
        } else if(Number(id) === 1){
            const breakingNews = data.filter(news => news.others.is_today_pick === true )
            setCategoryNews(breakingNews)
        } else {
            const filteredNews = data.filter(news => news.category_id === Number(id) )
            setCategoryNews(filteredNews)
            // console.log(filteredNews);
        }
    }, [data, id])

    return (
        <div>
            <h2 className='font-semibold text-[1.2rem] mb-3'>Total <span className='text-red-500'>{categoryNews.length}</span> news found </h2>
            <div className='grid'>
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id} /> )
                }
            </div>
        </div>
    );
};

export default CategoryNews;