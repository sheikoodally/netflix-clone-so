import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import './ProfileScreen.css'
import PlanScreen from './PlanScreen'

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className="profileScreen">
            <Nav />
            <div className = "profileScreen_body">
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                        alt=""
                    />
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen_plans">
                            <h3>Plans</h3>
                            <PlanScreen/>
                            <button 
                                className="profileScreen_signOut"
                                onClick ={ () => auth.signOut()}
                            > 
                                    Sign Out
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card_info">
                <p>Card Number: 4242 4242 4242 4242</p>
                <p>Exp Date: 04/24</p>
                <p>cvc: 424</p>
            </div>
        </div>
    )
}

export default ProfileScreen
