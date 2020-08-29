import React from 'react'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <main>
                <div>{children}</div>
            </main>
        </React.Fragment>
    )
}

export default Layout