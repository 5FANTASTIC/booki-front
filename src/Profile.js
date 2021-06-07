import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }


  return (
    isAuthenticated && (
      <body>

        <center>

          <Card style={{ width: '38rem', backgroundColor: '#022e57', color: '#917524', fontSize: "25px" }}>
            <Card.Header>Profile</Card.Header>
            <Card.Body>
              <img style={{ borderRadius: '100%' }} src={user.picture} alt={user.name} />
              <br></br>
              <br></br>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                email : {user.email}<br></br>
                nick Name: {user.nickname}

              </Card.Text>
              <Button size="lg" style={{ backgroundColor: '#917524', opacity: '1' }}><a style={{ textDecoration: 'none', color: '#022e57' }} href='https://myaccount.google.com/profile'>show more</a></Button>
            </Card.Body>
          </Card>


          <br></br><br></br><br></br><br></br>




        </center>

      </body>
    )
  );
};

export default Profile;