import React from 'react';
import DefaultLogo from './../../assets/img/defaultLogo.png';
//import styles from './modulesCss/Generic.module.css';

function LoginMain(){

    //const DefaultLogo = React.createRef(

    return (
        <div className="flex flex-col h-20 w-20">
            <div className="flex">
            
                    <img src={DefaultLogo} className='object-cover h-80 w-40' alt="" />
                
                <p>Bem-vindo(a) ao</p>
                <p>Sr Navalha</p>
            </div>
        </div>
    )
}

export default LoginMain;