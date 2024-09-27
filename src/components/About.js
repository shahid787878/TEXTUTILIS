
import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext'
const About = () => {
const a = useContext(noteContext)

  return (
    <div  >
<div className="container-expand mx-auto bg-primary me-1 ms-1">

<div className="owl-carousel owl-theme w-100 row bg-dark mx-auto  " id="owl-one">
<div className="row">
<div className="item">
    <h4><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330"  srcset=""/></h4>
</div>
</div>
<div className="row">
<div className="item">
    <h4><img src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330"  srcset=""/></h4>
</div>
</div>

<div className="item">
    <h4><img src="https://images.pexels.com/photos/17811/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="no" height="330"  srcset=""/></h4>
</div>
<div className="item">
    <h4><img src="https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=600" height="330"  alt=""/></h4>
</div>
<div className="item">
    <h4><img src="https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330"  srcset=""/></h4>
</div>
<div className="item">
    <h4><img src="https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330"  srcset=""/></h4>
</div>
<div className="item">
    <h4><img src="https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330"  srcset=""/></h4>
</div>
<div className="item">
    <h4><img src="https://images.pexels.com/photos/38280/monkey-mandril-africa-baboon-38280.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330"  srcset=""/></h4>
</div>
</div>
<div className="owl-carousel owl-theme mt-5 mb-5 " id="owl-two">

        
<div className="row bg-warning h-100">
<div className="item bg-success">
    <img src="https://images.pexels.com/photos/53114/horse-arabs-stallion-ride-53114.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  className="img-fluid h-100 " height="330" srcset=""/>
</div>
</div>
<div className="row">
<div className="item">
    <h4><img src="https://images.pexels.com/photos/68421/pexels-photo-68421.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="330" srcset=""/></h4>
</div> 
</div>
<div className="row">
<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/667201/pexels-photo-667201.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/></h4>
</div> 
</div>



<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/></h4>
</div>
<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/982314/pexels-photo-982314.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/></h4>
</div>
<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/></h4>
</div>
<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/1575857/pexels-photo-1575857.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/></h4>
</div>
</div>
<div className="owl-carousel owl-theme mt-5 mb-5  " id="owl-three">
<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/35435/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/> </h4>
</div>
<div className="item">
    <h4><img height="330" src="https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" srcset=""/></h4>
</div>

</div>

{/* <div className="slick-carousel mx-auto bg-dark w-100 " id="center">
<div className="bg-danger "><h5 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, totam.</h5></div>
<div className="bg-success"><h5>Lorem ipsum dolor sit amet.</h5></div>
<div className="bg-danger"><h5>Lorem ipsum dolor sit.</h5></div>
<div className="bg-success"><h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5></div>
<div className="bg-danger"><h5>Lorem ipsum dolor sit amet consectetur adipisicing.</h5></div>
<div className="bg-success"><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, corporis!</h5></div>

</div> */}
</div> 



      {/* <div className="accordion accordion-flush  pt-5 " id="accordionFlushExample"> */}
  {/* <div className="accordion-item">
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
this is about {a.name} and class {a.class}
*/}
    </div> 


  )
}

export default About
