
import { FreshCartHeader } from "./freshcard-header"
import { Category } from "./category"
import { ProductDetails } from "./product-details"
import { BestSell } from "./bestSell"
import { BestSellCard } from "./bestsellcard"
export function FreshCart(){
    return(
        <div className="container-fluid overflow-hidden">
            <FreshCartHeader/>
            <Category/>
            <ProductDetails/>
            <BestSellCard/>
        </div>
    )
}