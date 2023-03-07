import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup'
import { loginFormSchema } from '../../constants/formLoginSchema';
import { useDispatch, useSelector } from 'react-redux'
import { actReLogin, fetchLogin } from '../../redux/features/user/usersSilceAPI';
import { useEffect } from 'react';
import './login.scss'
import { toast } from 'react-toastify';

const initialFormValue = {
    username: '',
    password: ''
  }
const LoginPage = () => {
    const navigate = useNavigate()
  const { isLoading, isLogged, accessToken, users } = useSelector(state => state.users) 
 

  console.log(accessToken,'asd');

  const methods = useForm({
    defaultValues: initialFormValue,
    resolver: yupResolver(loginFormSchema)
  })
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = methods

  useEffect(() => {
    if (accessToken) {
      dispatch(actReLogin(accessToken))
    }
  }, [])

  useEffect(() => {
       if(isLogged) {
        navigate('/')
        toast.success('Login in successfully')
      }
  }, [users,isLogged, navigate])

  const onValid = (values) => {
    const payload = {
      email: values.username,
      password: values.password,
      
    }
    console.log("payload",values)
    dispatch(fetchLogin(payload))
  }
  return (
    <div className='body_login'>
        <div className="center_login">
            <h1>Login</h1>
            <form method="post" onSubmit={handleSubmit(onValid)}>
                <div className="txt_field">
                <Controller
                    name='username'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <input
                        value={value}
                        onChange={onChange}
                        type={"text"}
                        />
                    )}
                />
                {!!errors.username && <span className='error-message'>
                    {errors.username.message}
                </span>}
                    <span></span>
                    <label>Username</label>
                </div>
                <div className="txt_field">
                <Controller
                    name='password'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <input
                        value={value}
                        onChange={onChange}
                        type={"password"}
                        />
                    )}
                    />
                    {!!errors.password && <span className='error-message'>
                    {errors.password.message}
                    </span>}
                    <span></span>
                    <label>Password</label>
                </div>

                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" disabled={isLoading}/>
                <div className="signup_link">
                    Not a member? <Link to={'/login-layout/register'}>Signup</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage