import React from 'react'

const Buttons = (props) => {
  return (
    <button className="border-2 py-1 px-2 border-none text-white rounded-md bg-gradient-to-r from-[#e2620a] to-[#f2a977]">{props.name}</button>
  )
}

export default Buttons