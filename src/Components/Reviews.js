import React from 'react'
import "../App.css"
import reviews from '../reviews'
import BBB from '../assets/footerPics/BBBrating.png'

function Reviews() {
  const bbbLink = "https://www.bbb.org/us/co/palmer-lake/profile/building-contractors/masterbilt-homes-0785-5281152#sealclick"
  return (
    <div>
      {reviews.map(current => {
        return (
          <div key={current.id} className='reviewDiv'>
            <a href={bbbLink} target="_blank" rel="noreferrer"> 
              <img src={BBB} alt="BBB rating" className="bbbRatingButton"/>
            </a>
            <h3>{current.name}</h3>
            <h4>{current.date}</h4>
            <p>{current.stars}</p>
            <p>{current.message}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Reviews