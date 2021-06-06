import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginProfile = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  
  return !isAuthenticated && (loginWithRedirect());

};

export default LoginProfile;