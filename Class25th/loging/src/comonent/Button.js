import React from 'react'
import Button from '@mui/material/Button';

function Btn(props) {

   console.log(props);
  return (
     <button style={props.btn}>{props.btnvalue}</button>
  )
}

export default Btn