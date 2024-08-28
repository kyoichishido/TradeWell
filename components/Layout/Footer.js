import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="name-link"
            >
                by J with love
            </a>
            <style jsx>{`
                footer {
                    background-color: #ece1;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer img {
                    margin-left: 0.5rem;
                }

                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 16px;
                    color: white;
                }

                .name-link {
                    padding-left: 5px;
                    text-decoration: none;
                }

                .github-icon {
                    padding: 3px 0 0 8px;
                    font-size: 23px;
                }
            `}</style>
        </footer>
    )
}

export default Footer
