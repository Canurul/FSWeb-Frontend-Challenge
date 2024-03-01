import React from 'react';
import jsLogo from '../logos/js_logo.PNG';
import reactLogo from '../logos/react_logo.PNG';
import reduxLogo from '../logos/redux_logo.PNG';
import javaLogo from '../logos/java_logo.PNG';
import vsLogo from '../logos/vs_code.PNG';

export default function Skills() {
    const skills = [
        { name: 'JavaScript', logo: jsLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Redux', logo: reduxLogo },
        { name: 'Java', logo: javaLogo },
        { name: 'VS Code', logo: vsLogo },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ width: '100%', fontSize: '30px', margin: '40px 0', textAlign: 'center' }}>Skills</h2>
            {skills.map((skill, index) => (
                <div key={index} style={{ width: '120px', margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={skill.logo} alt={skill.name} style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                    <div style={{ fontSize: '16px' }}>
                        {skill.name}
                    </div>
                </div>
            ))}
        </div>
    );
}