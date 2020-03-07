import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Icon, Col, Card, Row } from 'antd'
import ImageSlider from '../../utils/ImageSlider'

const { Meta } = Card

function LandingPage() {

    const [Meals, setMeals] = useState([]);

    useEffect(() => {
        Axios.post('/api/meal/getMeals')
            .then(response => {
                if(response.data.success) {
                    setMeals(response.data.meals)
                    console.log(response.data.meals)
                }else {
                    alert('Failed to fetch meals from database')
                }
            })
    }, [])

    const renderCards = Meals.map((meal, index) => {
        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<ImageSlider images={meal.images} />}
            >
                <Meta
                    title={meal.name}
                    description={`R${meal.price}`}
                >
                </Meta>
            </Card>
        </Col>
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>It's Good Mood Food <Icon type="coffee" /> </h2>
            </div>

            { Meals.length === 0 ?
            <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                <h4>No Meals Yet.....</h4>
            </div>    :
            <div>
                <Row gutter={[16, 16]}>
                    { renderCards }
                </Row>
            </div>
        
        }
        <br /><br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="btn btn-sm btn-outline-primary">Load More</button>
        </div>
        </div>
    )
}

export default LandingPage
