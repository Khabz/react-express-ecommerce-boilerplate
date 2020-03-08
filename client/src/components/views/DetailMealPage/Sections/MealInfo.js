import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';

function MealInfo(props) {

    const [Meal, setMeal] = useState({})

    useEffect(() => {

        setMeal(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Meal Info">
                <Descriptions.Item label="Price">R{Meal.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Meal.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Meal.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Meal.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default MealInfo
