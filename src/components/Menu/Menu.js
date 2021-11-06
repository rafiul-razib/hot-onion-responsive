import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useFoods from '../hooks/useFoods';
import Meal from '../Meal/Meal';
import './Menu.css'

const Menu = (props) => {
    const menu = props.menu;
    const[category, setCategory] = useState('Lunch');
    // const [menu] = useFoods();
    // console.log(menu)

    const displayFood = menu.filter(food=> food.category === category);
    
    return (
        <div className="container mx-auto w-75">
            <ul className="Category">
                <li onClick={()=> setCategory('Breakfast')}>Breakfast</li>
                <li onClick={()=> setCategory('Lunch')}>Lunch</li>
                <li onClick={()=> setCategory('Dinner')}>Dinner</li>
            </ul>
           
                <Row md={3} lg={3} xs={1} className="g-4 mx-auto">
                {
                    displayFood.map(meal => <Meal key={meal.id} meal={meal}></Meal>)
                }
                </Row>

        </div>
    );
};

export default Menu;