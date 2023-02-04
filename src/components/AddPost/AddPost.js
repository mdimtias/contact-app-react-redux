import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPost, removePost } from '../../Redux/Post/actions/postAction';
import "./AddPost.css";

const AddPost = () => {
    const posts = useSelector(state=>state.posts.posts);
    console.log(posts)
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = parseInt(e.target.phone.value);
        if(!name || !email || !phone){
            return toast.error("Please Fill the all filed")
        }
        const checkEmail = posts.find(post=>post.email === email && email)
        const checkPhone = posts.find(post=>post.phone === parseInt(phone) && phone)
        if(checkEmail){
            return toast.error("This Email Already Exist");
        }
        if(checkPhone){
            return toast.error("This Phone Number Already Exist");
        }
        const data= {id: posts.length, name, email, phone}
        dispatch(addPost(data))
        toast.success("Added Contact Info Successfully!!")
        console.log(posts)
    }
    return (
        <div className="add-post">
            <h2>Add Contact</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="number" name="phone" placeholder='Phone' />
                <input type="submit" value="Submit" className="submit" />
            </form>
            <table border="1px" className="contact-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map(post=>
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.name}</td>
                        <td>{post.email}</td>
                        <td>{post.phone}</td>
                        <td><Link to={`./../edit-post/${post.id}`} className="edit">Edit</Link><button className="delete" type="button" onClick={()=>dispatch(removePost(post.id))}>Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AddPost;