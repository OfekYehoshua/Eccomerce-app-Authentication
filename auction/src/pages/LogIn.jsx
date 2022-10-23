import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../redux-toolkit/auth/authSlice'



export default function LogIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
        navigate('/home')
      }
  
      dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])
    

    // const handlePasswordChange = (value) => {
    //   setPassword(value);
    // };

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      const userData = {
        email,
        password,
      }
  
      dispatch(login(userData))
    }
    
    
//     const handleEmailChange = (value) => {
//       setEmail(value);
//     };

// const handleSubmit = () => {
//   axios.post(`/api/user/login`, {email:email , password:password} ).then((res) => {
//     res.data && setSuccess(res.data) 
//     if (success === res.data) {
//       navigate ("/", {replace: true})
//       // console.log("submited");  
//     }
//   });
//     };


  return (
    <div className="login-Container">
        <h1> Log-in </h1>

          <Container className="inputsContainer">
            
            <form  onSubmit={onSubmit}>
            <Box className="input">
             <Typography>Email</Typography>
              <TextField
                type="text"
                id='email'
                name='email'
                value={email}
                placeholder='Enter your email'
                onChange={onChange}
              />
            <Typography>Password</Typography>
              <TextField
                type="password"
                id='password'
                name='password'
                value={password}
                placeholder='Enter password'
                onChange={onChange}
              />
            </Box>
             <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type='submit'>Login</Button>
            </form>
          </Container>
           
                <Link to={'/'}>
                  {"Don't have an account? Sign Up"}
                </Link>
            </div>
  );
}
