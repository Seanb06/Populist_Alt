import React from 'react'

export default function Footer() {
  return ( 
    <div className="main-footer">
      <div className="sub-footer">
          <div className="left-footer">
              <a href="#">About</a>
              <a href="#">Terms of Service</a>
              <a href="#">Contact Us</a>
          </div>
          <div className="right-footer right">
              <a href="#">Privacy Policy</a>
              <div className="copyright">&copy; Populist Labs 2016</div>
          </div>
      </div>
    </div>
  )
}