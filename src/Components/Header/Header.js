import React, { useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../firebase/firebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import firebase from 'firebase';

function Header() {
 
  const {user}=useContext(AuthContext)
  const history=useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span >{user ?`Welcome ${user.displayName}` : <a href='/login'>Login</a>}</span>
          
        </div>
     <div className="logout"> {user &&  <span onClick={()=>{
        firebase.auth().signOut();
        history.push('/login')
      }
      }>Logout</span>}
      </div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span> <a href='/create'>SELL</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
