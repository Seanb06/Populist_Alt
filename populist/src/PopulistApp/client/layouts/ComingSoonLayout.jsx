import React from 'react'


export const ComingSoonLayout = ({ children }) => (
  <div id="comingSoon">
    {children}
  </div>
)

ComingSoonLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default ComingSoonLayout