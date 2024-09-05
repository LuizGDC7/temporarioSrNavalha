import React from 'react';
import DefaultLogo from './../../assets/img/defaultLogo.png';
import InputData from '../shared/InputData';
import { Link } from 'react-router-dom';
//import styles from './modulesCss/Generic.module.css';
import Chairs from './../../assets/img/chairs.png'


function LoginMain(){

    //const DefaultLogo = React.createRef(

    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="flex flex-col">
            
                <img src={DefaultLogo} className='object-cover h-20 w-20 rounded' alt="" />
                <p>Bem-vindo(a) ao</p>
                <p>Sr Navalha</p>

                <div className='flex flex-col'>
                    <p>Acesse sua conta:</p>
                    <InputData description='E-mail' placeholder='Insira seu E-mail'/>
                    <InputData description='Senha' placeholder='Insira sua senha'/>
                    <Link to=""> Esqueceu a senha?</Link>
                    <button >Entrar</button>
                </div>
            </div>

            <img src={Chairs} className='h-[50rem] w-auto' alt="" />

        </div>
    )
}

export default LoginMain;