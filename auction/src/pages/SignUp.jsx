import TextField from '@mui/material/TextField';
import { Link , useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import React, { useEffect, useState } from "react";
import { signup, reset } from '../redux-toolkit/auth/authSlice'
import { toast } from 'react-toastify'
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";


// const schema = yup.object({
//   fullName: yup.string().required(),
//   email: yup.string().email().required(),
//   password: yup.string().required(),
//   password2: yup.string().required(),
// });

export default function SignUp() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    password2: '',
  })
  const { fullName, email, password, password2 } = formData


  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/login')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        fullName,
        email,
        password,
      }
      console.log(userData);
      dispatch(signup(userData))
    }
  }


  // const getUsers = () => {
  //   axios.get(`/api/user/signup`).then((res) => {
  //     res.data && setUsers(res.data);
  //   });
  // };


  // const {
  //   register,
  //   formState: { errors, isValid },
  // } = useForm({
  //   resolver: yupResolver(schema),
  //   mode: "onBlur",
  // });

  
  
  return (
    
    <div className="signup-Container">
      <h1>Sign-Up</h1>
      <form onSubmit={onSubmit}>
        <TextField
         type='text'
          placeholder="Name"
          id='fullName'
          name='fullName'
          defaultValue={fullName}
          onChange={onChange}
          // {...register("fullName", { required: true, maxLength: 20 })}
          />
        {/* {errors.fullName?.type === "required" && (
          <p role="alert">Name must be required</p>
          )} */}

        <TextField
         type='email'
        placeholder="Email"
        id='email'
        name='email'
        defaultValue={email}
        onChange={onChange}
        // {...register("email", { required: true })}
         />
        {/* {errors.email?.type === "required" && (
          <p role="alert">Email must be required</p>
          )} */}

        <TextField
         type='password'
          placeholder="Password"
          id='password'
          name='password'
          defaultValue={password}
          onChange={onChange}
          // {...register("password", { required: true, minLength: 8 })}
          />
        {/* {(errors.password?.type === "required") | "minLenght" && (
          <p role="alert">Password must be required</p>
          )} */}
        <TextField
         type='password'
          placeholder="Confirm Password"
          id='password2'
          name='password2'
          defaultValue={password2}
          onChange={onChange}
          // {...register("password", { required: true, minLength: 8 })}
          />
        {/* {(errors.password2?.type === "required") | "minLenght" && (
          <p role="alert">Confirmation must be required</p>
          )} */}
        <button className="button-73" type="submit" >submit</button>
        {/* <input className="button-73" role="button" type="submit"
         disabled={!isValid}
         ></input> */}
      </form>
        <Link to={"/logIn"}>Have an account?</Link>
    </div>
  );
}
// const onSubmit = async (data) => {
//   getUsers([...users, data]);
//   await axios.post(`/api/user/signup`, data);
//   console.log(users);
//   reset();
//   navigate ("/login", {replace: true} , {disabled:!isValid});}

// const [users, setUsers] = useState([]);


// useEffect(() => {
//   getUsers();
// }, []);
