import React from 'react'

const CategoryField = (props) => {
  const { category, checked }  = props
  // console.log(props)
  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name={ category }
          checked={ checked }
          onChange={props.onChange}
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
