import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
    const [user, setUser] = useState(
        {
            Name: '' , email: '', Message: ''
        }
    )
    let names, values 
    const data  = (e) => {
        names = e.target.name
        values = e.target.value
        setUser({...user, [names]: values})
    }
    const send = async (e) => {
        const {Name, email, Message} = user
        e.preventDefault()
        const option = {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                Name, email, Message
            })
        }
        const send = await fetch(
            'https://ecommerce-react-contact-default-rtdb.firebaseio.com/Message.json', option
        )
        if(send){
            alert("Massage Sent")
        }else{
            alert("Error Occoured Massage Sent Failed")
        }
    }
    return (
    <>
        <div className="section contact py-3">
            <div className="container">
            <ul className='flex justify-content-start gap-3 p-lg-3'>
                <li>
                    <Link to='/Home'>
                    <i className="fa-solid fa-house me-2"></i>
                    Home
                    </Link>
                </li>
                <li>
                    <Link className='text-primary'>
                    <i className="fa-solid fa-arrow-right me-2"></i>
                    Contact
                    </Link>
                </li>
            </ul>
                    <h3 className='pb-3 p-3'>Contact Us</h3> 
                <form method="POST">
                <div class="form-floating mb-3">
                    <input type="name" class="form-control" id="floatingName" placeholder="Name" name='Name' value={user.Name} onChange={data}/>
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com0" name='email' value={user.email} onChange={data}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" name='Message' value={user.Message} onChange={data}></textarea>
                    <label for="floatingTextarea">Comments</label>
                </div>
                <button type="button" class="btn btn-outline-primary mb-3" onClick={send}>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contact