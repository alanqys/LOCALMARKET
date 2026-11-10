import { useState } from 'react';
import { View, Text } from 'react-native';
import { estilos, cores } from '../global';
import { NOTIFICACOES } from '../data';
import Cabecalho from '../componentes/Cabecalho';

export default function Notificacoes({ ir }) {
  const [lista, setLista] = useState(NOTIFICACOES);

  const novas = lista.filter((n) => !n.lida).length;
  const marcarLida = (id) => setLista(lista.map((n) => (n.id === id ? { ...n, lida: true } : n)));
  const marcarTodas = () => setLista(lista.map((n) => ({ ...n, lida: true })));

  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={`Notificações (${novas} novas)`} aoVoltar={() => ir('catalogo')} />
      <Text style={[estilos.negrito, estilos.margemBaixo]} onPress={marcarTodas}>Marcar todas como lidas</Text>

      {lista.map((n) => (
        <View key={n.id} onTouchEnd={() => marcarLida(n.id)}
          style={[estilos.cartao, { borderWidth: 1, borderColor: n.lida ? '#EEE' : cores.primaria, opacity: n.lida ? 0.6 : 1 }]}>
          <Text style={estilos.texto}>{n.tipo}</Text>
          <Text style={estilos.negrito}>{n.titulo}</Text>
          <Text style={estilos.texto}>{n.mensagem}</Text>
        </View>
      ))}
    </View>
  );
}
