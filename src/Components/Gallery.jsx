import React, {useEffect, useState} from 'react';
import TourCard from "./TourCard";

const TourList = ({tours, setTours, onRemove}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch('https://course-api.com/react-tours-project')
        setLoading(true);
        setError(false);
        then(response => response.json())
        then(data => setTours(tours));
    }, []);
    return (
        <ul>
            {tours.map(tours => (
                <li key={tours.id}>
                    {tour.name} - {tour.price} - {tour.image}
                </li>
            ))}
        </ul>
    );
catch (error) {
    setError(true);
};
}

export default TourList;