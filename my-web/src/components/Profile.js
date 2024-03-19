import React from 'react';

export default function Profile() {
    return (
        <div className="p-5">
          <h2 className="text-center text-3xl font-bold text-purple-500 mb-5">
            Profile
          </h2>
          <div className="flex justify-around items-start">
            <div className="w-1/2 text-left">
              <h2 className="text-xl font-semibold mb-4">Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <p className="mb-2">Birth of date</p>
                      <p className="mb-2">Current city</p>
                      <p className="mb-2">Education</p>
                      <p className="mb-2">Preferred role</p>
                  </div>
                  <div>
                      <p className="mb-2">January, 1994</p>
                      <p className="mb-2">Istanbul</p>
                      <p className="mb-2">Sabancı University</p>
                      <p className="mb-2">Frontend, UI</p>
                  </div>
              </div>
            </div>
            <div className="w-1/2 text-left">
              <h2 className="text-xl font-semibold mb-4">About Me</h2>
              <p className="mb-2">I am an industrial engineer who has 5 years of sales experience in the white goods sector.</p>
              <p className="mb-2">I am passionate about learning new things, so I made my transition to coding, and I believe I will do a good job.</p>
            </div>
          </div>
        </div>
    );
}