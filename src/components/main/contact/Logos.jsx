import React from 'react'
import Github from '../../../assets/github.png'
import Twitter from '../../../assets/twitter.png'
import Instagram from '../../../assets/instagram.png'
import LinkedIn from '../../../assets/linkedin.png'

const Logos = () => {
    return (
        <div className="flex flex-row justify-center items-center space-x-10">
            <a target='blank' href="https://github.com/yashvdhakad"><img width="40" src={Github}></img></a>
            <a target='blank' href="https://twitter.com/yashvdhakad"><img width="40" src={Twitter}></img></a>
            <a target='blank' href="https://instagram.com/yashvdhakad"><img width="40" src={Instagram}></img></a>
            <a target='blank' href="https://linkedin.com/in/yashvdhakad"><img width="40" src={LinkedIn}></img></a>
        </div>
    )
}

export default Logos