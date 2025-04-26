
import { FreshCartHeader } from "./freshcard-header"
import { Category } from "./category"
import { ProductDetails } from "./product-details"
import { BestSell } from "./bestSell"
import { BestSellCard } from "./bestsellcard"
import { FreshCartFooter } from "./footer"
import { FreshCartBanner } from "./banner"

export function FreshCart(){
    return(
        <div className="container-fluid overflow-hidden">
            <FreshCartHeader/>
            <FreshCartBanner/>
            <Category/>
            <ProductDetails/>
            <BestSellCard/>
            <FreshCartFooter/>
        </div>
    )
}