import './Footer.css'

export function Footer() {
    return(
        <>
            <footer className="mt-5 footer">
                    <hr className='m-4'/>  
                    <a href="https://www.linkedin.com/in/manuel-leguizamon-620a01266/" target="_blank" rel="noopener noreferrer" className='m-2'><i className="bi bi-linkedin fs-3 icon-footer"></i></a> 
                    <a href="https://github.com/ManuelLeguizamon" target="_blank" rel="noopener noreferrer" className='m-3'><i className="bi bi-github fs-3 icon-footer"></i></a> 
                    <a href="https://instagram.com/imanu.jo" target="_blank" rel="noopener noreferrer" className='m-2'><i className="bi bi-instagram fs-3 icon-footer"></i></a> 
                    <p className='m-2'> <b> Email: </b> leguimanu00@gmail.com </p>
                    <p className='m-2'> <b> Localidad:</b> Buenos Aires, Argentina  </p>
                    <p >© 2025 Manuel Leguizamón | Todos los derechos reservados</p>
            </footer>
        </>
    )
}

