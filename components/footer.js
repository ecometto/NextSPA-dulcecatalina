import React from 'react'
import Script from 'next/script'

export default function Footer() {
    return (
        <>
            <div className="fondo mt-4 container-fluid text-end">
                <a className='link-dark fw-bold' target="_blanck" href="https://ar.linkedin.com/in/edgardocometto?challengeId=AQFQsApjdMaQGQAAAXT6VxihpvkdeBZA3Ln72F32eWy2EgOer6fsKheVZqtSnVq7BkPZ4BZPjqFlBrs07t6FykESj7RuMzAetg&amp;submissionId=16f9fa70-e330-3b16-917a-f5575e79e87e">.
                    ©: All right reserved - CEDdevelopment
                </a>
            </div>

            {/* //JavaScript Bundle with Popper */}
            <Script src="https://kit.fontawesome.com/d53a7fc004.js" crossorigin="anonymous" />
            <Script src="https://unpkg.com/scrollreveal" />
            <Script src="app.js" />
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous" />
            {/* <Script src="bootstrap/dist/js/bootstrap.min.js" /> */}
        </>
    )
}
