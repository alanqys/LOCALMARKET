import { useState } from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../global';
import Campo from '../componentes/Campo';
import Botao from '../componentes/Botao';

export default function Cadastro({ ir }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={[estilos.tela, estilos.centro, { justifyContent: 'center' }]}>
      <Text style={[estilos.titulo, estilos.marca, { fontSize: 28 }]}>Local Market</Text>
      <Text style={[estilos.texto, { marginBottom: 20 }]}>Criar sua conta</Text>

      <View style={{ width: '100%' }}>
        <Campo placeholder="Nome" value={nome} onChangeText={setNome} />
        <Campo placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
        <Campo placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
        <Botao titulo="Cadastrar" aoPressionar={() => ir('catalogo')} />
      </View>

      <Text style={[estilos.texto, { marginTop: 20 }]}>
        Já tem uma conta? <Text style={estilos.negrito} onPress={() => ir('catalogo')}>ENTRAR</Text>
      </Text>
    </View>
  );
}
