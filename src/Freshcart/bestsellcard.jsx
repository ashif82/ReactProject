import { BestSell } from "./bestSell";
import { useState } from "react"
import "./bestsellcard.css";
export function BestSellCard(){
    const [move,setMove]=useState(0)
   

    function handleLeftClick(){
       
        setMove( (lft)=> lft+100)
       
    }

    function handleRightClick(){
        setMove((rgt)=> rgt-100)
    }
    const slideStyle={
        transform: `translateX(${move}px)`,
        transition: "0.5s",
    }
    return(
        <div className="container-fluid mt-3 ">
            <h3>Daily Best Sells</h3>
            <div style={slideStyle} className="d-flex ">
                <div style={
                    {
                        "backgroundImage":"url(1stcart/banner/banner-deal.jpg)",
                        "backgroundSize":"cover",
                        "backgroundPosition":"center",
                        "borderRadius":"10px",
                        "height":"400px"
                    }
                } 
                 className="col-12 col-sm-12 col-lg-3">
                     <div className="text-light mt-4 ms-3 ">
                        <p className="fs-3 fw-bold">100% Organic Coffee Beans.</p>
                        <p className="fw-bold">Get the best deal before close.</p>
                        <button className="btn" style={{"backgroundColor":"green"}}>Shop Now <span className="bi bi-arrow-right ms-2"></span></button>
                     </div>
                </div>
                <div className="col-12 col-sm-12 col-lg-3 ">
                       <BestSell
                       Image="1stcart/product/product-img-11.jpg"
                       title="Tea Coffee & Drink"
                       productName="Roast Ground Coffee"
                       newprice="$13"
                       oldprice="$18"
                       star="bi bi-star-half text-warning"
                       rate="4.5"

                       />
                   
                </div>
                <div  className="col-12 col-sm-12 col-lg-3">
               
                <BestSell
                       Image="1stcart/product/product-img-11.jpg"
                       title="Tea Coffee & Drink"
                       productName="Roast Ground Coffee"
                       newprice="$13"
                       oldprice="$18"
                       star="bi bi-star-half text-warning"
                       rate="4.5"

                       />
                </div>

                <div  className=" col-12 col-sm-12 col-lg-3  ">
                <BestSell
                         Image="1stcart/product/product-img-11.jpg"
                         title="Tea Coffee & Drink"
                         productName="Roast Ground Coffee"
                         newprice="$13"
                         oldprice="$18"
                         star="bi bi-star-half text-warning"
                         rate="4.5"
                         />
              
                </div>
            </div>

            <div  className="d-flex justify-content-between mt-4 ">
                <div>
                    <button onClick={handleLeftClick} className="btn best-seller"><span className="bi bi-caret-left-fill"></span></button>
                </div>
                <div>
                    <button onClick={handleRightClick} className="btn best-seller"><span className="bi bi-caret-right-fill"></span></button>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-sm-12 col-lg-3">
                    <div>
                        <span className="bi bi-facebook text-success fs-1"></span>
                        <p  className="fw-bold fs-5">10 minute grocery now</p>
                        <p>
                        Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-3">
                    <div>
                        <span className="bi bi-gift text-success fs-1"></span>
                        <p className="fw-bold fs-5">10 minute grocery now</p>
                        <p>
                        Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-3">
                    <div>
                        <span className="bi bi-watch text-success fs-1"></span>
                        <p  className="fw-bold fs-5">10 minute grocery now</p>
                        <p>
                        Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-lg-3">
                    <div>
                        <span className="bi bi-repeat text-success fs-1"></span>
                        <p  className="fw-bold fs-5">10 minute grocery now</p>
                        <p>
                        Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}