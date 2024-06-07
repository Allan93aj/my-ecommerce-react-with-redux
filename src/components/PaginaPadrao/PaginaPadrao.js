import Navbar from 'components/Navbar/Navbar';
import styles from './PaginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

export default function PaginaPadrao(){
    return (
        <div className={styles.container}>
            <Navbar/>
        
                <Outlet/>
         
            <Footer/>
        </div>
    )
}