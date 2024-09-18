import { Link } from 'react-router-dom'
import './About.css'

const AboutPage = () => {

    return (

        <div>

            <h1>About Page</h1>
            <Link to='/'>Go to Home</Link> <br />
            <Link to='/user/:'>Go to User</Link>

        </div>

    )

}

export default AboutPage