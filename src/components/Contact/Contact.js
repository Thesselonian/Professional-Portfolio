import React from 'react';

function Contact(props) {
    return(
        <section>
            <div>
                <p>
                    You can contact me through:
                </p>
                <ul id="contact-list">
                    <li>
                        <a href="mailto:ericyoung111@gmail.com">
                            email
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://github.com/Thesselonian">
                            <i className="fab fa-linkedin"></i>
                            <span> Linkedin</span>
                        </a>
                    </li>
                    <br></br>
                    <li>
                        <a href="https://github.com/Thesselonian">
                            <i className="fab fa-github"></i>
                            <span> GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}


export default Contact;