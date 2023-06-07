import React from 'react'

const OtherComp = (props) => {
    return (
        <nav className="w-full flex flex-col items-center space-y-4 text-sm font-medium">
            {
                props.companiesArr.map((i) => {
                    return <a href={i.url}>{i.name} 🡥</a>
                })
            }
        </nav>
    )
}

export default OtherComp