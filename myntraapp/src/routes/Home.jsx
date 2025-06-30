import { useSelector } from "react-redux";
import HomePage from "../components/HomePage";


const Home = () => {
 const items= useSelector((state) => state.items);
 //console.log(items);
  return ( <main>
          <div className="items-container">
             {items.map((item) =>(<HomePage key={item.id} item={item}/>))}
          </div>
      </main>
    
  );
}
export default Home;