import Head from 'next/head'
import Script from 'next/script'

// components 
import Layout from '@/components/Layout'
import Promos from '@/components/promos'
import Productos from '@/components/productos'


export default function Home() {
    return (
        <>
            <Layout title="Home | Dulce Catalina">
                <Promos></Promos>
                <h1 className='text-center m-4'>BIENVENIDO A DULCE CATALINA</h1>
                <p className='text-center m-2'>En &quot;Dulce Catalina&quot; encontrarás toda la variedad de productos de panificación que imaginás.</p>
                <p className='text-center m-2'>También porductos adicionales como Bebidas, Lacteos, Cabón, entre otros</p>
                <Productos></Productos>

            </Layout>
        </>
    )
}
