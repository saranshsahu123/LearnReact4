import UserContext from '../context/UserContext'
import React ,{useContext} from 'react'


function Profile() {

const{user} = useContext(UserContext)


  if (!user) return <div> please login </div>

  return <div> welcom {user.username}</div>
}

export default Profile
