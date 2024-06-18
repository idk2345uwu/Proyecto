import Perfil from "./Componentes/Perfil";

export default function Home() {
  return (
      <>
      <p>Holap</p>
      <p>Chao</p>
      <Perfil nombre="Juan" apellido="Bodoque" edad={19} rol="Docente"/>
      <Perfil nombre="dkf" apellido="nose" edad={15} rol="Estudiante"/>
      </>
  );
}
