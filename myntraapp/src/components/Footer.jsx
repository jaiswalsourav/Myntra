import PopularSearches from "./PopularSearches";

const Footer = () => {
  return (<footer>
        <div className="footer_container">
            
    <div className="footer_top">
      <div className="footer_column">
        <h3>ONLINE SHOPPING</h3>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Gift Card</a>
        <a href="#">Myntra Insider</a>
      </div>

      <div className="footer_column">
        <h3>CUSTOMER POLICIES</h3>
        <a href="#">Contact Us</a>
        <a href="#">FAQ</a>
        <a href="#">T&C</a>
        <a href="#">Terms Of Use</a>
        <a href="#">Track Orders</a>
        <a href="#">Shipping</a>
        <a href="#">Cancellation</a>
        <a href="#">Returns</a>
        <a href="#">Privacy policy</a>
        <a href="#">Grievance Redressal</a>
      </div>

      <div className="footer_column">
        <h3>EXPERIENCE MYNTRA APP</h3>
        <a href="#">Download on App Store</a>
        <a href="#">Get it on Google Play</a>
        <a href="#">Myntra for Business</a>
      </div>
      <div className="desktop-promises">
  <div className="desktop-section">
    <div className="desktop-original">
      <img
        src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
        alt="100% Original"
        style={{ width: '48px', height: '40px' }}
      />
    </div>
    <div>
      <strong>100% ORIGINAL</strong> guarantee for all products at myntra.com
    </div>
  </div>

  <div className="desktop-section">
    <div className="desktop-return">
      <img
        src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
        alt="Return within 14 days"
        style={{ width: '48px', height: '49px' }}
      />
    </div>
    <div>
      <strong>Return within 14 days</strong> of receiving your order
    </div>
  </div>
</div>

    </div>
    </div>       
<hr/>
     
      
      <PopularSearches />
    
   
    <hr/>

        <div className="copyright">
        © 2023 www.myntra.com. All rights reserved.
       </div>
    </footer>
    
  );
}

export default Footer;