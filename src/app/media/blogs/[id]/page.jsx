import React from 'react'
import Detailedblog from './Detailedblog'

const page = ({ params }) => {
  const id = params.id;
  console.log(id)
  console.log("hello")
  return (
    <div>
      <Detailedblog id={id}/>
    </div>
  )
}

export default page
