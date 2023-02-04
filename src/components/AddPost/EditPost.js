import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../../Redux/Post/actions/postAction';
import "./EditPost.css";
const EditPost = () => {
    const posts = useSelector(state=>state.posts.posts);
    const {id}= useParams();
    const currentPost = posts?.find(post=>post.id ===  parseInt(id))
    const navigate = useNavigate();
    console.log(currentPost)
    console.log(id)
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = parseInt(e.target.phone.value);
        if(!name || !email || !phone){
            return toast.error("Please Fill the all filed")
        }
        const checkEmail = posts.find(post=>post.id !== parseInt(id) && post.email === email);
        console.log(checkEmail)
        const checkPhone = posts.find(post=>post.id !== parseInt(id) && post.phone === phone)
        console.log(checkPhone)
        if(checkEmail){
            return toast.error("This Email Already Exist");
        }
        if(checkPhone){
            return toast.error("This Phone Number Already Exist");
        }
        const data= {id: parseInt(id), name, email, phone};
        dispatch(updatePost(data))
        toast.success("Updated Contact Info Successfully!!")
        navigate("/add-post")
        console.log(posts)
    }
    return (
        <div>
            {currentPost?
           <>
            <div className="edit-post">
            <h2>Edit Contact</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={currentPost.name} placeholder='Name' />
                <input type="email" name="email" defaultValue={currentPost.email} placeholder='Email' />
                <input type="number" name="phone" defaultValue={currentPost.phone} placeholder='Phone' />
                <input type="submit" value="Submit" className="submit" />
            </form>
            </div>
           </>
:(<h1>Contact id {id} was not Exist</h1>)}
        </div>
    );
};

export default EditPost;