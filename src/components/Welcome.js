import React from 'react';
import {useLocation } from 'react-router-dom';
import {Carousel } from 'react-bootstrap';

function Welcome() {
    let loc=useLocation()
  return (
    <div>
        <h3 className='text1'><marquee>WELCOME TO OUR PRODUCTS & SERVICE PAGE</marquee></h3>
        <div>
            <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block"
      src="https://pbs.twimg.com/media/EvfMJ9BVEAAIU3A.jpg:large"
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block"
      src="https://pbs.twimg.com/media/Ed_XeRAUcAIuVg3.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://pbs.twimg.com/media/EPg0t1xWkAI4ZWf.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

            </div>
            <h2 className='text2'><u>PRODUCTS AND SERVICES</u></h2>
            <div className='list'>
            <div>
            <ul>
                <h3 className='text2'><li>Transfer</li></h3>
                <li><a href="https://retail.onlinesbi.com/personal/fund_transfer.html">Funds transfer</a></li>
                <li><a href="https://retail.onlinesbi.com/personal/neft_rtgs_faq.html">RTGS/NEFT</a></li>
                <li><a href="https://retail.onlinesbi.com/personal/visa_faq.html">Credit Card(visa)</a></li>
                <li><a href="https://www.onlinesbi.com/sbijava/imps_faq.html">IMPS PAYMENTS</a></li>
                <li><a href="http://www.sbicapsec.com/">NRI eZ Trade Funds Transfer</a></li>
            </ul>  
            </div>
            <div className='text3'>
            <ul>
                <h3 className='text2'><li>E-Deposits</li></h3>
                <li><a href="https://retail.onlinesbi.com/personal/etdr_estdr_faq.html">E-TDR/e-STDR</a></li>
                <li><a href="https://www.onlinesbi.com/sbijava/osbi_e-RD_Flexi_faq.html">SBI FLEX DEPOSIT</a></li>
                <li><a href="https://www.onlinesbi.com/sbijava/osbi_eAnnuity_faq.html">E-Annuity Deposit scheme</a></li>
                <li><a href="https://www.onlinesbi.com/sbijava/osbi_e-RD_faq.html">E-recurring Deposits</a></li>
                <li><a href="https://www.onlinesbi.com/sbijava/osbi_etdr_itss_faq.html">IT Savings scheme</a></li>
            </ul>  
            </div>
            <div className='text3'>
            <ul>
                <h3 className='text2'><li>Smart Cards</li></h3>
                <li><a href="https://prepaid.onlinesbi.com/">Gift Card</a></li>
                <li><a href="https://prepaid.onlinesbi.com/">Smart Pay out Card</a></li>
                <li><a href="https://prepaid.onlinesbi.com/">State Bank EZ payCard</a></li>
                <li><a href="https://retail.onlinesbi.com/personal/virtual_card.html">State Bank Virtual Card</a></li>
                <li><a href="https://prepaid.onlinesbi.com/">VISA FOREIGN TRAVEL CARD</a></li>
            </ul>  
            </div>
            <div className='text3'>
            <ul>
                <h3 className='text2'><li>State Bank Collect</li></h3>
                <li><a href="https://retail.onlinesbi.com/personal/bill_payment.html">Bill Payments</a></li>
                <li><a href="https://www.sbitravelcard.com/">NPS contribution</a></li>
                <li><a href="https://retail.onlinesbi.com/personal/loan_against_shares.html">Loan Against Shares</a></li>
                <li><a href="https://www.sbicard.com/en/personal/sbi-credit-card.page?GEMID1=pl&GEMID2=inbpl&CHN=901#all">Apply SBI credit card</a></li>
            </ul>  
            </div>
            </div>

        </div>
    </div>

  )
}

export default Welcome