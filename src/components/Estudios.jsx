import PropTypes from 'prop-types'

export default function Estudios({ estudio }) {

    return (
        <div className="container left-container" id="estudios">
            <div className="text-box">
                <h2>{estudio.puesto}</h2>
                <h4>{estudio.empresa} <br />
                    <small>{estudio.fecha}</small>
                </h4>
            </div>
        </div>
    )
}

Estudios.propTypes = {
    estudio: PropTypes.shape({
        puesto: PropTypes.string.isRequired,
        empresa: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
    }).isRequired,
}
