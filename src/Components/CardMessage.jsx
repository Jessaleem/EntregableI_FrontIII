import PropTypes from 'prop-types';

const CardMessage = ({error, success, onGoBack}) => {
  if (error) {
    console.log(error, 'error')
  }
  if (success) {
    console.log(success, 'success')
  }

  return (
    <div style={{minWidth:"350px", minHeight:"150px", border:"solid 1px white", borderRadius:"8px", padding:"1rem"}} >
    {error && (
      <div >
        <h2> A ocurrido un error</h2>
        <p> Por favor valida todos tus datos!</p>
        <button onClick={onGoBack}>Volver</button>
      </div>
    )}
    {
      success && (
        <div>
          <h2>Formulario enviado con éxito</h2>
          <p>Gracias por registrarte, pronto recibirás un correo con los pasos a seguir en tu registro!</p>
          <button onClick={onGoBack}>Volver</button>
        </div>
      )
    }
    </div>
    
  )
}

CardMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  success: PropTypes.bool,
  onGoBack: PropTypes.bool
};

export default CardMessage