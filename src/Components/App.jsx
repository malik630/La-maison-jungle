import { useEffect, useState } from 'react'
import logo from '../Assets/logo_lmj.png'
import Banner from './Banner.jsx'
import Cart from './Cart.jsx'
import ShoppingList from './ShoppingList.jsx'
import Footer from './Footer.jsx'
import '../Styles/App.css'
import '../Styles/Layout.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
  useEffect(() => {
    // Simulation de chargement initial
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="app-container">
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p>Chargement de La Maison Jungle...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <Banner className="dark-theme">
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      
      <main className='lmj-layout-inner animate-fade-in'>
        <aside className="sidebar">
          <Cart cart={cart} updateCart={updateCart} />
        </aside>
        
        <section className="main-content">
          <ShoppingList cart={cart} updateCart={updateCart} />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App