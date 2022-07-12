import React, {useState} from 'react'

function SkincareItem({eachItem, clickFunction, itemsInCart}) {
    


const [descriptionOrReview, setDescriptionOrReview] = useState(true)

const handleClick=()=> {
      setDescriptionOrReview(!descriptionOrReview)  
    }


 return (
    <li className="cards__item">
    <div className="card">
      <img
        src={eachItem.image_URL}
        alt={eachItem.name}
        className="card__image"
        onClick={handleClick}
      />
      <div className="card__content">
        <div className="card__title">{eachItem.name}</div>
        <p className="card__text">
          {descriptionOrReview ? eachItem.description : eachItem.review}
        </p>
        <a href={eachItem.link}>Link For Product</a>
        
        <p>Skin Type : {eachItem.skinType}</p>
        <button onClick={(e)=>{console.log("clicked!")
        clickFunction(eachItem) }}>
            Add To Loves 🖤   
        </button>
      </div>
    </div>
  </li>
  )
}

export default SkincareItem