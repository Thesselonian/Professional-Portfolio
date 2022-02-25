import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    console.log(formState)

    function handleChange(e) {

        if (e.target.id === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.id} is required.`)
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.id]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return ( 
        <section>
            <h1>Contact me</h1>
            <Form id="contact-form" className="form" onSubmit={handleSubmit} onChange={handleChange}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="form-input" id="name" type="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control className="form-input" id="email" type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control className="form-input" id="message" type="message" placeholder="Send me a message" />
                </Form.Group>
                {errorMessage && <div>{errorMessage}</div>}
                <button variant="primary" type="submit">
                    Submit
                </button>
            </Form>
        </section>
    )
}

export default ContactForm;

// function Contact(props) {
//     return(
//         <section>
//             <div>
//                 <p>
//                     You can contact me through:
//                 </p>
//                 <ul id="contact-list">
//                     <li>
//                         <a href="mailto:ericyoung111@gmail.com">
//                             email
//                         </a>
//                     </li>
//                     <br></br>
//                     <li>
//                         <a href="https://github.com/Thesselonian">
//                             <i className="fab fa-linkedin"></i>
//                             <span> Linkedin</span>
//                         </a>
//                     </li>
//                     <br></br>
//                     <li>
//                         <a href="https://github.com/Thesselonian">
//                             <i className="fab fa-github"></i>
//                             <span> GitHub</span>
//                         </a>
//                     </li>
//                 </ul>

//             </div>
//         </section>
//     )
// }


// export default Contact;