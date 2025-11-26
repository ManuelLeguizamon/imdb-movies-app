import './Footer.css'

export function Footer() {
    return(
        <>
            <footer className="footer">
                    <hr className='m-4'/>  
                    <a href="https://www.linkedin.com/in/manuel-leguizamon-620a01266/" target="_blank" rel="noopener noreferrer" className='m-2'><i className="bi bi-linkedin fs-3 icon-footer"></i></a> 
                    <a href="https://github.com/ManuelLeguizamon" target="_blank" rel="noopener noreferrer" className='m-3'><i className="bi bi-github fs-3 icon-footer"></i></a> 
                    <a href="#" target="_blank" rel="noopener noreferrer" className='m-3'><i className="bi bi-briefcase fs-3 icon-footer"></i></a> 
                    <p className='m-2'> <b> Email: </b> leguimanu00@gmail.com </p>
                    <p className='m-2'> <b> Localidad:</b> Buenos Aires, Argentina  </p>
                    <p >© 2025 Manuel Leguizamón | Todos los derechos reservados</p>
            </footer>
        </>
    )
}

