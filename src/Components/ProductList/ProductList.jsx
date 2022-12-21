import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductItem/ProductItem';
import "./ProductList.css"

const products = [
    {id: '1', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '2', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '3', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '4', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '5', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '6', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '7', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '8', title: 'Jeans', price: 400, description: 'Simple blue jeans'},
    {id: '9', title: 'Jeans', price: 400, description: 'Simple blue jeans'},

];

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0) 
}

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id)
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id) 
        } else {
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `To buy ${getTotalPrice(newItems)}`
            })
        }
    }

    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem product={item} onAdd={onAdd} className={'item'}>

                </ProductItem>
            ))}
        </div>
    );
};

export default ProductList;