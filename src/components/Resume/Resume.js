import React from 'react';

function Resume (props) {
    return (
        <section>
            <h2>Proficiencies</h2>
            <ul class="proficiency-list">
                <li class="proficiency-item">
                    Javascript
                </li>
                <li class="proficiency-item">
                    React
                </li>
                <li class="proficiency-item">
                    React
                </li>
                <li class="proficiency-item">
                    Express
                </li>
                <li class="proficiency-item">
                    Mysql
                </li>
                <li class="proficiency-item">
                    MongoDB
                </li>
            </ul>
            {/* <a href="/assets/resume.pdf" width="800px" height="2100px" /> */}
            <embed
                src="/assets/eric-young-resume-web-development.pdf" 
                width = "800px"
                height = "2100px"
            />
        </section>
    )
}

export default Resume