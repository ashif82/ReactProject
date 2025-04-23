
import { FreshCartHeader } from "./freshcard-header"
import { Category } from "./category"
import { ProductDetails } from "./product-details"
export function FreshCart(){
    return(
        <div className="container-fluid overflow-hidden">
            <FreshCartHeader/>
            <Category/>
            <ProductDetails/>
        </div>
    )
}