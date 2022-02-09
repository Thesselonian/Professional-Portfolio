import React from 'react';

function Resume (props) {
    return (
        <section>
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