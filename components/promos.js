import React from 'react'

export default function Promos() {
  return (
 

    <div className="margin text-center">
        <div className='row'>
          <h4 className="m-3"><b> PROMOS!!</b></h4>
          <div className='d-flex justify-content-around flex-column flex-md-row'>
              <div className="  mb-4">
                <h4 className="fs-5">Promo 1...</h4>
                <img className="img-fluid" src="./img/promo_cafe.jpg" alt="Criollos x kg $120"  width="250px"/>
              </div>
              <div className=" mb-4">
                <h4 className="fs-5">Promo 2...</h4>
                <img className="img-fluid" src="./img/promo_facturas.jpg" alt="Facturas por Docena $250" width="250px" />
              </div>
              <div className=" mb-4">
                <h4 className="fs-5">Promo 3...</h4>
                <img className="img-fluid" src="./img/promo_cafe.jpg" alt="cafe con leche y medialuna (o 2 criollos) $120" width="250px" />
              </div>
          </div>
        </div>
  </div>
  )
}
