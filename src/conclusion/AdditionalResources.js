import React, { PropTypes } from 'react';

import Video from '../Video';
import RenderMarkdown from '../RenderMarkdown';

var session = require('../../www/assets.js');
import LockedContent from '../LockedContent';

export default class AdditionalResources extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    if(true) {
      return(
        <LockedContent />
      )
    }
    
    return (
      <div className="post">
        <h2>Additional Resources</h2>
      </div>
    );
  }
}