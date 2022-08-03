import {useState} from 'react'
import {getContrastYIQ} from "../helpers"

function Copied({ color }) {
  return (
    <div className='copied' style={{"--bgColor": `#${color}`, "--textCOlor": `${getContrastYIQ(color)}`}}>
       Copied #{color} to Clipboard
    </div>
  )
}

export default Copied
