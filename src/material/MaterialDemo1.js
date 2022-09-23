import React from 'react';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint'

export const MaterialDemo1 = () => {
  return (
    
    <div>
        <Button variant='contained' startIcon = {<DeleteIcon/>}>HELLO</Button>        
    <Button variant='contained' endIcon = {<DeleteIcon/>}>HELLO</Button>        
    <IconButton>
        <Fingerprint/>
  </IconButton>

    <Slider aria-label="Volume" />

    </div>
  )
}
