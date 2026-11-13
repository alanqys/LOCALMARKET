import { useState } from 'react';
import { View, Alert } from 'react-native';
import { estilos, cores } from '../global';
import Cabecalho from '../componentes/Cabecalho';
import Campo from '../componentes/Campo';
import Botao from '../componentes/Botao';

export default function Perfil({ ir, usuario, setUsuario }) {
  const [dados, setDados] = useState(usuario); // cópia editável do usuário recebido

  // atualiza só o campo digitado, mantendo os outros
  const editar = (campo) => (valor) => setDados({ ...dados, [campo]: valor });

  // só ao salvar o objeto usuário do App é atualizado
  const salvar = () => {
    setUsuario(dados);
    Alert.alert('Pronto!', 'Dados atualizados.');
  };

  return (
    <View style={estilos.tela}>
      <Cabecalho titulo="Meu Perfil" aoVoltar={() => ir('catalogo')} />
      <Campo rotulo="NOME COMPLETO" value={dados.nome} onChangeText={editar('nome')} />
      <Campo rotulo="E-MAIL" value={dados.email} onChangeText={editar('email')} autoCapitalize="none" />
      <Campo rotulo="TELEFONE / WHATSAPP" value={dados.telefone} onChangeText={editar('telefone')} />
      <Campo rotulo="ENDEREÇO PRINCIPAL" value={dados.endereco} onChangeText={editar('endereco')} />

      <Botao titulo="Salvar Alterações" aoPressionar={salvar} />
      <Botao titulo="Sair da Conta (Voltar ao Login)" fundo="#FDECEC" corTexto={cores.vermelho}
        estilo={{ marginTop: 10 }} aoPressionar={() => ir('cadastro')} />
    </View>
  );
}
