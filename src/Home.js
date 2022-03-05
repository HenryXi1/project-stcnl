import {useState, useRef, useEffect} from 'react'
import {Link } from "react-router-dom";
import app from './FirebaseInit'

 function Home() {
    const db = app.firestore();
    const [listings, setlistings] = useState([])
  

    const fetchlistings=async()=>{
      const response=db.collection('listings');
      const data=await response.get();
      data.docs.forEach(item=>{
        setlistings([...listings,item.data()])
       })
    }

    useEffect(()=>{
      fetchlistings();
    },[])

     return (
       <div>
          <h1>Listings</h1>
         <Link to="/submission"><button>
           Create
         </button>
         </Link>
         {/* {listings && listings.map(listing=>{     
          return(
            <div>
              <h4>{listing.name}</h4>
              <p>{listing.about}</p>
            </div>
          )
        })} */}
       </div>
     );

 }

 export default Home;