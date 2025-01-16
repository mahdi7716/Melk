import React from 'react'
import { sellers } from './Item'
sellers

const SelectBox = () => {
  return (
    <div>
      <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
 <option value={sellers.key}>{sellers.label}</option>
</select>
    </div>
  )
}

export default SelectBox
