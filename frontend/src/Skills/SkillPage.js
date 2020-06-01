import React, { useState } from 'react';

function SkillPage(props) {
    const [skills, setSkills] = useState(props.data);

    console.log(skills);

    return (
        <div className="container">
            {skills === null && <div className="spinner-border">Loading...</div>}
            <div className="row d-flex text-left">
                <div className="col">
                    <h4>Professional Skills: </h4>
                    <div className="list-group mr-2">
                        {skills && skills
                            .filter(skill => skill.type.localeCompare("Professional") === 0)
                            .map(skill => (
                                <SkillDetail key={skill.id} {...skill} />
                            ))
                        }
                    </div>
                </div>
                <div className="col">
                    <h4>Technical Skills:</h4>
                    <div className="list-group">
                        {skills && skills
                            .filter(skill => skill.type.localeCompare("Technical") === 0)
                            .map(skill => (
                                <SkillDetail key={skill.id} {...skill} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function SkillDetail(props) {
    return (
        <div className="list-group-item">
            <h6>{props.skill}</h6>
            <p className="mb-0">{props.level}</p>
        </div>
    )
}

export default SkillPage;