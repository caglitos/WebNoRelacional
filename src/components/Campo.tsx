import ButtonA from "./ButtonAdd";

function Campo() {
  const handleDelete = () => {
    console.log("Campo eliminado");
    // Aquí iría tu lógica para eliminar el campo si es dinámico
  };

  return (
    <div className="flex">
      <section>
        <input type="text" placeholder="Clave" />

        <div className="input-con-boton">
          <input type="text" placeholder="Valor" />
          <div className="boton">
            <ButtonA onClick={handleDelete} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Campo;
