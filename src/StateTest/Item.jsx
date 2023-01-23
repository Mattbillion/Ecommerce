import "../StateTest/Item.css"

export default function Item(props) {
   


    return (
        <div className="item-container">
            <img className="item-img" src={props.image} alt="item-image" />
            <div className="item-body">
                <h1>{props.name}</h1>
                <p>{props.instance}</p>
                <button onClick={props.changeHandler} className="Comp-btn">Click to change img</button>
            </div>
        </div>
        )
}