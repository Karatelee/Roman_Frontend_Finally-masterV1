import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar';
import '../scss/styles.scss'

const Dish = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dishes/${id}/`).then((res) => {
      setDish(res.data);
    });
  }, [id]);

  return (
    <>
    
      <Navbar />
      <div className="dish-container">
        <h1 className="title">Dish</h1>
        {dish ? (
          <div className="dish-details">
            <img className="dish-image" src={dish.image} alt={dish.name} />
            <div className="dish-info">
              <p>Dish: {dish.name}</p>
              <p>Price: {dish.price}</p>
              <p>Description: {dish.description}</p>
              <p>Calories: {dish.calories}</p>
              <p>Carbohydrates: {dish.carbohydrates}</p>
              <p>Proteins: {dish.proteins}</p>
              <p>Fats: {dish.fats}</p>
              <p>Recipe: {dish.recipe}</p>
              <p>Type: {dish.type}</p>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Dish;
