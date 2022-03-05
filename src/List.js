import React from 'react'

export default function List({ list} ) {
  return (
    <div>
        {list.name}
        <br></br>
        {list.about}
        <br></br>
        {list.image}
    </div>
  )
}
