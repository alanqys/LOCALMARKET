import { View, Text } from 'react-native';
import { estilos } from '../global';

// Cabeçalho com seta de voltar + título
export default function Cabecalho({ titulo, aoVoltar }) {
  return (
    <View style={estilos.grupo}>
      <Text style={estilos.titulo} onPress={aoVoltar}>←</Text>
      <Text style={estilos.titulo}>{titulo}</Text>
    </View>
  );
}
