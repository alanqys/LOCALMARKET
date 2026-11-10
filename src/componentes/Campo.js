import { View, Text, TextInput, StyleSheet } from 'react-native';
import { estilos, cores } from '../global';

// Campo de texto com rótulo opcional. Aceita qualquer prop do TextInput (value, placeholder...)
export default function Campo({ rotulo, ...resto }) {
  return (
    <View style={estilos.margemBaixo}>
      {rotulo && <Text style={estilos.texto}>{rotulo}</Text>}
      <TextInput style={local.campo} placeholderTextColor={cores.cinza} {...resto} />
    </View>
  );
}

const local = StyleSheet.create({
  campo: { backgroundColor: '#E9ECEF', borderRadius: 12, padding: 14, marginTop: 4 },
});
