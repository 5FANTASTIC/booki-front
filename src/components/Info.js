import React from "react";
import BookSection1 from './BookSection1.css';
import { useAuth0 } from "@auth0/auth0-react";


const Info= () => {
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
        <p>Info page</p>
      </div>
    )
  );
};

export default Info;