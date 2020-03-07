import React, {useState} from 'react'

const servings = [
    { key:1, value:"Breakfast" },
    { key:2, value:"Lunch" },
    { key:3, value:"Dinner" },
    { key:4, value:"Beverages" },
    { key:1, value:"Snack" }
]

function UploadMealPage() {


    const [NameValue, setNameValue] = useState("");
    const [DescriptionValue, setDescriptionValue] = useState("");
    const [PriceValue, setPriceValue] = useState(0);
    const [ServingValue, setServingValue] = useState(1);

    const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }
    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }
    const onServingsSelectChange = (event) => {
        setServingValue(event.currentTarget.value)
    }
    return (
        <div style={{ maxWidth: '700px', margin: '2em auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2em' }}>
                <h2>Add New Meal</h2>
            </div>

            <form className="pr-3 pl-3">
                <div className="form-group">
                    <label>Meal Name</label>
                    <input 
                        onChange={onNameChange}
                        value= {NameValue}
                        className="form-control" 
                        type="text"/>
                </div>
                <div className="form-group">
                    <label>Meal Decription</label>
                    <textarea 
                        onChange={onDescriptionChange}
                        value={DescriptionValue}
                        className="form-control" 
                        type="text"/>
                </div>
                <div className="form-group">
                    <label>Price (ZAR)</label>
                    <input 
                        onChange={onPriceChange}
                        value={PriceValue}
                        className="form-control" 
                        type="number"/>
                </div>
                <div className="from-group">
                    <label>Serving</label>
                    <select onChange={onServingsSelectChange} value={ServingValue} className="form-control">
                        {servings.map(item => (
                            <option key={item.key} value={item.key}>{item.value}</option>
                        ))}
                    </select>
                </div>

                <button className="btn btn-outline-primary mt-3">Submit</button>
            </form>
        </div>
    )
}

export default UploadMealPage
