import React from 'react'
import google from '../../assets/google.png'

function Register() {
  return (
        <div className='mx-auto my-auto w-full flex flex-col justify-center items-center mt-24 px-1 py-8 bg-white shadow rounded-lg m-auto'>
            <div id='Presentacion-IS' className='py-2'>
                <h1 style={{fontWeight: 'bold'}} className='texto text-lg'>INICIAR SESIÓN
                </h1>
            </div>
        <div id='ETPV' className='py-2'>
            <p>¿Es tu primera vez? <a href="#"><span style={{textDecoration: 'underline'}}>Registrate</span></a></p>
        </div>
        <div id='Email' className='py-2 flex flex-col'>
            <label for="required-email" className="text-gray-700">
                <span className="text-red-500 required-dot">*</span>Email:
            </label>
            <input type="text" id="required-email" className=" rounded-lg  flex-2 appearance-none border border-gray-300 w-64 py-1 px-1 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="email"/>
        </div>
        <div id='Password' className='py-2 flex flex-col'>
            <label for="required-email" className="text-gray-700">
                <span className="text-red-500 required-dot">*</span>Contraseña:
            </label>
            <input type="password" id="required-password" className=" rounded-lg flex-2 appearance-none border border-gray-300 w-64 py-1 px-1 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" name="password"/>
        </div>
        <div id='OTC' className='py-2'>
            <a href="#"><p style={{textDecoration: 'underline'}}>¿Olvidaste tu contraseña?</p></a>
        </div>
        <div id='boton-IS' className='py-2'>
            <button type="button"className="inicar-sesion py-1 px-2 w-44 text-black w-56 mt-2 rounded-md border text-lg">
                Iniciar Sesión
            </button>
        </div>
        <div id='Or' className='py-2'>
            <p>Or</p>
        </div>
        <div id='google' className='py-2'>
            <a href="#"><img src={google} alt="" className='w-9'/></a>
        </div>
        </div>
  )
}

export default Register