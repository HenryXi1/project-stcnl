import React from 'react'
import List from './List'

export default function Listings( {listings} ) {
  return (
    listings.map(list =>{
        return <List key = {list.id} list = {list}/>
    })
  )
}
