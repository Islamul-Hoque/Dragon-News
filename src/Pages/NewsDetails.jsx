import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/homeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const {id} = useParams()
    const data = useLoaderData()
    const [news, setNews] = useState({})

    useEffect(()=> {
        const newsDetails = data.find(singleNews => singleNews.id == id );
        setNews(newsDetails)
    }, [data, id])
    
    return (
        <div>
            <header> <Header/> </header>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-4 my-4  '>
                <section className='md:col-span-9'>
                    <h2 className='font-bold text-primary mb-4 text-[1.3rem] '>Dragon News</h2>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className='md:col-span-3'> <RightAside /> </aside>
            </main>
        </div>
    );
};

export default NewsDetails;