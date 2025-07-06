const BagSummary = () => {

    const summary = {
        totalItem: 3,
        totalMRP: 5000,
        totalDiscount: 1000,
        finalPayment: 4100
    }
  return (<div className="bag-summary">
        <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({summary.totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{summary.totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{summary.totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{summary.finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni" onClick={()=> console.log("places order is")}>PLACE ORDER</div>
  </button>
 </div>
  );
}

export default BagSummary;