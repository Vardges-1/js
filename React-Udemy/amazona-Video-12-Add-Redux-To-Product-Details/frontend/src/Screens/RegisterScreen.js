import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function SigninScreen(props) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const {loading, userInfo, error} = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search?props.location.search.split("=")[1]:'/';

  useEffect(() => {
      if(userInfo){
          props.history.push(redirect);
      }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));

  }

  return (
      <div className="form">
        <form onSubmit={submitHandler}>
           <ul className="form-container">
               <li>
                   <h3>Create Account</h3>
               </li>
               <li>
                   {loading && <div>Loading...</div>}
                   {error && <div>Error</div>}
               </li>
               <li>
                 <label for="name">Name </label>
                 <input type="Name" name="name" id="name"  onChange={(e) => setName(e.target.value)} />
             </li>
             <li>
                 <label for="email">Email </label>
                 <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)} />
             </li>
             <li>
                 <label for="password">Password</label>
                 <input  type="password" id="password"  name="password"  onChange={(e) => setPassword(e.target.value) } />
             </li>
             <li>
                 <label for="rePassword">Password</label>
                 <input  type="rePassword" id="rePassword"  name="rePassword"  onChange={(e) => setRePassword(e.target.value) } />
             </li>
             <li>
                 <button type="submit" className="button primary">Signin</button>
             </li>
             <li>
                 Already have an account? <Link to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}>Sign-in</Link>
             </li>
           </ul>
        </form>
      </div>
  )
}
export default SigninScreen;