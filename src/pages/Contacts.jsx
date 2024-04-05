import React from 'react'
import { Outlet } from 'react-router-dom'

const Contacts = () => {
  return (
    <>
    <h1>List of all contacts</h1>
    <Outlet />
    </>
  )
}

export default Contacts