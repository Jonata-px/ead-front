import '../static/style/App.css';
import {useState} from 'react';
import {FaUserCircle} from 'react-icons/fa';
import {BiSearchAlt2} from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { useAuth } from '../contexts/authContext';


function Header() {
  const [myModal,setMyModal] = useState(true);
  const { signed, user, signOut } = useAuth();
    //console.log("Testando: ", signed)
    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log(error);
        }
    }

    const openOpsoesUser = () => {
      let modal = document.querySelector('.user-opsoes-header');
      if(modal){
        if(myModal)
          modal.style.display = "block";
        else
          modal.style.display = "none";

          setMyModal(!myModal);
      }
    }

  return (
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/" >Portal EAD</Link>
          </div>
          <form className="Busca">
            <input type="search" placeholder="Faça uma busca..."/>
            <button><BiSearchAlt2/></button>
          </form>
          {
            signed?
              <div className="user-header">
                <h3 onClick={()=>openOpsoesUser()} >Olá, Nome</h3>
                <div onClick={()=>openOpsoesUser()} className="avatar-user">
                  <FaUserCircle/>
                </div>
                <div className="user-opsoes-header">
                  <h4>Olá, Nome</h4>
                  <Link to="minhaConta"><button>Minha conta</button></Link>
                  <button title="Sign Out" onClick={handleSignOut} >Sair</button>

                </div>
              </div>
            :
              <div className="login">
                <Link to="login">Login</Link>
              </div>
          }
        </div>
      </header>
  );
}

export default Header;
