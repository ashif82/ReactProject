
import { FreshCartHeader } from "./freshcard-header"
import { Category } from "./category"
export function FreshCart(){
    return(
        <div className="container-fluid overflow-hidden">
            <FreshCartHeader/>
            <Category/>
        </div>
    )
}