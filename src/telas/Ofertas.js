import Catalogo from './Catalogo';

// Tela de Ofertas: reaproveita o Catalogo, mostrando só os produtos em oferta //
export default function Ofertas(props) {
  return <Catalogo {...props} ofertas />;
}

