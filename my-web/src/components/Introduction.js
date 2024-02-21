
/*
import logo from "../logos/mainPic.PNG";
import logo2 from '../logos/dayiLogo.jpeg'

export default function Introduction() {
  return (
    <div className="introduction flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div className="text-center md:text-left mb-6 md:mb-0 md:mr-6">
        <h1 className="text-/9xl mb-4">Hİ!👋</h1>
        <p className="font-bold leading-loose">
          My name is Can, I am a full-stack developer. <br />
          I can craft solid and scalable frontend products. Let's meet!
        </p>
      </div>
      <img src={logo2} alt="logo2"/>
      <img src={logo} alt="logo" className="w-80 h-80 object-contain" />
    </div>
  );
}

import React from 'react';
import logo from '../logos/mainPic.PNG';
import logo2 from '../logos/dayiLogo.jpeg';

export default function Introduction() {
    return (
        <div className="introduction flex flex-col md:flex-row items-center justify-between px-5 py-10 md:py-0">
            <div className="text-center md:text-left mb-6 md:mb-0 md:mr-6">
                <img src={logo2} alt="logo2" className="w-16 h-16 rounded-full mb-4 md:mb-0" />
                <div>
                    <h1 className="text-5xl font-extrabold mb-2 font-dancing">Hİ!👋</h1>
                    <p className="text-5xl font-extrabold mb-2 font-dancing">
                        My name is Can, I am a full-stack developer. <br />
                        I can craft solid and scalable frontend products. Let's meet!
                    </p>
                </div>
            </div>
            <img src={logo} alt="logo" className="w-auto h-auto object-contain md:w-80 md:h-80" />
        </div>
    );
}
*/
import React from 'react';
import logo from '../logos/mainPic.PNG';
import logo2 from '../logos/dayiLogo.jpeg';

export default function Introduction() {
  return (
      <div className="introduction flex flex-col md:flex-row items-center justify-between px-5 py-10 md:py-0" style={{ margin: 0 }}>
          <div className="text-center md:text-left mb-6 md:mb-0 md:mr-6 w-full md:w-auto">
              <img src={logo2} alt="logo2" className="w-16 h-16 rounded-full mb-4 md:mb-0" />
              <div>
                  <h1 className="text-5xl font-extrabold mb-2 font-dancing">Hİ!👋</h1>
                  <p className="text-5xl font-extrabold mb-2 font-dancing">
                      My name is Can, I am a full-stack developer. <br />
                      I can craft solid and scalable frontend products. Let's meet!
                  </p>
              </div>
          </div>
          <img src={logo} alt="logo" className="w-auto h-auto object-contain md:w-80 md:h-80 rounded-lg" />
      </div>
  );
}