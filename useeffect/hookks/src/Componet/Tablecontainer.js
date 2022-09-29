import React ,{useState}from 'react'
import DataTable from './DataTable'

function Tablecontainer({passdata}) {
     
  return (
   <>
     
     <DataTable  data={passdata}/>
   </>
  )
}

export default Tablecontainer