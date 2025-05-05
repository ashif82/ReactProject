import "./banner.css";
export function FreshCartBanner(){
    return(
        <div className="container-fluid mt-4">
          
            <div className="">
            <div  className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div style={{
                       "backgroundImage":"url('1stcart/banner/slide-1.jpg')",
                       "backgroundPosition":"center",
                       "height":"600px",
                       'backgroundSize': "cover"
                    }} className="carousel-item active banner">
                        <div className="row">
                        <div className="col-12 col-sm-12 col-lg-4 ashif">
                        <span className="bg-warning px-2 py-2 rounded rounded-3">Free Sale Discount 50% </span>
                        <p className="supermarket">SuperMarket for fresh Grocery </p>
                        <p className="introduction">Introduction a new modal content online grocery shopping and combale discounds delivery</p>
                        <button className="btn btn-dark">Shop Now <span className="bi bi-arrow-right"></span></button>
                        </div>
                        </div>
                       
                    </div>
                    <div  style={{
                       "backgroundImage":"url('1stcart/banner/slider-2.jpg')",
                       "backgroundPosition":"center",
                       "height":"600px",
                       'backgroundSize': "cover"
                    }} className="carousel-item banner">
                      <div className="row">
                        <div className="col-12 col-sm-12 col-lg-4 ashif">
                        <span className="bg-warning px-2 py-2 rounded rounded-3">Free Sale Discount 50% </span>
                        <p className="supermarket">Free Shipping on <br /> orders over <strong className="text-success">$100</strong></p>
                        <p className="introduction">Introduction a new modal content online grocery shopping and combale discounds delivery</p>
                        <button className="btn btn-dark">Shop Now <span className="bi bi-arrow-right"></span></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          
        </div>
    )
}