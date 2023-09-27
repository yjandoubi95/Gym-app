import React, { useState } from 'react'

const CreateProd = (props) => {
    const [name , setName]=useState('')
    const [image , setImage]=useState('')
    const [price , setPrice]=useState(0)

    return (
        <div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create New Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group">
                                <span class="input-group-text">Name</span>
                                <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                            </div>

                            <div class="input-group">
                                <span class="input-group-text">Image Url</span>
                                <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setImage(e.target.value)}}/>
                            </div>
                            
                            <div class="input-group">
                                <span class="input-group-text">Price</span>
                                <input type="text" aria-label="First name" class="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"data-bs-dismiss="modal" onClick={()=>{props.create({name : name , imageUrl : image , price , price})}}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProd