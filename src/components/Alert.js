import React from 'react'
import Alert from 'react-bootstrap/Alert'

class AlertB extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show: this.props.showAlert
        }
    }
    closeAlert=()=>{
        this.setState({
            show:false
        })
    }

    render(){

        console.log('from alert',this.props.showAlert)
        return(
            <>
                {
                    this.state.show && 
                    <>
                        <Alert variant="danger" onClose={() => this.closeAlert()} dismissible>
                            <Alert.Heading>The book were added to the favorite List sucessfully!</Alert.Heading>
                            <p>
                            Please make sure to make login to access the favorite List as this service is only for the our user.  
                            </p>
                        </Alert>
                    </>
                    
                }


            </>
        )
    }
}
export default AlertB;