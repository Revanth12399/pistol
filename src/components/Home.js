import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import { Button,Carousel } from 'react-bootstrap';

function Home() {
  let loc=useLocation();
  let getback=()=>{
    if(loc && loc.state && loc.state.name){
      return loc.state.name
    }else{
      return 'REVANTH';
    }
  }
  
   
  return (
    <div>
<nav>
<NavLink to="/home">HOME</NavLink>
<NavLink to="/welcome">Products&Services</NavLink>
<NavLink to="/contact">ContactUs</NavLink>
</nav>
<div>
<h3 className='text1'><marquee>WELCOME TO SBI ONLINE PORTAL {getback()}</marquee></h3>
  <div className='sbi'>
  <a href='https://www.sbi.co.in/'><img className="primary" src="https://mews.in/wp-content/uploads/2021/05/SBI-LOGO-HISTORY.jpg"></img></a>
    <img className="primary" src="https://lh3.googleusercontent.com/wqzn9nIIVyLoDmo32vt2u9ncHGgug3Y6TUabHwNwLsKV2d0nJwcCSjfIWEjI2Hcsamk"></img>
    
    </div>
    <div className='button'>
  <Button href="https://retail.onlinesbi.sbi/personal/" variant="secondary">Services</Button>{' '}
  <Button href='https://mobilityretail.sbi/sbf_retail.html'variant="secondary">MobileBanking</Button>{' '}
  <Button href='https://retail.onlinesbi.sbi/personal/faq.html'variant="secondary">FAQ</Button>{' '}
  <Button href='https://www.sbi.co.in/' variant="secondary">CorporateWebsite</Button>{' '}
  <Button href='https://www.onlinesbi.com/#'variant="secondary">SBMOPS</Button>{' '}
  <Button href='https://www.onlinesbi.sbi/sbicollect/icollecthome.htm'variant="secondary">SB COLLECT</Button>{' '}
  <Button href='https://www.onlinesbi.com/#'variant="secondary">Electoral Bond</Button>{' '}
  <Button href='https://retail.onlinesbi.sbi/retail/mcashclaimwin.htm?bankCode=0'variant="secondary">mcash</Button>{' '}
  <Button href='https://www.onlinesbi.com/#'variant="secondary">Apply for SB/Current Account</Button>{' '}
  <Button href='https://www.onlinesbi.com/#'variant="secondary">NPS</Button>{' '}
  <Button href='https://www.onlinesbi.com/#'variant="secondary">Bill Pay<sup id='glow'>New</sup></Button>{' '}
  <Button href='https://www.onlinesbi.com/#'variant="secondary">SBILOANS</Button>{' '}
  </div>
  <div >
    <h5 className='text' id='glow'> If slowness is Observed During the login of page refresh page for better experience.<br></br>
                        SBI never asks for confidential information such as PIN and OTP from Customers</h5>
    </div>
    <div className='portal'>
      <div className='personal'>
     
            <img className='logoimage'src="data:image/png;base64,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"></img> <br></br>
                <h5 id='h5'>PERSONAL BANKING</h5><br></br>
                <a href ='https://retail.onlinesbi.sbi/retail/login.htm'><img className='logoimage1' src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwjcRtH6yOwDYriFUVURyW2F79AJAcZjTyzDiCBpQdC2aVIyOn5OPji5R2ZiWuWmvYQ&usqp=CAU"></img></a><br></br>
                  <div className='logos'>
                    <div>
                    <a href ='https://retail.onlinesbi.sbi/retail/newuserreg.htm'> <img className='logoimage2' src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg"></img></a> <br></br><h8>New User<br></br>Registration</h8>
                    </div>
                    <div>
                     <a href ='https://www.onlinesbi.com/help_personal.html'> <img  className='logoimage2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/1200px-Blue_question_mark_icon.svg.png'></img></a><br></br><h8>How Do I</h8>
                    </div>
                    <div>
                   <a href='https://crcf.sbi.co.in/'><img  className='logoimage2' src='https://previews.123rf.com/images/putracetol/putracetol1808/putracetol180801575/106766793-headphone-customer-service-logo-icon-design.jpg'></img></a><br></br><h8>Customer Care</h8>
                    </div>
                    <div>
                    <a href='https://www.onlinesbi.com/#'><img  className='logoimage2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwebhs2_2gRxdkncVii1Ed3Gs51oVUCFddDeAEc7wzXH3EHcTnGVa__Js_w6Zr9oKmXk&usqp=CAU'></img></a><br></br><h8>Lock&Unlock User</h8>
                    </div>
                    <h8 id="sbi">SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</h8>
                    </div>      
      </div>
      <div>
        <div>
        <div className='personal'>
           <img className='logoimage3'src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/03/yonosbi-1614764973.jpg"></img> <br></br>
                <h5 id='h5'>CORPORATE BANKING</h5><br></br>
               <a href='https://yonobusiness.sbi/login/yonobusinesslogin'><img className='logoimage1' src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwjcRtH6yOwDYriFUVURyW2F79AJAcZjTyzDiCBpQdC2aVIyOn5OPji5R2ZiWuWmvYQ&usqp=CAU"></img></a><br></br>
                  <div className='logos'>
                    <div>
                    <a href='https://yonobusiness.sbi/preonboard/landing/registration'><img className='logoimage2' src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg"></img></a><br></br><h8>New Corporate<br></br>Registration</h8>
                    </div>
                    <div>
                      <a href='https://corp.onlinesbi.com/ybbihelp/help_corporate.html'><img  className='logoimage2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Blue_question_mark_icon.svg/1200px-Blue_question_mark_icon.svg.png'></img></a><br></br><h8>How Do I</h8>
                    </div>
                    <div>
                    <a href='https://yonobusiness.sbi/ContactUs'><img  className='logoimage2' src='https://previews.123rf.com/images/putracetol/putracetol1808/putracetol180801575/106766793-headphone-customer-service-logo-icon-design.jpg'></img></a><br></br><h8>Customer Care</h8>
                    </div>
                    <h8 id="sbi">SBI's internet banking portal provides personal banking services that gives you complete control over all your banking demands online.</h8>
        </div>
        
        </div>

      </div>
    </div>
    </div>
    <h8 id='sbi1'><marquee>Call us toll free on 1800 1234 and 1800 2100 and get a wide range of services through SBI Contact Centre   |   For added security, new functionality to maintain per day and per transaction limit for general merchant payment transactions</marquee></h8>
    <div className='courousel'>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-blockw"
      src="https://pbs.twimg.com/media/EvfMJ9BVEAAIU3A.jpg:large"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-blockw"
      src="https://www.passionateinmarketing.com/wp-content/uploads/2020/12/D1xyDJHXcAAXV85.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-blockw"
      src="https://pbs.twimg.com/media/E9tlJuXVoAsvy_Q.jpg:large"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
</div>
</div>
  )
}

export default Home