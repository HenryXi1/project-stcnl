import Listings from "./Listings";
import {useState, useRef, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import app from './FirebaseInit'
import {Link } from "react-router-dom";


function App() {
  //set lists
  const [listings, setList] = useState([])
  const listingAboutRef = useRef()
  const listingNameRef = useRef()
  
  const [imageURL, setImageURL] = useState("")

  const LOCAL_STORAGE_KEY = 'listingsApp'

  //upload image
  const [image, setImage] = useState ('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'listingproject')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dnnsi83vc/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImageURL(file.secure_url)
    setLoading(false)

  }

  function handleAddListing(e){
    const about = listingAboutRef.current.value
    const name = listingNameRef.current.value

    // e.preventDefault();
    const db = app.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    if (!name || !about || !imageURL){
        return
    }
    const userRef = db.collection("listings").add({
      'School Name': name,
      Image: imageURL,
      About: about
    }); 
    

    listingNameRef.current.value = null
    listingAboutRef.current.value = null


}

  function clearLists(){
    setList([])
  }

  return (
    <>
      <Listings listings = {listings}/>
      <div>School Name</div>
      <input ref = {listingNameRef} type = "text"/>
      <div>About</div>
      <div>
      <input ref = {listingAboutRef} type = "text"/>
      </div>
      {/* <div>Upload Image</div> */}
      <br></br>
      <input type = "file" 
        name = "file"
        placeholder = "Upload an Image"
        onChange = {uploadImage}
      />
      {loading ? (
        <h3>Loading...</h3>
      ): (
        <img src = {image} />
      )}
      
      <Link to="/">
        <button onClick={handleAddListing}> Submit </button>
      </Link>
      
    </>
  )
}

export default App;
