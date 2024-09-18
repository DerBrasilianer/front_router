import { Link, useParams } from "react-router-dom";
import './User.css'

const UserPage = () => {

    const { id } = useParams()

    return (

        <div>

            <h1>User Page</h1>
            <p>User ID: {id}</p>
            <Link to='/'>Go to Home</Link>

        </div>

    )

}

export default UserPage
