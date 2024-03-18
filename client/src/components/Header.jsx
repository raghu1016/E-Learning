import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle ,Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useRef, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import { signInSuccess } from '../Redux/user/userSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function Component() {
    const [formData,setFormData] = useState({}); 
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignUpModal, setOpenSignUpModal] = useState(false);

    const emailInputRef = useRef(null);
    const navigate = useNavigate();
    const {currentUser} = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const handleSignOut = async ()=>{
        try{
            const res = await axios.post('http://localhost:5000/api/courses/signout')
            if(!res.statusText){
                Console.log(data.message);
            }
            else{
                // dispatch(signInError(res.message));
            }
        }
        catch(err){
            Console.log(res.message);
        }
    }


    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(formData==null || !formData.email || !formData.password){
            return ;
        }
        else{
            let data; 
            if(formData.username){
                const res = await axios.post('http://localhost:5000/api/courses/signup',{
                    ...formData,
                },{
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                setFormData({...formData,[formData.username]:null})
                data = res;
            }
            else{
                
                const res = await axios.post('http://localhost:5000/api/courses/login',{
                   ...formData,
                },{
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                data = res;
            }
            if(data.statusText){
                console.log(data.data);
                dispatch(signInSuccess(data.data.user));
                setOpenLoginModal(false);
                setOpenSignUpModal(false);
                navigate('/');
            }
        }
    }
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value.trim()})
    }

    const handleToggle = ()=>{
        setOpenLoginModal(!openLoginModal);
        setOpenSignUpModal(!openSignUpModal);
    }
    console.log(currentUser);

  return (
    <>
    <Navbar fluid rounded>
      <NavbarBrand href="">
        <img src="/elearning-portals-cover-picture.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E_learning</span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-4">
      {!currentUser && <Button onClick={() => setOpenLoginModal(true)} gradientDuoTone='purpleToBlue' outline>Login</Button> }
       {!currentUser && <Button onClick={() => setOpenSignUpModal(true)}>Sign Up</Button>} 
       {currentUser && <Button onClick={handleSignOut} >Sign Out</Button>} 
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="./" active className='text-2xl'> 
          Home
        </NavbarLink>
        {/* <NavbarLink href="#">Login</NavbarLink>
        <NavbarLink href="#">SignUp</NavbarLink> */}
      </NavbarCollapse>
    </Navbar>

      <Modal show={openLoginModal} size="md" popup onClose={() => setOpenLoginModal(false)} initialFocus={emailInputRef}>
        <form onSubmit = {handleSubmit}>

        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" onChange={handleChange} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" onChange={handleChange}  required />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-cyan-700 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">
              <Button type = "submit" >Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500 " onClick={handleToggle}>
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
        </form>
      </Modal>


      <Modal show={openSignUpModal} size="md" popup onClose={() => setOpenSignUpModal(false)} initialFocus={emailInputRef}>
        <form onSubmit = {handleSubmit}>

        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" ref={emailInputRef} placeholder="name@company.com" onChange={handleChange} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput id="username" onChange={handleChange} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" onChange={handleChange}  required />
            </div>
            <div className="w-full">
              <Button type = "submit" >Register</Button>
            </div>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300 m-2">
              if already registered?&nbsp;
              <a href="#" className="text-cyan-700 hover:underline dark:text-cyan-500 " onClick={handleToggle}>
                Login account
              </a>
            </div>
        </Modal.Body>
        </form>
      </Modal>
    </>
  );
}
