import PropTypes from "prop-types"; 
import '../hojas-de-estilo/BotonClear.css'

const BotonClear = (props) => (
  <div className='boton-clear' 
    onClick={props.manejarClear}>
    {props.children}
  </div>
);

BotonClear.propTypes = {
  children: PropTypes.node.isRequired,
  manejarClear:PropTypes.func.isRequired,
}

export default BotonClear;