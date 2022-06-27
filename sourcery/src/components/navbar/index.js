import React from "react";

function Navbar() {
  return (
    <>
      <navbar className="menu">
        <div className="select-menu">
          <h4>Search Resources By Week</h4>
          <select name="weeks" id="weeks">
            <option value="Week1">Week 1: Computational thinking</option>
            <option value="week2">Week 2: JavaScript funfdamentals</option>
            <option value="week3">Week 3: UI/UX</option>
            <option value="week4">Week 4: APIs/Node JS</option>
            <option value="week5">Week 5: Databases</option>
            <option value="week6">Week 6: Testing</option>
            <option value="week7">Week 7: React</option>
            <option value="week8">Week 8: React deeper dive</option>
            <option value="week9">Week 9: Project Week</option>
            <option value="week10">
              Week 10: Retrospectives and Deployment
            </option>
            <option value="week11">
              Week 11: Advanced computer science and software engineering
              concepts
            </option>
            <option value="week12">
              Week 12: Platform and cloud engineering{" "}
            </option>
            <option value="week13-16">Weeks 13-16: Final project</option>
          </select>
        </div>
      </navbar>
      <div className="sites">
        <div className="link-spacing">
          <a
            href="https://www.codewars.com/"
            target="blank"
            style={{ color: "white" }}
          >
            Codewars
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://codepen.io/"
            target="blank"
            style={{ color: "white" }}
          >
            Code-pen
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://web.postman.co/home"
            target="blank"
            style={{ color: "white" }}
          >
            Post man
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://www.figma.com/"
            target="blank"
            style={{ color: "white" }}
          >
            Figma
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://www.udemy.com/"
            target="blank"
            style={{ color: "white" }}
          >
            Udemy
          </a>
        </div>

        <div className="link-spacing">
          <a
            href="https://github.com/"
            target="blank"
            style={{ color: "white" }}
          >
            GitHub
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://stackoverflow.com/"
            target="blank"
            style={{ color: "white" }}
          >
            Stack Overflow
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://developer.mozilla.org/en-US/"
            target="blank"
            style={{ color: "white" }}
          >
            MDN Docs
          </a>
        </div>
        <div className="link-spacing">
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="blank"
            style={{ color: "white" }}
          >
            React Docs
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
