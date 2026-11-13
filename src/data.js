export const CATEGORIAS = ['Todos', 'Mercearia', 'Padaria', 'Carnes'];

export const PRODUTOS = [
  { id: 1, nome: 'Arroz Branco', descricao: 'Tipo 1 - 1kg', preco: 5.89, emoji: '🍚', categoria: 'Mercearia' },
  { id: 2, nome: 'Feijão Carioca', descricao: 'Tipo 1 - 1kg', preco: 7.49, emoji: '🫘', categoria: 'Mercearia', oferta: true },
  { id: 3, nome: 'Óleo de Soja', descricao: 'Refinado - 900ml', preco: 6.2, emoji: '🛢️', categoria: 'Mercearia' },
  { id: 4, nome: 'Café Moído', descricao: 'Tradicional - 500g', preco: 14.9, emoji: '☕', categoria: 'Mercearia' },
  { id: 5, nome: 'Leite Integral', descricao: 'UHT - 1L', preco: 4.79, emoji: '🥛', categoria: 'Padaria', oferta: true },
  { id: 6, nome: 'Pão Francês', descricao: '500g', preco: 8.5, emoji: '🥖', categoria: 'Padaria' },
];

export const NOTIFICACOES = [
  { id: 1, tipo: 'Cupom', titulo: 'Cupom de 10% OFF!', mensagem: 'Use o código MERCADO10 nos itens de mercearia.', lida: false },
  { id: 2, tipo: 'Aviso', titulo: 'Itens Frescos Chegaram', mensagem: 'Novos produtos prontos para entrega rápida.', lida: false },
  { id: 3, tipo: 'Pedido', titulo: 'Pedido Entregue', mensagem: 'Seu pedido anterior foi concluído. Bom apetite!', lida: true },
];

// Objeto USUÁRIO: criado no App.js e passado como prop para Cadastro, Perfil e Checkout
export const USUARIO_INICIAL = {
  nome: 'Alan Marcelo',
  email: 'alan@localmarket.com',
  telefone: '(83) 99999-9999',
  endereco: 'Rua das Flores, 120 - Centro',
};
