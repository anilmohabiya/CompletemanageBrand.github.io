import React from 'react';
import foot from './images/web2.jpg'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';

const ManageB =()=>{
    return(
        <>
         <div className ="col-md-8 col-8  mx-auto">
  <nav class="nav nav-pills flex-column flex-sm-row mt-3 text-center">
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">New Arrival</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Offers & sales</Link>
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Trending Products</Link>
  
  <Link class="flex-sm-fill text-sm-center nav-link" to="#">Just Sold</Link>
</nav>
</div>

<div className=" container-fluid">
<div className="row">
<div className=" col-md-10 col-10 mx-auto">
<div class="card shadow">
  <div class="card-body">
  <h4 className=" px-3 p-3">Mange My Brand</h4>

 

<div class="tab-content">

   <img class="background card-img-top " src={foot} alt={foot}/>
</div>

<div class="form-group has-search ">
    <span class="fa fa-search form-control-feedback"></span>
    
    <input type="text" class="form-control w-50 mt-4 " placeholder="Search"/>
    
  </div>

   {/* images   */}
   <div class=" mt-3 px-4">
    <div class="card-horizontal">
        <div class="img-square-wrapper post-Brand">
            <img class="rounded-circle" src={foot} alt={foot}  />
        </div>
        <div class="card-body">
            <p class="card-text">All About Eve</p>
            <div className=" text-center">
<Link to="#" class="btn btn-outline-primary " role="button" aria-pressed="true">Following</Link>

            </div>

        </div>
    </div>
  
</div>

        
  {/* horizontal line   */}
  <div class="form-group col-8">
                          <hr/>
                         </div>

                         <div class=" mt-3 px-4">
    <div class="card-horizontal">
        <div class="img-square-wrapper post-Brand">
            <img class="" src={foot} alt={foot}  />
        </div>
        <div class="card-body">
            <p class="card-text">All About Eve</p>
            <div className=" text-center">
<Link to="#" class="btn btn-outline-primary " role="button" aria-pressed="true">Following</Link>

            </div>

        </div>
    </div>
  
</div>

        
  {/* horizontal line   */}
  <div class="form-group col-8">
                          <hr/>
                         </div>

                         <div class=" mt-3 px-4">
    <div class="card-horizontal">
        <div class="img-square-wrapper post-Brand">
            <img class="" src={foot} alt={foot}  />
        </div>
        <div class="card-body">
            <p class="card-text">All About Eve</p>
            <div className=" text-center">
<Link to="#" class="btn btn-outline-primary " role="button" aria-pressed="true">Following</Link>

            </div>

        </div>
    </div>
  
</div>

        
  {/* horizontal line   */}
  <div class="form-group col-8">
                          <hr/>
                         </div>


                         <div class=" mt-3 px-4">
    <div class="card-horizontal">
        <div class="img-square-wrapper post-Brand">
            <img class="rounded-circle" src={foot} alt={foot}  />
        </div>
        <div class="card-body">
            <p class="card-text">All About Eve</p>
            <div className=" text-center">
<Link to="#" class="btn btn-outline-primary " role="button" aria-pressed="true">Following</Link>

            </div>

        </div>
    </div>
  
</div>

        
  {/* horizontal line   */}
  <div class="form-group col-8">
                          <hr/>
                         </div>

                         <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end  px-5">
 
    <li class="page-item"><Link class="page-link  " to="#">1</Link></li>
    <li class="page-item"><Link class="page-link  " to="#">2</Link></li>
    <li class="page-item"><Link class="page-link  " to="#">3</Link></li>
    <li class="page-item">
      <Link class="page-link  " to="#">viewmore</Link>
    </li>
  </ul>
</nav>
  </div>
</div>
</div>
</div>
</div>

<Footer/>

        </>
    )
}

export default ManageB;