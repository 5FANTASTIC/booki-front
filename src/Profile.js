import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  // if (isLoading) {
  //   return <div>Loading ...</div>;
  // }


  return (
    isAuthenticated && (
      <body>

        <center>

          <Card style={{ width: '38rem', backgroundColor: '#022e57', color: '#fff',fontFamily:'serif', fontSize: "17px" }}>
            <Card.Header  style={{ backgroundColor: '#917524'}}>Profile Information</Card.Header>
            <Card.Body>

              <img style={{float:'left', borderRadius:'100%' }} src={user.picture} alt={user.name} />
        
                
                <Card.Text>
                  Email : {user.email}
                </Card.Text>
                
                 <Card.Text style={{textAlign: 'justify' ,textIndent: '130px'}} >
                  Nick Name: {user.nickname}
                  </Card.Text>
                 
                 <br></br>
                 <Card.Title style={{textAlign: 'justify' }} >{user.name}</Card.Title>
                <Button size="lg" style={{ backgroundColor: '#917524', opacity: '1' }}><a style={{ textDecoration: 'none', color: '#fff' }} href='https://myaccount.google.com/profile' target='_blank'>show more</a></Button>
            </Card.Body>
          </Card>
              



          <br></br><br></br><br></br><br></br>




        </center>

      </body>
    )
  );
};

export default Profile;