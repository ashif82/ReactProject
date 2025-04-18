
import { useState } from "react";
import { useFormik } from "formik"
import "./freshcardheader.css"
export function FreshCartHeader() {
  const [body] = useState({ width: "87%", margin: "auto" });
  const [logoImage] = useState("freshcartimg/freshcardlogo.png");
  const [headerTop] = useState({ marginTop: "10px" });
  const [headerIcon] = useState(["bi bi-heart", "bi bi-person", "bi bi-bag"]);
  const [headerIconGap] = useState({ marginLeft: "17px", fontSize: "20px" });
  const [location, setLocation] = useState({
    backgroundColor: "",
    color: "",
  });

  function headerLocationOver() {
    setLocation({
      backgroundColor: "rgb(83, 78, 78)",
      color: "white",
    });
  }
  function headerLocationOut() {
    setLocation({
      backgroundColor: "",
      color: "",
    });
  }

    function ValidationName(formBody){
      var errors={}
      if(formBody.Name===""){
        errors.Name="Please Enter Your Name"
      }
      else{
        errors.Name=""
      }
      if(formBody.Email===""){
        errors.Email="Please Enter Your Email"
      }
      else{
        errors.Email=""
      }
      if(formBody.Password===""){
        errors.Password="Please Enter Password"
      }
      else{
        errors.Password=""
      }
      return errors;
     
    }
    const formik = useFormik({
      initialValues:{
       "Name":"",
       "Email":"",
       "Password":""
      },
      validate:ValidationName,
      onSubmit:(values)=>{
        alert(JSON.stringify(values));
      }
     })
   

  return (
    <div style={body} className="container-fluid overflow-hidden">
      <div style={headerTop} className="header-icon">
        <div className="d-flex justify-content-between">
          <img id="freshcart" src={logoImage} alt="" />
          <div id="searchLocation" className="input-group w-50 " style={headerTop}>
            <input type="text" className="form-control  " />
            <span className="bi bi-search input-group-text"></span>

            <button data-bs-target="#locations"data-bs-toggle="modal"
              style={location}
              onMouseOver={headerLocationOver}
              onMouseOut={headerLocationOut}
              className="btn"
            >
              <span  className="bi bi-geo-alt">Location</span>
            </button>

            <div className="modal fade " id="locations" >
              <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content ">
                  <div className="modal-header">
                   <dl className="row">
                    <dt>Choose Your Delivery Location </dt>
                    <dd>Enter your address and we will specify the offer you area.</dd>
                   </dl>
                   <button className="btn btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div className="modal-body">
                    <input type="text" className="form-control" placeholder="Search for products" />
                   <dl className="row mt-4">
                    <dt>Select Location</dt>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabama</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                    <a className="nav-link d-flex justify-content-between px-3 py-2 " href="">
                      <span>Alabma</span>
                      <span>Min:$20</span>
                    </a>
                   </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="account">
            <div className="modal-dialog modal-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3>Sing Up</h3>
                  <button data-bs-dismiss="modal" className="btn btn-close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={formik.handleSubmit} >
                    <dl>
                      <dt>Name</dt>
                      <dd><input type="text" className="form-control" name="Name" onBlur={formik.handleBlur}/></dd>
                      <dd style={{fontSize:"13px",fontWeight:"600"}} className="text-danger ">{formik.errors.Name}</dd>
                      <dt>Email address</dt>
                      <dd><input type="email" className="form-control"name="Email" onBlur={formik.handleBlur} /></dd>
                      <dd style={{fontSize:"13px",fontWeight:"600"}} className="text-danger">{formik.errors.Email}</dd>
                      <dt>Password</dt>
                      <dd><input type="password" className="form-control"name="Password" onBlur={formik.handleBlur} /></dd>
                      <dd style={{fontSize:"13px",fontWeight:"600"}}  className="text-danger">{formik.errors.Password}</dd>
                      <p style={{fontSize:"13px",fontWeight:"600"}} >By Singnup , you aagree to our <a className="text-decoration-none text-success ms-1" href="">Terms of Service & Pricacy Policy</a></p>
                      
                    </dl>
                     <button className="btn btn-success">Sign Up</button>
                     <p className="text-center">Already have an account?<a href="" className=" text-decoration-none  ms-1 text-success">Sing in</a>
                     </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div>
          {headerIcon.map((item) => (
            item==="bi bi-person"?(
              <span
              id="icon"style={headerIconGap}key={item} className={item}data-bs-toggle="modal"data-bs-target="#account"
              ></span>
            ):( <span id="icon" style={headerIconGap} key={item} className={item}></span>)
           
          ))}
          <button data-bs-target="#lists" data-bs-toggle="offcanvas" id="list" className="btn bi bi-list fs-2"></button>
        </div>
        </div>

        <div className="offcanvas offcanvas-start" id="lists">
                <div className="offcanvas-header">
                  <img src="freshcartimg/freshcardlogo.png" width="150" alt="" />
                  <button data-bs-dismiss="offcanvas" className="btn btn-close"></button>
                </div>
                <div className="offcanvas-body">
                 <div className="input-group">
                 <input type="text" className="form-control"placeholder="Search for product" />
                 <button className="bi bi-search input-group-text"></button>
                 </div>
                  
                  <div className="dropdown mt-3">
                    <button data-bs-toggle="dropdown" className="btn btn-success"><span>All Departments</span></button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item"><a className="nav-link" href="">Dairy, Breads & Eggs</a></li>
                    </ul>
                  </div>
                    <select className="form-select mt-2">
                      <option>Home</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Shop</option>
                      <option></option>

                    </select>
                    <select className="form-select">
                      <option>store</option>
                      <option></option>

                    </select>
                    <select className="form-select">
                      <option>Mega menu</option>
                      <option></option>

                    </select>
                    <select className="form-select">
                      <option>Pages</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Account</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Dashboard</option>
                      <option></option>

                    </select>
                    <select className="form-select ">
                      <option>Docs</option>
                      <option></option>

                    </select>
                </div>
        </div>
      </div>
    </div>
  );
}
