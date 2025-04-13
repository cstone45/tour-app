import React, {useState} from 'react';

function TourCard({id, name, info, price, image, onRemove}) {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="tour-card">
            <h3>{name}</h3>
            <h4>{price}</h4>
            <h5>{image}</h5>
            <p>
                {readMore ? info : `${info.substring(0, 80)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Read More"}
                </button>
            </p>
        <button className="btn-remove" onClick={() => {
           onRemove(id) 
        }}>Not Interested</button>
        </article>
    )
}

export default TourCard;