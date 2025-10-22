import styles from "./tableStudent.module.css";

const TableStudent = ({
  title = "no mando title",
  estudiantes = [],
  handleClickRow,
  promedio,
}) => {
  // console.log("title", title);
  // console.log("estudiantes", estudiantes);
  // console.log("handleClickRow", handleClickRow);

  if (!Array.isArray(estudiantes)) {
    console.error("no es un array");
    return <p>estudiantes no es un array </p>;
  }

  return (
    <div className={styles.conteiner}>
      <h1>{title}</h1>
      {estudiantes.length === 0 ? (
        <p>no hay estudiantes</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Edad</th>
              <th>Calificaciones</th>
              <th>Promedio</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((student, index) => (
              <tr key={index} onClick={() => handleClickRow(student)}>
                <td>
                  <img src={student.imagen} width="40" height="40" />
                </td>
                <td>{student.nombre}</td>
                <td>{student.edad}</td>
                <td>{student.calificaciones.join()}</td>
                <td>{promedio(student.calificaciones)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableStudent;
