import React from 'react'
import { useParams } from 'react-router-dom';

const Contact = () => {
  const { id } = useParams();
  return (
    <>
    { console.log('id',id) }
    <h1>Contact { id }</h1>
    </>
  )
}

export default Contact