import React from 'react'

const Logos = () => {
    return (
        <div className="flex flex-row justify-center items-center space-x-10 opacity-50">
            <a target='blank' href="https://github.com/yashvdhakad"><i className="bi bi-github" style={{fontSize: "2.5rem", color: "black"}}></i></a>
            <a target='blank' href="https://twitter.com/yashvdhakad"><i className="bi bi-twitter" style={{fontSize: "2.5rem", color: "black"}}></i></a>
            <a target='blank' href="https://instagram.com/yashvdhakad"><i className="bi bi-instagram" style={{fontSize: "2.5rem", color: "black"}}></i></a>
            <a target='blank' href="https://linkedin.com/in/yashvdhakad"><i className="bi bi-linkedin" style={{fontSize: "2.5rem", color: "black"}}></i></a>
        </div>
    )
}

export default Logos