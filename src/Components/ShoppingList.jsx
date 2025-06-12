import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../Styles/ShoppingList.css'
import Categories from './Categories'

const ShoppingList = ({cart, updateCart}) => {
    const [categorie, updateCategorie] = useState('')
    const showAllPlants = categorie === '' || !categorie
    const categories = [...new Set(plantList.map(plant => plant.category))];

    function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)

		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

    return (
        <div className='lmj-shopping-container'>
            <Categories 
            updateCategorie={updateCategorie}
            categories={categories}
            />
            <ul className='lmj-plant-list'>
                {plantList
                    .filter(plant => showAllPlants || plant.category === categorie)
                    .map(({ id, cover, name, water, light, price }) => (
                        <div key={id}>
                            <PlantItem
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button 
                            className='lmj-add-to-cart-btn'
                            onClick={() => addToCart(name, price)}>
                                Ajouter au panier
                            </button>
                        </div>
                    ))}
            </ul>
        </div>
    )

}

export default ShoppingList