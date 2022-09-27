import React from 'react';
import{NavLink} from 'react-router-dom';

function Contact() {
  return (
    <div className='text4'>
      <nav>
<NavLink to="/welcome">Products&Services</NavLink>
<NavLink to="/contact">ContactUs</NavLink>
</nav>
      <div>
      <img id="img" src="https://www.onechampion.net/wp-content/uploads/2014/11/Contactus.jpg"></img>
      </div>
      <div >
        <h2>Call us</h2>
        <h4>Toll free number: 1800 1234<br></br>
          Toll free number: 1800 2100<br></br>
        Toll free number: 1800 11 2211<br></br>
        Toll free number: 1800 425 3800<br></br>
        Toll number: 080-26599990</h4>
      </div>
      <div>
        <h5>
            <b>For reporting Unauthorised Electronic transactions:</b><br></br>
                  1800 11 1109 (Toll Free)<br></br>
                  94491 12211 (Mobile number, Toll Free)<br></br>
                  080 - 2659 9990 (Toll number)<br></br>
                  <b>E-mail us at:</b><br></br>
                  customercare@sbi.co.in<br></br>
                  contactcentre@sbi.co.in <br></br><br></br><br></br>

                  <b>Text us</b><br></br>
                  Unhappy with services: SMS UNHAPPY to 8008 20 20 20<br></br>
                  Missed call Banking @ SBI QUICK<br></br><br></br><br></br>

                  <b>Write to us</b><br></br>
                  Customer Service Department<br></br>
                  State Bank of India<br></br>
                  State Bank Bhavan, 16th Floor<br></br>
                  Madam Cama Road,<br></br>
                  Mumbai 400 021<br></br>


                  <b>Find your nearest branch/ATM/PMJDY Branches</b><br></br>

                  Unhappy with services: SMS UNHAPPY to 8008 20 20 20<br></br>
                  Click here to find your nearest branch<br></br>
                  Click here to find your nearest ATM<br></br>
                  All States Contact numbers PMJDY<br></br>
                  <b>Contact Us</b><br></br><br></br>
                  Contact Details for Network Nodal Officers for Grievances Redressal 

        </h5>
      </div>
    </div>
  )
}

export default Contact