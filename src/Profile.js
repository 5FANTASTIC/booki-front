import React from "react";
import BookSelected from './BookSelected.css';
import { useAuth0, withAuth0 } from "@auth0/auth0-react";


const Profile= () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div id="grad1">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p> Profile page</p>
      </div>
    )
  );
};

export default withAuth0(Profile);