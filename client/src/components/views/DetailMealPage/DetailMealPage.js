import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Row, Col } from 'antd';
import MealImage from './Sections/MealImage';
import MealInfo from './Sections/MealInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
function DetailMealPage(props) {
    const dispatch = useDispatch();
    const mealId = props.match.params.mealId
    const [Meal, setMeal] = useState([])

    useEffect(() => {
        Axios.get(`/api/meal/meals_by_id?id=${mealId}&type=single`)
            .then(response => {
                setMeal(response.data[0])
            })

    }, [])

    const addToCartHandler = (mealId) => {
        dispatch(addToCart(mealId))
    }

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{Meal.name}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={12} xs={24}>
                    <MealImage detail={Meal} />
                </Col>
                <Col lg={12} xs={24}>
                    <MealInfo
                        addToCart={addToCartHandler}
                        detail={Meal} />
                </Col>
            </Row>
        </div>
    )
}

export default DetailMealPage
