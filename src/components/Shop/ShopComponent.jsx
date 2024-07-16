import React from 'react'
import CardComponent from '../Card/CardComponent'

const ShopComponent = () => {
  const OrderData = [
    {
        imgUrl: "https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "Fashion Desing",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, earum sit. Repellendus laboriosam similique animi, esse aspernatur expedita repudiandae deserunt quae eveniet architecto. Magni quasi tenetur minima temporibus exercitationem doloribus!"
    },
    {
        imgUrl: "https://images.unsplash.com/photo-1720649718712-dff5514d5534?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        Title: "Fashion Desi",
        Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, earum sit. Repellendus laboriosam similique animi, esse aspernatur expedita repudiandae deserunt quae eveniet architecto. Magni quasi tenetur minima temporibus exercitationem doloribus!"
    }
]
  return (
    <div>
      <CardComponent data={OrderData}/>
    </div>
  )
}

export default ShopComponent
