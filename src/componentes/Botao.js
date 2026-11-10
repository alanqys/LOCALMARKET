import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { cores } from '../global';

// Botão usado em TODO o app (botão normal, chip de categoria, opção de pagamento...)
export default function Botao({ titulo, aoPressionar, fundo = cores.primaria, corTexto = '#FFF', estilo }) {
  return (
    <TouchableOpacity style={[local.botao, { backgroundColor: fundo }, estilo]} onPress={aoPressionar}>
      <Text style={[local.texto, { color: corTexto }]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const local = StyleSheet.create({
  botao: { padding: 14, borderRadius: 12, alignItems: 'center' },
  texto: { fontWeight: 'bold' },
});
