function Form({children}){
  return (
    <form className="mb-4 flex-col justify-center align-start space-y-4 px-4 border">
        <h2 class="flex justify-center"><strong>Inicio de sesion</strong></h2>
        {children}
        
    </form>
  );
}
export default Form;
