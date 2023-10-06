import { useEffect, useState } from "react"

const NextJsFlask = () => {
    // this will display on webpage by using state
    const [message, setMessage] = useState('yurrr')
    const [teamMembers, setTeamMembers] = useState([])

    // this useEffect is fetching data from the backend and displaying in console
    useEffect(() => {
        fetch("http://localhost:8080/api/home")
            .then(response => response.json())
            .then((data) => {
                setMessage(data.message)
                setTeamMembers(data.teamMembers)
            })
    }, [])
    
    return (
        <div>
            {/* This file is how you can connect backend with frontend */}
            <div className="justify-center items-center">
                <div className="text-[black] font-bold text-2xl justify-center items-center flex">The following is displaying backend data: </div>
                <div className="justify-center items-center flex text-md italic">{message}</div>
                <div className="lg:mx-[30rem]">Our team members are:
                    {teamMembers.map((member, index) =>
                        <div key={index}>❖ {member}</div>
                    )}</div>
            </div>
        </div>
    )
}

export default NextJsFlask