import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodList = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            const response = await axios.get('/api/foods');
            setFoods(response.data);
        };
        fetchFoods();
    }, []);

    return (
        <div>
            <h2>Food Menu</h2>
            <ul>
                {foods.map((food) => (
                    <li key={food._id}>
                        <h3>{food.name}</h3>
                        <p>Price: ${food.price}</p>
                        <p>{food.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodList;