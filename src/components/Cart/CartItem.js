import classes from './CartItem.module.css'

const CartItem = props => {

    const price = `$${props.price.toFixed(2)}`;
    return(
        <li>
            <div>
                <h2>{props.name}</h2>
                <div>{price}</div>
            </div>
            
        </li>
    )
}