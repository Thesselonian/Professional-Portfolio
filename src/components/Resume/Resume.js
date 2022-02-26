import React from 'react';
import resume from'../../assets/eric-young-resume-web-development.pdf'

function Resume () {

    const proficiencies = [
        'Javascript', 
        'React', 
        'Express',
        'MySQL',
        'MongoDB',
        'GraphQL'
    ]

    return (
        <section>
            <h2>Proficiencies</h2>
            <ul className="proficiency-list" >
                {proficiencies.map((proficiency) => (
                    <li className="proficiency-item" key={proficiency}>{proficiency}</li>
                    ))
                }
            </ul>
            <embed
                src={resume} 
                width = "800px"
                height = "2100px"
            />
        </section>
    )
}

export default Resume