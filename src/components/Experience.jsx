
import PropTypes from 'prop-types'

export default function Experience({ experience }) {

    return (
        <div className="container left-container" id="experience">
            <div className="text-box">
                <h2>{experience.puesto}</h2>
                <h4>{experience.empresa} <br />
                    <small>{experience.fecha}</small>
                </h4>
                <p>{experience.descripcion}</p>
            </div>
        </div>

    )
}

Experience.propTypes = {
    experience: PropTypes.shape({
        puesto: PropTypes.string.isRequired,
        empresa: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
    }).isRequired,
}
