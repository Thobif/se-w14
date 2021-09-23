import React from "react";
function Contact (props){
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>{props.Contact}</h1>
        </div>
    )
}

Contact.defaultProps = {
    name : "Contact component" ,
   Contact : "03952290"
          
}

export default Contact;