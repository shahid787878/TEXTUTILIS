
import React from 'react'
import { useSelector } from 'react-redux';
import {Link, useLocation} from "react-router-dom";
const Navbar = () => {
const amount= useSelector(state=>state.amount)

//   const [num, setNum]=useState(0)
//   const increment =()=>{
//     setNum(num+1)
//   }
// const decrement =()=>{
//   setNum(num-1)
//   if(num===0){
//     alert('0 not decrease')
// }
// }
  let location = useLocation();
  console.log(location.pathname)
  React.useEffect(() => {
  }, [location]);
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={`nav-link active ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/about" >About</Link>

        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}

 <nav className="navbar navbar-expand-lg bg-light  position-fixed float-start w-100"  id="vb" >
 <div className="container-fluid " >
        <Link className="navbar-brand animate__animated animate__bounce" to="/" >
      Dashboard
        </Link>
        <div className="collapse navbar-collapse animate__animated animate__bounce" id="shahid">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item  ">
          <Link className={`nav-link active ${location.pathname==="/home"?"active":""}`} aria-current="page" to="/home">Home</Link>
        </li>            
            <li className="nav-item ">
            <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/about" >About</Link>
            </li>
        
        <li className="nav-item ">
            <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/contact" >Contact</Link>
            </li>   
            <li className="nav-item ">
            <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/gallary" >Gallary</Link>
            </li>       
            <li className="nav-item ">
            <Link className={`nav-link  ${location.pathname==="/"?"active":""}`} to="/converter" >Converter</Link>
            </li>    
          
        
                 </ul>
        </div>
        <div className="  right-top bg-light d-flex animate__animated animate__bounce">
          
        {/* <h6 className="btn  btn-primary"onClick={increment}>+</h6>
          <h6 className="btn btn-primary">{num}</h6>
          <h6 className="btn btn-primary" onClick={decrement}>-</h6> */}
          <button className="btn btn-primary">Your Updated Wallet Balance: <span className="bg-dark "> {amount} </span></button>
        
        <button data-bs-toggle="modal" data-bs-target="#loginModal"
                className="rainbow rainbow-1 btn login-btn-links d-none d-md-block">
                
                  <svg width="25" height="25" viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg"
                    onclick="this.classList.toggle('active')">
                    <g transform="matrix(1,0,0,1,-419.5,-274.131)">
                      <g id="arrow_rocket">
                        <path id="top"
                          d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631" />
                        <g transform="matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)">
                          <path id="bottom"
                            d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631" />
                        </g>
                        <g transform="matrix(1,0,0,1,0,-0.0234189)">
                          <path id="middle" d="M420,284.646L450,284.646" />
                        </g>
                      </g>
                    </g>
                  </svg>
              </button>
              <button type="button" className="btn bar-btn-links" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRightmobile">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    className="bi bi-grid-fill" viewBox="0 0 16 16">
                    <path
                      d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                  </svg>
                </span>
              </button>
        </div>
      </div>
    </nav>
<div className="offcanvas offcanvas-end" id="offcanvasRightmobile">
<div className="offcanvas-header ">
<button type="button" className="close-menu mt-4" data-bs-dismiss="offcanvas" aria-label="Close">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
<path fill-rule="evenodd"
d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
</svg>
</button>

</div>
<div className="offcanvas-body">
<div className="head-contact d-none d-lg-block"> 
<div id="relatedStories_news" className="commonNews_Widget">
<span className="h2">Related</span>
<div className="news-cards">  
</div>
</div>

<div className="quick-link my-4">
<ul>
<li> <i className="fab fa-whatsapp"></i> <span>Nil</span> </li>
<li> <i className="fas fa-envelope"></i> <span>ujjain.com</span> </li>
</ul>
</div>

</div>
</div></div>


<div className="modal fade login-div-modal  " id="loginModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body ">
          <form method="POST" id="login_user_form">
            <input type="hidden" name="_token" value="7Ig7nMK5yGRJ2bqrKiJacZaejAVjih7GdAsfbL0L" autocomplete="off"/>
            <div id="login-td-div" className="com-div-md">
              <h5 className="text-center mb-3">Login </h5>
              <button type="button" className="close" data-bs-dismiss="modal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x"
                  viewBox="0 0 16 16">
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
              <div className="login-modal-pn  ">
                <div className="cm-select-login mt-3">
                  <div className="country-dp">
                    <label htmlFor="email" className="col-md-4 col-form-label ">Email Address</label>
                    <input id="email" type="email" className="form-control " name="email" value="" placeholder="shahid"
                      required autocomplete="email" autofocus/>
                  </div>
                  <div className="phone-div">
                    <label htmlFor="text" className="col-md-4 col-form-label  ">Mobile Number</label>
                    <input id="number" type="number" className="form-control " name="number" required
                      autocomplete="current-password"/>
                  </div>
                  <div className="phone-div">
                    <label htmlFor="password" className="col-md-4 col-form-label  ">Password</label>
                    <input type="password" className="form-control" id="password" name="Password" required
                      autocomplete="current-password"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6 ">
                    <div className="form-check ">
                      <input className="form-check-input" type="checkbox" name="remember" id="remember"/>
                      <label className="form-check-label" htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn bg-dark continue-bn text-white btn_login"> <i className="fas fa-lock"></i>
                  Login</button>
                <button className="btn btn-primary continue-bn  loading_btn_login" type="button" disabled>
                  <span className="spinner-border spinner-border-sm bg-danger" aria-hidden="true"></span>
                  Loading...
                </button>
                <div id="error_msg" className="error_msg text-center"></div>
                <p className="text-center  mt-3 ">
                  <Link to="/" alt="page not linked"> Forgot
                    Password ? </Link>
                </p>
              </div>
</div></form></div></div></div></div>
</div>

        
)
}
export default Navbar
