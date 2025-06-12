import { useState} from 'react'
import '../Styles/Cart.css'

function Cart({cart, updateCart}) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)

  function removeFromCart(name, price) {
      const currentPlantSaved = cart.find((plant) => plant.name === name)
      const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
      currentPlantSaved.amount -= 1

      if(currentPlantSaved.amount >= 1){
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount }
			])
      }
      else{
        updateCart([...cartFilteredCurrentPlant])
      }
			
	}

  const clearCart = () => {
    updateCart([])
  }

  return isOpen ? (
    <div className='lmj-cart'>
      <button 
        className='lmj-cart-toggle-button' 
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>
      
      <h2>🛒 Panier</h2>
      
      {cart.length > 0 ? (
        <>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`} className='cart-item'>
                <div className='cart-item-info'>
                  <button 
                    className='cart-remove-button'
                    onClick={() => removeFromCart(name, price)}
                    title={`Retirer ${name} du panier`}
                  >
                    −
                  </button>
                  <span className='cart-item-name'>🌿{name}</span>
                </div>
                <span className='cart-item-price'>{price}€ x {amount}</span>
							</div>
						))}
        </>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          color: 'rgba(255, 255, 255, 0.7)',
          fontStyle: 'italic'
        }}>
          Votre panier est vide
        </div>
      )}
      
      <h3>💰 Total : {total}€</h3>
      
      {cart.length > 0 && (
        <button 
          className='cart-action-button cart-clear-button' 
          onClick={clearCart}
        >
          Vider le panier
        </button>
      )}
    </div>
  ) : (
    <div className='lmj-cart-closed'>
      <button 
        className='lmj-cart-toggle-button' 
        onClick={() => setIsOpen(true)}
      >
        🛒 Ouvrir le Panier
      </button>
    </div>
  )
}

export default Cart