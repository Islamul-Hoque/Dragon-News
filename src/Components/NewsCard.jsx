import React, { useState } from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const { id, title, rating, total_view, author, thumbnail_url,  details } = news;

  // ⭐ 5-Star Rating
    const stars = Array.from({ length: 5 }, (_, index) => ( <FaStar key={index} className={index < rating.number ? "text-orange-400" : "text-gray-300"} /> ));

  // 📅 Date format: YYYY-MM-DD
    const formattedDate = author.published_date ? new Date(author.published_date).toLocaleDateString("en-CA")  : "N/A";

    return (
        <div className="bg-base-100 shadow-md mb-6 rounded-[0.6rem] border-1 border-base-200 overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center bg-base-200 p-4">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full object-cover"  />
                    <div>
                        <h4 className="font-semibold">{author.name}</h4>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>

                <div className="flex gap-3 text-gray-500 text-lg"> <FaRegBookmark className="cursor-pointer" />  <FaShareAlt className="cursor-pointer" /> </div>
            </div>

            {/* Thumbnail */}
            <div className="p-4">
                <h2 className="text-[1.1rem] text-primary font-semibold">{title}</h2>
                <div className="mt-4"> <img className="w-full h-64 object-cover rounded-[0.5rem] " src={thumbnail_url} alt={title} /> </div>
            </div>

            {/* Body */}
            <div className="px-4">
                <p className="text-accent text-[0.85rem] "> 
                    { details.length > 200 ? (
                        <> 
                            {details.slice(0, 200)}...
                            <Link to={`/news-details/${id}`}  className="text-[#ff8c47] font-semibold text-[0.95rem] cursor-pointer ml-1" >  Read More </Link>
                        </>
                        ) : ( details )
                    }
                </p>
            </div>

            <div className="px-4 py-0 my-2  divider "></div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 pb-4 ">
                <div className="flex items-center gap-2"> {stars} <span className="ml-2 font-medium"> {rating.number} </span></div>
                <div className="flex items-center gap-2 text-gray-600">  <FaEye /> <span>{total_view}</span> </div>
            </div>
        </div>
        );
    };

export default NewsCard;



