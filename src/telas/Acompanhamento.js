import { useState } from 'react';
import { View, Text } from 'react-native';
import { estilos, cores, formatarMoeda } from '../global';
import Cabecalho from '../componentes/Cabecalho';
import Botao from '../componentes/Botao';

const ETAPAS = ['Pagamento aprovado', 'Preparando seu pedido', 'Saiu para entrega', 'Pedido entregue'];

export default function Acompanhamento({ ir, totalPedido }) {
  const [etapa, setEtapa] = useState(1); // Posição atual na lista ETAPAS

  return (
    <View style={estilos.tela}>
      <Cabecalho titulo="Acompanhar Pedido #7913" aoVoltar={() => ir('catalogo')} />

      <View style={[estilos.cartao, estilos.cartaoEscuro]}>
        <Text style={estilos.textoClaro}>Previsão de chegada</Text>
        <Text style={[estilos.textoBranco, { fontSize: 26 }]}>25-40 min</Text>
      </View>

      <View style={estilos.cartao}>
        <Text style={estilos.titulo}>{ETAPAS[etapa]}</Text>
        {ETAPAS.map((nome, i) => ( // Percorre as etapas e destaca o andamento  atual do pedido
          <Text key={nome} style={{ marginVertical: 6, color: i <= etapa ? cores.texto : cores.cinza, fontWeight: i === etapa ? 'bold' : 'normal' }}>
            {i < etapa ? '✔' : i === etapa ? '●' : '○'}  {nome}
          </Text>
        ))}
      </View>

      <Text style={[estilos.negrito, estilos.margemBaixo]}>Total pago: {formatarMoeda(totalPedido)}</Text>       
      {etapa < 3 && <Botao titulo="Avançar etapa (demo)" aoPressionar={() => setEtapa(etapa + 1)} />}
    </View>
  );
}
