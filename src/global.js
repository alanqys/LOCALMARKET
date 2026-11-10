import { StyleSheet } from 'react-native';

// ESTILOS GLOBAIS (o "global.css" do React Native): definidos uma vez, usados em todas as telas

export const cores = { primaria: '#1F5566', fundo: '#F5F6F8', branco: '#FFF', texto: '#1A2B3C',
  cinza: '#8A94A0', vermelho: '#E5484D', verde: '#22C55E' };

export const formatarMoeda = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');

export const estilos = StyleSheet.create({
  // telas e textos
  tela: { flex: 1, backgroundColor: cores.fundo, padding: 20, paddingTop: 50 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: cores.texto, marginBottom: 12 },
  marca: { color: cores.primaria },
  negrito: { fontWeight: 'bold', color: cores.texto },
  texto: { color: cores.cinza, fontSize: 12 },
  textoClaro: { color: '#CFE0E6', fontSize: 12 },
  textoBranco: { color: '#FFF', fontWeight: 'bold' },

  // cartões
  cartao: { backgroundColor: cores.branco, borderRadius: 14, padding: 14, marginBottom: 12 },
  cartaoEscuro: { backgroundColor: cores.primaria },

  // layout
  linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  grupo: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  centro: { alignItems: 'center' },
  flex1: { flex: 1 },
  margemBaixo: { marginBottom: 12 },

  // variações de botão
  botaoMini: { paddingVertical: 6 },
  chip: { paddingVertical: 8, marginRight: 8 },
});
