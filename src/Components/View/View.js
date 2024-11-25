import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../firebase/PostContext';
import { FirebaseContext } from '../../firebase/firebaseContext';

function View() {
  const [userDetails, setUserDetails] = useState(null);
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (postDetails && firebase) {
      const { userId } = postDetails;
      if (userId) {
        firebase.firestore()
          .collection('users')
          .where('id', '==', userId)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setUserDetails(doc.data());
            });
          })
          .catch((error) => {
            console.error('Error fetching user details:', error);
          });
      }
    }
  }, [postDetails, firebase]);

  return (
    <>
      {postDetails && (
        <div className="viewParentDiv">
          <div className="imageShowDiv">
            <img
              src={postDetails.url}
              alt=""
            />
          </div>
          <div className="rightSection">
            <div className="productDetails">
              <p>&#x20B9;{postDetails.price}</p>
              <span>{postDetails.name}</span>
              <p>{postDetails.category}</p>
              <span>{postDetails.createdAt}</span>
            </div>
            {userDetails && (
              <div className="contactDetails">
                <p>Seller details</p>
                <p>{userDetails.username}</p>
                <p>{userDetails.phone}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default View;
