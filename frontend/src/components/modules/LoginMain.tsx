import React from 'react';
import DefaultLogo from './../../assets/img/defaultLogo.png';
import { Link } from 'react-router-dom';
//import styles from './modulesCss/Generic.module.css';
import Chairs from './../../assets/img/chairs.png'
import { GrGoogle } from "react-icons/gr";
function LoginMain(){

    //const DefaultLogo = React.createRef(

    return (
        <div className="flex flex-row items-center justify-center h-screen w-screen bg-black z-0 relative gap-[25rem]">

            <div className='flex absolute blur-3xl h-[55rem] w-[55rem] rounded-full bg-[#FF9900]/30 justify-center items-center z-1'>
            </div>
            
            <div className="flex flex-col z-0 gap-[1rem]">
            
                <div className='grid justify-items-center w-auto h-auto gap-[0.5rem] border-b-[1rem] border-transparent'>
                    <img src={DefaultLogo} className='flex object-cover h-[150px] w-[150px] rounded' alt="" />
                    <h2 className='text-[#FFFFFF] text-[1rem] font-bold'>Bem vindo ao</h2>
                    <h1 className='text-[#FF9900] text-[2rem] font-bold'>Sr. Navalha</h1>
                </div>

                <div className='grid grid-cols-1 gap-[0.5rem]'>
                    <p className='text-white font-bold'>Acesse sua conta:</p>
                    <div className="flex flex-col items-start ">
                        <p className='text-white'>E-mail</p>
                        <input type="text" placeholder="Insira seu E-mail" className='bg-[#2A2A2A] w-[18rem] h-[2.5rem] rounded p-[0.5rem] border-[1px] border-[#8C8C8C] text-white'/>
                    </div>

                    <div className="flex flex-col items-start ">
                        <p className='text-white'>Senha</p>
                        <input type="text" placeholder="Insira sua senha" className='bg-[#2A2A2A] w-[18rem] h-[2.5rem] rounded p-[0.5rem] border-[1px] border-[#8C8C8C] text-white'/>
                    </div>

                    <Link to="" className='justify-self-end block atext-[#2A2A2A] text-[#FFFFFF]'> Esqueceu a senha?</Link>
                    <button className='font-bold text-[#FFFFFF] w-[18rem] h-[2.5rem] bg-[#FF9900] rounded'>Entrar</button>

                    <div className='display:inline w-[18rem] flex justify-center items-center justify-evenly'>
                        <hr className='w-[4rem]'/>
                        <span className='text-[#FFFFFF]'>Ou entre com</span>
                        <hr className='w-[4rem]'/>
                    </div>

                    <button className='flex justify-center items-center font-bold text-[#8C8C8C] w-[18rem] h-[2.5rem] bg-[#1E1E1E] gap-[0.5rem] rounded'><GrGoogle className=''/>Entre com sua conta Google
                    </button>
                </div>

                <span className='text-[#FFFFFF] flex justify-center'>Ainda não possui conta?
                    <Link to="/NOTDEFINED" className='ml-[0.5rem] text-[#FF9900]'>Cadastre-se</Link>    
                </span> 

            </div>

            <img src={Chairs} className='h-[50rem] w-auto z-0' alt="" />
            

        </div>
    )
}

export default LoginMain;