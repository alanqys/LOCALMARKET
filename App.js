import { useState } from 'react';
import { View } from 'react-native';
import Cadastro from './src/telas/Cadastro';
import Catalogo from './src/telas/Catalogo';
import Ofertas from './src/telas/Ofertas';
import Carrinho from './src/telas/Carrinho';
import Checkout from './src/telas/Checkout';
import Perfil from './src/telas/Perfil';
import Notificacoes from './src/telas/Notificacoes';
import Acompanhamento from './src/telas/Acompanhamento';
import { USUARIO_INICIAL } from './src/data';

const TELAS = { cadastro: Cadastro, catalogo: Catalogo, ofertas: Ofertas, carrinho: Carrinho,
  checkout: Checkout, perfil: Perfil, notificacoes: Notificacoes, acompanhamento: Acompanhamento };

export default function App() {
  const [tela, setTela] = useState('cadastro');   // tela atual (navegação simples com state)
  const [usuario, setUsuario] = useState(USUARIO_INICIAL); // objeto usuário (nome, email, telefone, endereco)
  const [carrinho, setCarrinho] = useState([]);   // itens: [{...produto, qtd}]
  const [totalPedido, setTotalPedido] = useState(0); // total do pedido finalizado

  // adiciona produto: se já existe, soma 1; senão cria com qtd 1
  const adicionar = (produto) => setCarrinho((itens) => itens.find((i) => i.id === produto.id)
    ? itens.map((i) => (i.id === produto.id ? { ...i, qtd: i.qtd + 1 } : i))
    : [...itens, { ...produto, qtd: 1 }]);

  // soma ou subtrai quantidade; remove o item quando chega em 0
  const mudarQtd = (id, valor) => setCarrinho((itens) =>
    itens.map((i) => (i.id === id ? { ...i, qtd: i.qtd + valor } : i)).filter((i) => i.qtd > 0));

  const subtotal = carrinho.reduce((soma, i) => soma + i.preco * i.qtd, 0);

  const finalizar = (total) => { setTotalPedido(total); setCarrinho([]); setTela('acompanhamento'); };

  const Tela = TELAS[tela];
  return (
    <View style={{ flex: 1 }}>
      <Tela ir={setTela} usuario={usuario} setUsuario={setUsuario} carrinho={carrinho} adicionar={adicionar} mudarQtd={mudarQtd}
        subtotal={subtotal} totalPedido={totalPedido} finalizar={finalizar} />
    </View>
  );
}
