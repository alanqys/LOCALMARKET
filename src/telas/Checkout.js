import { useState } from 'react';
import { View, Text } from 'react-native';
import { estilos, cores, formatarMoeda } from '../global';
import { TAXA_ENTREGA } from './Carrinho';
import Cabecalho from '../componentes/Cabecalho';
import Campo from '../componentes/Campo';
import Botao from '../componentes/Botao';

const FORMAS_PAGAMENTO = ['Pix', 'Cartão', 'Dinheiro'];

export default function Checkout({ ir, subtotal, finalizar }) {
  const [endereco, setEndereco] = useState('Rua das Flores, 120 - Centro');
  const [pagamento, setPagamento] = useState('Pix');
  const total = subtotal + TAXA_ENTREGA;

  return (
    <View style={estilos.tela}>
      <Cabecalho titulo="Confirmar e Pagar" aoVoltar={() => ir('carrinho')} />
      <Campo rotulo="ENDEREÇO DE ENTREGA" value={endereco} onChangeText={setEndereco} />

      <Text style={estilos.texto}>FORMA DE PAGAMENTO</Text>
      <View style={[estilos.grupo, estilos.margemBaixo]}>
        {FORMAS_PAGAMENTO.map((forma) => (
          <Botao key={forma} titulo={forma} estilo={estilos.flex1} aoPressionar={() => setPagamento(forma)}
            fundo={pagamento === forma ? cores.primaria : '#E4E8EC'} corTexto={pagamento === forma ? '#FFF' : cores.texto} />
        ))}
      </View>

      <View style={[estilos.cartao, estilos.linha]}>
        <Text style={estilos.texto}>Tempo estimado: 25 - 40 min{'\n'}Total a pagar:</Text>
        <Text style={[estilos.titulo, estilos.marca]}>{formatarMoeda(total)}</Text>
      </View>

      <Botao titulo="Confirmar Pedido" aoPressionar={() => finalizar(total)} />
    </View>
  );
}
