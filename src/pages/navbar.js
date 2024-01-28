

// import { Navbar } from '../components';
import styles from '../styles/navbar.module.css';


const navbar = () =>{
    return (

        <div className={styles.nav}>
            <div className={styles.leftDiv}> 
            <a href='/'>
                <img alt='/' src=''/>
            </a>
            </div>
    
            <div className={styles.rightDiv}>
                <div className={styles.user}>
                    <a href="/">

                        <img src='/' alt='' className={styles.userDp}/>
                    </a>
                    <span>Dhitosh</span>
                </div>

                <div className={styles.navLinks}>
                    <ul>
                        <li>
                            <a href='/'>Log in</a>
                        </li>
                         <li>
                            <a href='/'>Log out</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>
                    </ul>

                </div>
                
             </div>

        </div>
    );
};

export default navbar;