import React, { useState } from 'react'

const Update = (props) => {
  const [newName , setnewName]=useState('')
  const [newImage , setnewImage]=useState('')
  const [newPrice , setnewPrice]=useState(0)
  return (
    <div>
     
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Update</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <span class="input-group-text">New name</span>
  <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setnewName(e.target.value)}}/>

  <span class="input-group-text">New image</span>
  <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setnewImage(e.target.value)}}/>

  <span class="input-group-text">New price</span>
  <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setnewPrice(e.target.value)}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>(props.UpdateOne(props.data.id,{name : newName , image : newImage , price : newPrice}))}>Update</button>
      </div>
    </div>
  </div>
</div>
   </div>
  )
}

export default Update