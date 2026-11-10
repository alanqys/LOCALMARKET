import { View, Text, StyleSheet } from 'react-native';
import { estilos, cores, formatarMoeda } from '../global';
import Botao from './Botao';

export default function CartaoProduto({ produto, aoAdicionar }) {
  return (
    <View style={[estilos.cartao, local.caixa]}>
      {produto.oferta && <Text style={local.etiqueta}>Oferta</Text>}
      <Text style={local.emoji}>{produto.emoji}</Text>
      <Text style={estilos.negrito}>{produto.nome}</Text>
      <Text style={estilos.texto}>{produto.descricao}</Text>
      <Text style={local.preco}>{formatarMoeda(produto.preco)}</Text>
      <Botao titulo="Adicionar" aoPressionar={() => aoAdicionar(produto)} />
    </View>
  );
}

const local = StyleSheet.create({
  caixa: { width: '48%' },
  emoji: { fontSize: 48, textAlign: 'center' },
  preco: { fontWeight: 'bold', fontSize: 16, marginVertical: 6, color: cores.texto },
  etiqueta: { position: 'absolute', zIndex: 1, backgroundColor: cores.vermelho, color: '#FFF', fontSize: 10, padding: 4, borderRadius: 6, margin: 8 },
});
