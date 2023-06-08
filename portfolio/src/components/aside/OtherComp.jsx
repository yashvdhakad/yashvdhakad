import React from 'react'

const OtherComp = (props) => {
    return (
        <nav className="w-full p-6 flex flex-col items-center space-y-4 text-sm font-medium rounded-lg hover:shadow-xl hover:shadow-purple-900">
            {
                props.companiesArr.map((i) => {
                    return <a className='hover:underline' href={i.url}>{i.name} 🡥</a>
                })
            }
        </nav>
    )
}

export default OtherComp