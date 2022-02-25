
import React, { useState } from 'react'
import Table from '../Components/Table'

function ViewClients() {
   
    
  return (
    <div className='container pt-3 px-3'>
        <div className="table-txt pt-3 pb-4">
            <h2 className='text-center'>All Clients in the System</h2>
        </div>
        <Table/>
    </div>
  )
}

export default ViewClients