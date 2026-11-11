import { View, Text } from 'react-native';
import { estilos, formatarMoeda } from '../global';
import Cabecalho from '../componentes/Cabecalho';
import Botao from '../componentes/Botao';
//
export const TAXA_ENTREGA = 5;
//
export default function Carrinho({ ir, carrinho, mudarQtd, subtotal }) {
  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={`Meu Carrinho (${carrinho.length} itens)`} aoVoltar={() => ir('catalogo')} />

      {carrinho.length === 0 && <Text style={estilos.texto}>Seu carrinho está vazio.</Text>}

      {carrinho.map((item) => (
        <View key={item.id} style={[estilos.cartao, estilos.linha]}>
          <Text style={estilos.negrito}>{item.emoji} {item.nome}{'\n'}{formatarMoeda(item.preco)}</Text>
          <View style={estilos.grupo}>
            <Botao titulo="-" estilo={estilos.botaoMini} aoPressionar={() => mudarQtd(item.id, -1)} />
            <Text style={estilos.negrito}>{item.qtd}</Text>
            <Botao titulo="+" estilo={estilos.botaoMini} aoPressionar={() => mudarQtd(item.id, 1)} />
          </View>
        </View>
      ))}

      {carrinho.length > 0 && (
        <View style={estilos.cartao}>
          <View style={estilos.linha}><Text style={estilos.texto}>Subtotal</Text><Text>{formatarMoeda(subtotal)}</Text></View>
          <View style={estilos.linha}><Text style={estilos.texto}>Taxa de Entrega</Text><Text>{formatarMoeda(TAXA_ENTREGA)}</Text></View>
          <View style={[estilos.linha, estilos.margemBaixo]}>
            <Text style={estilos.negrito}>Total</Text>
            <Text style={estilos.negrito}>{formatarMoeda(subtotal + TAXA_ENTREGA)}</Text>
          </View>
          <Botao titulo="Finalizar Pedido" aoPressionar={() => ir('checkout')} />
        </View>
      )}
    </View>
  );
}
