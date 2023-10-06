import Dashboard from "@/components/Dashboard"
import Landing from "@/components/Landing"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

const index = () => {
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
    // <div className="justify-center items-center">
    //   <div className="text-[black] font-bold text-2xl justify-center items-center flex">The following is displaying backend data: </div>
    //   <div className="justify-center items-center flex text-md italic">{message}</div>
    //   <div className="lg:mx-[30rem]">Our team members are: 
    //     {teamMembers.map((member, index) => 
    //       <div key={index}>❖ {member}</div>
    //   )}</div>
    // </div>
    <div>
        <Landing/>
    </div>
  )
}

export default index