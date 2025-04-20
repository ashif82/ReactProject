
import { useState } from "react";
export function Category(){
    const[category]=useState(["1stcart/category/category-dairy-bread-eggs.jpg","1stcart/category/category-atta-rice-dal.jpg","1stcart/category/category-baby-care.jpg","1stcart/category/category-bakery-biscuits.jpg","1stcart/category/category-chicken-meat-fish.jpg","1stcart/category/category-cleaning-essentials.jpg","1stcart/category/category-instant-food.jpg","1stcart/category/category-pet-care.jpg","1stcart/category/category-snack-munchies.jpg","1stcart/category/category-tea-coffee-drinks.jpg"]);

    const[categoryName]=useState(["dairy-bread-eggs","atta-rice-dal","baby-care","bakery-biscuits","bakery-biscuits","chicken-meat-fish","cleaning-essentials","instant-food","pet-care","snack-munchies","tea-coffee-drinks"]);
    const[leftSide,setLeftSide]= useState(0)
   

  function handleClickLeft(){
    setLeftSide( prev=>
        prev+200
    )
  }
  function handleClickRight(){
    setLeftSide( prev=>
        prev-200
    )
  }
    
    return(
      <div  className="container-fluid mt-3 mx-auto ">
           <div className="d-flex justify-content-between">
               <div>
                   <h3>Featured Categories</h3>
               </div>
                  <div>
                       <button  onClick={handleClickLeft} className=" btn bi bi-caret-left-fill"></button>
                       <button  onClick={handleClickRight} className=" btn bi bi-caret-right-fill"></button>
                  </div>
             </div>
                 <div style={{transform:`translateX(${leftSide}px)`}} className="d-flex me-5 ">
                             {
                                category.map((images,index)=>
                                <div className="border border-2 px-4 py-4 me-4 rounded rounded-4">
                                    <img className="ms-3 py-4" src={images} width="120" height="150" alt=""  />
                                    <p>{ categoryName[index]}</p>
                                </div>   
                                )
                              }
                  </div>
                </div>
    )

}