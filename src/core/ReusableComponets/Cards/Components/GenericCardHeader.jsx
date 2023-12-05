import React from 'react'

const GenericCardHeader = ({children, ...props}) => {
return (
    <section {...props}>{children}</section>
)
}

export default GenericCardHeader