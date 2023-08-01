import React from 'react'

export default function header(props) {
  return (
    <>
        <div className="navvbar shadow-sm p-4 mb-3 rounded">
            <a><span className="logoname">{props.title}</span></a>
        </div>
    </>
  )
}
