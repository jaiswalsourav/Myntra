import { useSelector } from "react-redux";
import HomePage from "../components/HomePage";


const Home = () => {
 const items= useSelector((store) => store.items);
 console.log("got items" ,items);
  return ( 
          <div className="items-container">
              
         { items.map((item) => <HomePage key={item.id} item={item} />)}

          </div>
     
    
  );
}
export default Home;