import { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { estilos, cores } from '../global';
import { PRODUTOS, CATEGORIAS } from '../data';
import Campo from '../componentes/Campo';
import Botao from '../componentes/Botao';
import CartaoProduto from '../componentes/CartaoProduto';

// Serve para o Catálogo (todos os produtos) e para as Ofertas (prop "ofertas")
export default function Catalogo({ ir, carrinho, adicionar, ofertas }) {
  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('Todos');

  const lista = PRODUTOS.filter((p) =>
    (!ofertas || p.oferta) &&
    (categoria === 'Todos' || p.categoria === categoria) &&
    p.nome.toLowerCase().includes(busca.toLowerCase()));

  const totalItens = carrinho.reduce((soma, i) => soma + i.qtd, 0);

  return (
    <View style={estilos.tela}>
      <View style={estilos.linha}>
        <Text style={[estilos.titulo, estilos.marca]}>LocalMarket</Text>
        <View style={estilos.grupo}>
          <Text style={estilos.titulo} onPress={() => ir('notificacoes')}>🔔</Text>
          <Text style={estilos.titulo} onPress={() => ir('carrinho')}>🛒{totalItens}</Text>
          <Text style={estilos.titulo} onPress={() => ir('perfil')}>👤</Text>
        </View>
      </View>

      <Campo placeholder="Buscar produtos..." value={busca} onChangeText={setBusca} />

      <View style={[estilos.cartao, estilos.cartaoEscuro, estilos.linha]}>
        <View>
          <Text style={estilos.textoBranco}>Itens Essenciais</Text>
          <Text style={estilos.textoClaro}>A despensa do seu lar online</Text>
        </View>
        <Botao titulo={ofertas ? 'Ver todos' : 'Ver ofertas'}
          fundo={ofertas ? cores.vermelho : '#FFF'} corTexto={ofertas ? '#FFF' : cores.primaria}
          aoPressionar={() => ir(ofertas ? 'catalogo' : 'ofertas')} />
      </View>

      <View style={{ height: 50 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {CATEGORIAS.map((c) => (
            <Botao key={c} titulo={c} estilo={estilos.chip} aoPressionar={() => setCategoria(c)}
              fundo={categoria === c ? cores.primaria : '#E4E8EC'} corTexto={categoria === c ? '#FFF' : cores.texto} />
          ))}
        </ScrollView>
      </View>

      <FlatList data={lista} numColumns={2} keyExtractor={(p) => String(p.id)}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => <CartaoProduto produto={item} aoAdicionar={adicionar} />} />
    </View>
  );
}
