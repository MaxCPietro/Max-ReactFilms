import React from 'react'

const AppForm = ({children,...props}) => {
return (
    <form {...props}>{children}</form>
    )
}

export default AppForm