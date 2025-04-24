


export function BestSell(props){

    return(
        <div className="container-fluid">
            <div style={{"height":"400px"}} className="card bg-light w-100 ">
                <div className="card-img d-flex justify-content-center align-item-center">
                    <img src={props.Image} alt="" />
                </div>
                <div className="card-body d-flex flex-column">
                    <a className="text-decoration-none text-secondary" href="">{props.title}</a>
                    <a className="text-decoration-none text-dark"  href="">{props.productName}</a>
                    <div className="d-flex justify-content-between">
                        <div >
                            <span>{props.newprice}</span>
                            <span className="ms-2">{props.oldprice}</span>
                        </div>
                        <div>
                              <span className="bi bi-star-fill text-warning"></span>
                              <span className="bi bi-star-fill text-warning"></span>
                              <span className="bi bi-star-fill text-warning"></span>
                              <span className="bi bi-star-fill text-warning"></span>
                              <span className={props.star}></span>
                              <span className="text-secondary ms-2 ">{props.rate}</span>
                        </div>

                        
                    </div>
                    <div>
                            <button className="btn btn-success w-100 mt-2">+Add to Cart</button>
                        </div>

                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </div>
            </div>
        </div>
    )

}