import logo from '../assets/Logo.svg'

function Footer() {
    return (
        <footer>
           <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
                </div>
                
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Tomcity, USA</li>
                        <li>Phone: <br/>+1 123.456.7890</li>
                        <li>Email: <br/> 123 Tomcity, USA</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'/>Facebook</li>
                        <li><a href='/'/>Instagram</li>
                        <li><a href='/'/>Twitter</li>
                    </ul>
                </div>
           </section>
        </footer>
    )
}
export default Footer