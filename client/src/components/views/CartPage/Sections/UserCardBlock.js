import React from 'react'

function UserCardBlock(props) {



    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.meals && props.meals.map(meal => (
            <tr key={meal._id}>
                <td>
                    <img style={{ width: '70px' }} alt="meal" 
                    src={renderCartImage(meal.images)} />
                </td> 
                <td>{meal.quantity} EA</td>
                <td>$ {meal.price} </td>
                <td><button 
                onClick={()=> props.removeItem(meal._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Meal Image</th>
                        <th>Meal Quantity</th>
                        <th>Meal Price</th>
                        <th>Remove from Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
