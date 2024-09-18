import { Link } from 'react-router-dom'
import './Home.css'

const HomePage = () => {

    return (

        <div>

            <h1>Home Page</h1>
            <Link to='/about'>Go to About</Link> <br />
            <Link to='/user/:'>Go to User</Link>
            
        </div>

    )

}

export default HomePage
