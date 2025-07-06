import { useSelector } from 'react-redux';
import BagItem from '../components/BagItem';
import BagSummary from '../components/BagSummary';
const Bag = () => {
  
  const bagItem= useSelector((store)=> store.bag);
  const items =useSelector((store)=> store.items);

  const finalItem=items.filter((item)=> 
  {
    const indexItem=bagItem.indexOf(item.id);
    return indexItem >= 0;
  });
    return ( 
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map(item=><BagItem item={item}/>)}
        </div>
        <BagSummary />
      </div>
    </main>
);
}
export default Bag;






