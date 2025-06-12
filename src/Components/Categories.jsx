import '../Styles/Categories.css'

const Categories = ({updateCategorie, categories}) => {

    function handleCategorie(value){
        updateCategorie(value)
    }

    function handleReset(){
        updateCategorie('')
    }

    return(<div>
                <button className="lmj-category-item" onClick={handleReset}>Réinitialiser</button>
                <ul className='lmj-categories'>
                    {categories.map((cat) => (
                        <li key={cat} className='lmj-category-item' onClick={() => handleCategorie(cat)}>{cat}</li>
                    ))}
                </ul>
            </div>
    )
}

export default Categories