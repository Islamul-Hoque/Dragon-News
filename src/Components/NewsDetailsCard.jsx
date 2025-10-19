import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({news}) => {
    const { id, thumbnail_url, title, details } = news;

    return (
        <div className="p-6 bg-white rounded-[0.6rem] border-1 border-base-200 overflow-hidden shadow ">
            <img className="w-full h-[25rem] object-cover rounded-[0.5rem] " src={thumbnail_url} alt={title} />

            <div>
                <h2 className="text-[1.1rem] text-primary font-semibold py-4">{title}</h2>
                <p className="text-accent text-[0.85rem] "> {details} </p>
            </div>
            <Link to={`/category/${news.category_id}`} className="btn btn-secondary mt-4"> <FaArrowLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;