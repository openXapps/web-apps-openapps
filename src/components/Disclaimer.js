import React from 'react';

const Cookie = () => {
  return (
    <a
      href="https://en.wikipedia.org/wiki/HTTP_cookie"
      target="_blank"
      rel="noopener noreferrer"
    >cookies</a>
  )
};
const Storage = () => {
  return (
    <a
      href="https://en.wikipedia.org/wiki/Web_storage"
      target="_blank"
      rel="noopener noreferrer"
    >local storage</a>
  )
};
const Github = () => {
  return (
    <a
      href="https://github.com/openXapps/web-apps-openapps"
      target="_blank"
      rel="noopener noreferrer"
    >GitHub</a>
  )
};
const emojis = { grinningFaceWithBigEyes: "😃" };

const Disclaimer = ({ cookiesAccepted, handleAcceptCookies }) => {

  return (
    <div className="fixed-bottom gd-disclaimer-bg">
      <div className="container">
        {cookiesAccepted ? (
          <div
            className="text-monospace text-center my-1"
          >No ads! Enjoy <span className="h4">{emojis.grinningFaceWithBigEyes}</span> Find me on <Github />
          </div>
        ) : (
            <>
              <div className="text-monospace text-center">
                <small>We use <Cookie /> and <Storage /> to give you the best online experience. Do you accept?</small>
              </div>
              <div className="my-2">
                <button
                  className="btn btn-sm btn-block btn-outline-primary"
                  onClick={handleAcceptCookies}
                >Yes I do</button>
              </div>
              <div className="mb-2 text-center"><small>this message will be removed for 30 days once accepted</small></div>
            </>
          )}
      </div>
    </div>
  )
};

export default Disclaimer;