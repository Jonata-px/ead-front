
import Load from '../static/images/loading.gif';
import { useAuth } from '../contexts/authContext';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import Header from '../templates/Header';
import Footer from '../templates/Footer';

const Routes = () => {

    const { signed, loading } = useAuth();

    if (loading) {
        return (
            <div className="loading">
                <img src={Load} />
            </div>
        );
    }

    return (
        <>
            <Header/>

            {
                signed?
                    <AppRoutes />
                :
                    <AuthRoutes /> 
            }
            
            <Footer/>
        </>
    );
}

export default Routes;