import {useState, useRef, useEffect} from 'react'
import {Link } from "react-router-dom";
import app from './FirebaseInit'
import read from './read'
import Listings from "./Listings";

 function Home() {
    const db = app.firestore();
    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("listings").get().then((querySnapshot) => {          
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);           
            });
        })
    }

    const Frame = ({image , name , about}) => {
      console.log(image + " " + name + " " + about);
      return (
          <div className="div">
                    
          <p>NAME : {name}</p>               
          <p>ABOUT : {about}</p>                
          <img src={image} />
          </div>
          );
      }
 
     return (
       <div>
          <h1>Listings</h1>
         <Link to="/submission"><button>
           Create
         </button>
         </Link>
         {
            info.map((data) => (
            <Frame image={data.Image} 
                   name={data.Name} 
                   about={data.About}/>
            ))
        }
       </div>
     );

 }

 export default Home;