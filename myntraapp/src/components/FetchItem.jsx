import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItem = () => {

 
  const fetchStatus=  useSelector((store) => store.fetchStatus);
  const dispatch= useDispatch();

  console.log(fetchStatus);

    
  
   useEffect(() => {
     if (fetchStatus.fetchDone) return;

        dispatch(fetchStatusActions.markFetchingStarted());

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
   fetch("http://localhost:8080/items",{signal})
          .then(res => res.json())
          .then((data) => {
    const itemsArray = data.items[0]; // ✅ extract the inner array
    dispatch(itemActions.addInitialItem(itemsArray));
            
          dispatch(fetchStatusActions.markFetchingDone());
           dispatch(fetchStatusActions.markFetchingFinished());
           //dispatch(itemActions.addInitialItem(items[0]));
          
           
            
              })
              .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      });
              
    return () => {
        controller.abort(); // Cleanup function to abort fetch on unmount
    };
  }, [fetchStatus.fetchDone,dispatch]);
    return (<>
    </> );
};

export default FetchItem;