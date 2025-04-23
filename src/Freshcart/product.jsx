

export function ProductList(props){
    return(
        <div className="container-fluid mt-2">
          
            <div className="card bg-light w-100">
            <div className="card-img d-flex justify-content-center">
                <img className="px-4" src={props.Image} alt="" />
            </div>
            <div className="card-body d-flex flex-column">
                <a className="text-decoration-none text-secondary"  href="">{props.title}</a>
                <a className="text-decoration-none text-dark" href="">{props.productName}</a>
                <div><span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className="bi bi-star-fill text-warning"></span>
                <span className={props.star}></span>
                <span className="text-secondary ">{props.rate}</span>
                
                </div>

                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <span>{props.newprice}</span>
                        <span className="ms-2">{props.oldprice}</span>
                    </div>
                    <div>
                        <button className="btn btn-success">+Add</button>

                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}