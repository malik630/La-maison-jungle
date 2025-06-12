import '../Styles/PlantItem.css'
import CareScale from './CareScale'

const PlantItem = ({name, cover, id, light, water, price}) => {

    return (
        <li key={id} className='lmj-plant-item'>
            <span className='lmj-plant-item-price'>{price}€</span>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            <div className='lmj-plant-name'>{name}</div>
            <div className='lmj-care-indicators'>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default PlantItem