import BagItem from '../components/BagItem';
import BagSummary from '../components/BagSummary';
const Bag = () => {
const item = {
  id: 1,
  company: "Nike",
  item_name: "Air Max 270",
  image: "images/1.jpg",  
  current_price: 8999,
  original_price: 10999,
  discount_percentage: 18,
  return_period: 30,
  delivery_date: "2-3 days"
};
    return ( 
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        <BagItem item={item}/>
        </div>
        <BagSummary />
      </div>
    </main>
);
}
export default Bag;






