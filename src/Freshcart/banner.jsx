
export function FreshCartBanner(){
    return(
        <div className="container-fluid mt-4">
            <div  className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div style={{
                       "backgroundImage":"url('1stcart/banner/slide-1.jpg')",
                       "height":"600px",
                       'backgroundSize': "cover"
                    }} className="carousel-item active">
                       <p>as</p>
                    </div>
                    <div  style={{
                       "backgroundImage":"url('1stcart/banner/slider-2.jpg')",
                       "height":"600px",
                       'backgroundSize': "cover"
                    }} className="carousel-item">
                       <p>ds</p>
                    </div>
                </div>
            </div>
        </div>
    )
}