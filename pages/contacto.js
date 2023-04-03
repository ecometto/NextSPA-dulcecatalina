import React from 'react'

import Layout from '../components/Layout'

export default function Contact() {
    return (
        <Layout title="contacto">
            <div id="contacto" className=" margin margin-b">
                <div className="row h-100 justify-content-center align-items-center">

                    <h3 className="title">CONTACTO - REDES</h3>

                    <div className="my-2 col-md-6 border rounded-3 p-4 fondo" >
                        <h5 className='text-center'>FORMULARIO DE CONTACTO</h5>
                        <form className="form" action="https://ceddevelopment.000webhostapp.com/enviar1.php" method="post">
                            <div className="form-group mb-3 text-light">
                                <label htmlFor="ayn"> Apellido y Nombre: </label>
                                <input className="form-control" type="text" name="ayn" id="ayn" placeholder="Apellido y nombre" required="" />
                            </div>
                            <div className="form-group mb-3 text-light">
                                <label htmlFor="mail"> Correo Electronico: </label>
                                <input className="form-control" type="text" name="mail" id="mail" placeholder="ingresa tu e-mail" required="" />
                            </div>
                            <div className="form-group mb-3 text-light">
                                <label htmlFor="cometarios">Comentarios</label>
                                <textarea className="form-control" name="comentarios" placeholder="Escriba sus comentarios aqui..." id="comentarios" required=""></textarea>
                            </div>
                            <button type="submit" className="btn btn-block btn-dark"> ENVIAR</button>
                        </form>
                    </div>


                    <div className="contacto col-md-6 text-center">
                        <h3>DULCE CATALINA EN LAS REDES</h3>
                        <ul>
                            <li>
                                <a href="mailto:maguirre@maguirre.com.ar"> <i className="fa fa-envelope-o"></i> Contactanos por e-mail
                                </a>
                            </li>
                            <li>
                                <a target="_blanck" href="https://es-la.facebook.com/">
                                    <i className="fa fa-facebook"></i> Contactanos por facebook
                                </a>
                            </li>
                            <li>
                                <a target="_blanck" href="https://twitter.com/?lang=es">
                                    <i className="fa fa-twitter"></i> Contactanos por Twiter
                                </a>
                            </li>
                            <li>
                                <a target="_blanck" href="https://www.youtube.com/user/Google?hl=es">
                                    <i className="fa fa-youtube"></i> Contactanos por Youtube
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
