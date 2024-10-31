import React from 'react'

export default function Alert(props) {
  const capitalize = (word) =>
  {
    let name = word.toLowerCase();
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return (
    props.alert && <div className='my-0 py-0'>
      <div className={`alert alert-${props.alert.type == null ? 'success' : props.alert.type} alert-dismissible fade show user-select-none`} role="alert">
        <strong>{capitalize(props.alert.type)} : </strong>{props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    </div>
  )
}
