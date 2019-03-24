import React from 'react';
import "./sub-pages.css";
import BadgeRequired from "../../BadgeRequired/BadgeRequired";
import BadgeOptional from "../../BadgeOptional/BadgeOptional";
import SyntaxHighlight from "../../SyntaxHighlight/SyntaxHighlight";
import ParamDesc from "../../ParamDesc/ParamDesc";

class StrIncludes extends React.Component {
  render() {
    return (
      <div>
        <h1>.includes()</h1>
        <hr />
        <div className="sublabel">Description:</div>
        <p className="subtext">
          The method determines whether a string contains the characters of a specified string
        </p>
        <ul>
          <li>
            Returns <code>true</code> if the string contains the characters, and <code>false</code> if not
          </li>
          <li>Case sensitive</li>
        </ul>
        
        <div className="sublabel">Syntax:</div>
        <SyntaxHighlight syntax="string.includes(searchValue, start)" />
        
        <ParamDesc
          isRequired={true}
          paramName="searchValue"
          paramNameWidth={115}
          paramDesc="value to search for in string"
        />
        <ParamDesc
          isRequired={false}
          paramName="start"
          paramNameWidth={115}
          paramDesc={<span>{"default value is "} <code>0</code></span>}
        />
        
        <div className="sublabel">Example:</div>
        <div className="example">
          <iframe
            title="string-includes"
            height="400px"
            width="100%"
            src="https://repl.it/@Zgutier5/includes?lite=true"
            scrolling="no"
            frameBorder="no"
            allowFullScreen={true}
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </div>
      </div>
    );
  }
}

export default StrIncludes;