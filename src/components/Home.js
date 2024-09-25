// import Notes from './Notes'

import noteContext from '../context/notes/noteContext'
import { useState,useContext } from 'react'
// import notes
const Home = () => {
const a = useContext(noteContext)
 
  const [btntext, setBtnText]= useState(" $ Price Select here ")

  const [num,setNum]=useState(0)
  const increment =() =>{
        setNum(45)
      if(num===45 ){
        alert('Congratulations you have a selected amount is here ')
      }
setBtnText(" $ ok please wait")  

}
  const [btntext1, setBtnText1]= useState(" $ Price Select here ")

  const [num1,setNum1]=useState(0)
  const increment1 =() =>{
        setNum1(105)
      if(num1===105 ){
        alert('Congratulations you have a selected amount is here ')
      }
setBtnText1(" $ ok please wait")  

}

  return (
  <section>  
      <div className="container   mx-auto">
      <div className="row  text-center  " >
        <h1 className="display-5 text-light animate__animated animate__fadeInDown hm">shahid patel</h1>
  <span className="type display-6 hm" >
             Web Designer</span>
  
        </div>
        
             <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-fluid mx-auto;">
               <div className="col mb-4">
                 <div className="card">
                  <img alt="err" src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                   <div className="card-body">
                     <h5 className="card-title">Card title</h5>
                     <span className="price text-danger fw-bold">$45.00</span>
                     <del>$55.25</del>
                     <div className="mb-2">
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star-fill"></i></span>
                       <span><i className="bi bi-star"></i></span>
                       <span className="rating_num">(21)</span>
                       <div className="card_content">
                          <h3 >
                            <button onClick={increment}   type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>{num}{btntext}</button>
                          </h3>
                        </div>
                      
                      
                   </div>
                 </div>
                 </div>
               </div>
               <div className="col mb-4">
                  <div className="card">
                   <img  alt="err" src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <span className="price text-danger fw-bold">$105.00</span>
                      <del>$155.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">(21)</span>
                        <div className="card_content">
                           <h3>
                            <button onClick={increment1}   type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>{num1}{btntext1}</button>
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <span className="price text-danger fw-bold">$45.00</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">(21)</span>
                        <div className="card_content">
                           <h3>
                             <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <span className="price text-danger fw-bold">$45.00</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">(21)</span>
                        <div className="card_content">
                           <h3>
                             <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <span className="price text-danger fw-bold">$45.00</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">(21)</span>
                        <div className="card_content">
                           <h3>
                             <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div className="card">
                   <img alt="err" src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <span className="price text-danger fw-bold">$45.00</span>
                      <del>$55.25</del>
                      <div className="mb-2">
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star-fill"></i></span>
                        <span><i className="bi bi-star"></i></span>
                        <span className="rating_num">(21)</span>
                        <div className="card_content">
                           <h3>
                             <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                           </h3>
                         </div>
                       
                       
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Card title</h5>
                       <span className="price text-danger fw-bold">$45.00</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">(21)</span>
                         <div className="card_content">
                            <h3>
                              <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Card title</h5>
                       <span className="price text-danger fw-bold">$45.00</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">(21)</span>
                         <div className="card_content">
                            <h3>
                              <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Card title</h5>
                       <span className="price text-danger fw-bold">$45.00</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">(21)</span>
                         <div className="card_content">
                            <h3>
                              <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div>
                 <div className="col mb-4">
                   <div className="card">
                    <img alt="err" src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600" height="200"/>
                     <div className="card-body">
                       <h5 className="card-title">Card title</h5>
                       <span className="price text-danger fw-bold">$45.00</span>
                       <del>$55.25</del>
                       <div className="mb-2">
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star-fill"></i></span>
                         <span><i className="bi bi-star"></i></span>
                         <span className="rating_num">(21)</span>
                         <div className="card_content">
                            <h3>
                              <button type="button" className="btn px-4 py-2 upshop rounded-pill"><i className="bi bi-cart-check"></i>ADD TO CART</button>
                            </h3>
                          </div>
                        
                        
                     </div>
                   </div>
                   </div>
                 </div></div></div>
                 <div  >
      this is about {a.name} and class {a.class}
      <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1 
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
    </div>
    <div className="container-fluid  text-center   a359 " >
      < div className="row row-cols-sm-1 row-cols-md-1 row-cols-lg-2 mb-2 d-flex flex-colms justify-content-space-around align-items-center ">
        <div className="col d-none d-xs-block d-sm-block w-100    ">
          
          <div className="float-start d-flex w-100    banner-part ">
            
            <div className="slider-banner  w-100 ">
              
              <div id="carouselExampleFade" className=" carousel slide carousel-fade   " data-bs-ride="carousel">
                <div className="carousel-inner  w-100">
                  
                  <span className="carousel-item active mx-auto w-100 ">
                    <img data-fancybox="wk"
                      // src="https://c4.wallpaperflare.com/wallpaper/553/206/435/nature-landscape-trees-grass-wallpaper-preview.jpg"
                     src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600"
                     alt="ima" className="img-fluid crosel-img-size w-100 " />
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="err" className="img-fluid crosel-img-size" style={{width: '100%',height: '281px'}} />
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/3141946/pexels-photo-3141946.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="err" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/1192041/pexels-photo-1192041.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/13617750/pexels-photo-13617750.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/5347311/pexels-photo-5347311.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/1320815/pexels-photo-1320815.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/8783537/pexels-photo-8783537.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/1022189/pexels-photo-1022189.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
                  <span className="carousel-item">
                    <img
                      src="https://images.pexels.com/photos/16085175/pexels-photo-16085175/free-photo-of-queen-sofia-palace-of-arts-in-valencia.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="images not found" className="img-fluid crosel-img-size "
                      style={{width:'100%',height: '281px',zindex: '-1' }}/>
                  </span>
          
          <ol className="carousel-indicators list-unstyled  mb-5 ">
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active "></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="4"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="5"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="6"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="7"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="8"></li>
            <li data-bs-target="#carouselExampleFade" data-bs-slide-to="9"></li>
          </ol>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next   " type="button" data-bs-target="#carouselExampleFade"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          
          </button></div></div></div>
          
    </div></div></div>
    </div>
    <footer className=" float-start footer_dark  bg-dark w-100"  style={{zindex:'-1'}}>
  {/* <!-- <div className="container"> --> */}
   <div className="footer-top pt-5">
      <div className="container pt-5">
         <div className="row">
          <div className="col-12">
            <div className="pb-4 mb-4 mb-md-5 border_bottom_tran">
            <div className="row align-items-center justify-content-center">
              <div className="col-xxl-5 col-md-6">
                                <div className="heading_s1 py-2">
                                    <h3 className="text-light">Subscribe Our Newsletter</h3>
                                </div>
                                <p className="text-light">Contrary to popular belief of lorem Ipsm Latin amet ltin from industry. Phasellus blandit massa enim varius nunc. </p>
                            </div>
              <div className="col-xxl-6">

                <div className="input-group flex-nowrap">
               
               <input type="text" className="form-control" placeholder="Enter your Address"/>
               <span className="input-group-text">
                 <i className="bi bi-envelope-paper"></i>
               </span>
               </div>
              </div>
            </div>
            </div>
          </div>
         </div>
      </div>
   
   <div className="row border_bottom_tran pb-4 mb-4 mb-md-4">
                <div className="col-lg-4 col-12">
                  <div className="widget">
                        <div className="footer_logo pb-4">
                            <span><img src="https://images.pexels.com/photos/2326290/pexels-photo-2326290.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/></span>
                        </div>
                        <p className="text-light">If you are going to use of Lorem Ipsum need to be sure there isn't hidden of text</p>
                    </div>
                    <div className="widget">
                        <ul className="d-flex gap-1 p-0">
                            <li className="nav-link sc_facebook"><span className="text-light"><i className="bi bi-facebook"></i></span></li>
                            <li className="nav-link sc_twitter"><span className="text-light"><i className="bi bi-twitter"></i></span></li>
                            <li className="nav-link sc_google"><span className="text-light"><i className="bi bi-google"></i></span></li>
                            <li className="nav-link sc_youtube"><span className="text-light"><i className="bi bi-youtube"></i></span></li>
                            <li className="nav-link sc_instagram"><span className="text-light"><i className="bi bi-instagram"></i></span></li>
                        </ul>
                    </div>
            </div>
                
        <div className="col-lg-8 col-12">
                  <div className="row">
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="widget">
                                <h4 className="text-light h5 pb-3">Quick Links</h4>
                                <ul className="widget_links p-0 lh-lg">
                                    <li className="nav-link"><span className="text-light nav-link">About Us</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">FAQ</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Affiliates</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Blogs</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Contact</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="widget">
                                <h6 className="text-light h5 pb-3">Information</h6>
                                <ul className="widget_links p-0 lh-lg">
                                    <li className="nav-link"><span className="text-light nav-link">Term Of Service</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Privacy Policy</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Return policy</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Your Account</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Suppliers</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <div className="widget">
                                <h6 className="text-light h5 pb-3">My Account</h6>
                                <ul className="widget_links p-0 lh-lg">
                                    <li className="nav-link"><span className="text-light nav-link">My Account</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Discount</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Returns</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Orders History</span></li>
                                    <li className="nav-link"><span className="text-light nav-link">Order Tracking</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
 

 <div className="middle_footer mb-4 mb-md-5">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="contact_bottom_info">
                        <div className="row justify-content-center">
                            <div className="col-md-4">  
                                <div className="icon_box icon_box_style3 border-0 p-0 d-flex gap-3">
                                    <div className=" text-danger fs-1 ">
                                       <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="icon_box_content">
                                      <h5 className="text-light">Location</h5>
                                        <p className="text-light">Simcha island, <br/>indore</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">  
                                <div className="icon_box icon_box_style3 border-0 p-0 d-flex gap-3 ">
                                    <div className="text-danger fs-1">
                                       <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="icon_box_content">
                                      <h5 className="text-light">Email us</h5>
                                        <p ><a href="mailto:info@sitename.com" className="text-light nav-link">info</a>
                                        
                                         <a href="mailto:bestwebcreator.com" className="text-light nav-link">site</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">  
                                <div className="icon_box icon_box_style3 border-0 p-0 d-flex gap-3">
                                    <div className="text-danger fs-1">
                                       <i className="bi bi-headset"></i>
                                    </div>
                                    <div className="icon_box_content">
                                      <h5 className="text-light">27/4 Online Support</h5>
                                        <p className="text-light">Call for styling advice on <br/> <span className="text-light nav-link">9752784376</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom_footer bg_dark4">
        <div className="container">
            <div className="row justify-content-between ">
                <div className="col-md-6">
                    <p className="mb-md-0 text-center text-light">year-2024</p>
                </div>
                <div className="col-md-6">
                    <ul className="footer_payment   d-flex gap-1 justify-content-end pe-5">
                        <li className="nav-link"><img src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="v" style={{height:'30px',width:'30px'}}/></li>
                        <li className="nav-link"><img src="https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=600" alt="discover" style={{height:'30px',width:'30px'}}/></li>
                        <li className="nav-link"><img src="https://images.pexels.com/photos/3081173/pexels-photo-3081173.jpeg?auto=compress&cs=tinysrgb&w=600" alt="master_card" style={{height:'30px',width:'30px'}}/></li>
                        <li className="nav-link"><img src="https://images.pexels.com/photos/4503734/pexels-photo-4503734.jpeg?auto=compress&cs=tinysrgb&w=600" alt="paypal" style={{height:'30px',width:'30px'}}/></li>
                        <li className="nav-link"><img src="https://images.pexels.com/photos/1769735/pexels-photo-1769735.jpeg?auto=compress&cs=tinysrgb&w=600" alt="amarican_express" style={{height:'30px',width:'30px'}}/></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>      
</footer>
    </section>
    
  )
}

export default Home
