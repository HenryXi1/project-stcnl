import Listings from "./Listings";
import {useState, useRef} from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [listings, setList] = useState([])
  const listingNameRef = useRef()
  const listingAboutRef = useRef()

  function handleAddListing(e){
      const name = listingNameRef.current.value
      const about = listingAboutRef.current.value
      if (name === '') return
      setList(prevListings =>{
        return [...prevListings, { id: uuidv4(), name: name, about: about}]
      })
      listingNameRef.current.value = null
      listingAboutRef.current.value = null
  }

  return (
    <>
      <Listings listings = {listings}/>
      <input ref = {listingNameRef} type = "text"/>
      <div>
      <input ref = {listingAboutRef} type = "text"/>
      </div>
      <button onClick={handleAddListing}> Submit </button>
    </>
  )
}

export default App;
