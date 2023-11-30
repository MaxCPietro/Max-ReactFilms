import React from 'react'

const H2Title = ({children, ...props}) => {
    return (
    <h2 {...props}>{children}</h2>
    )
}

export default H2Title