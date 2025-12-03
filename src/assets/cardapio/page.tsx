"use client";
import { useState, useMemo } from "react";
import { Section } from "./styles";
import {
  LayoutGrid,
  List,
  Search,
  ShoppingCart,
  Trash2,
  Minus,
  Plus,
  X,
  MapPin,
  Send,
} from "lucide-react";

// --- TIPAGEM DO CARRINHO ---
type Produto = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  imagem: string;
  ativo: boolean;
};

type ItemCarrinho = Produto & {
  quantidade: number;
};

// Interface para os dados do formulário de entrega
type DadosEntrega = {
  nome: string;
  endereco: string;
  numero: string;
  complemento: string;
};

// ... (Restante das constantes e dados de produtos) ...
const ALL_CATEGORIES = ["Todos", "Lanches", "Pizzas", "Bebidas", "Sobremesas"];

const INITIAL_PRODUCTS: Produto[] = [
  {
    id: "p1",
    nome: "Hambúrguer Clássico",
    descricao: "Pão brioche, carne 180g, queijo cheddar e molho especial.",
    preco: 29.9,
    categoria: "Lanches",
    imagem:
      "https://images.unsplash.com/photo-1571091655789-c43ffc7328bd?q=80&w=400&auto=format&fit=crop",
    ativo: true,
  },
  {
    id: "p2",
    nome: "Pizza Pepperoni Especial",
    descricao: "Massa artesanal, molho de tomate, pepperoni e mussarela de búfala.",
    preco: 55.5,
    categoria: "Pizzas",
    imagem:
      "https://images.unsplash.com/photo-1604382354934-2e9005aa8d25?q=80&w=400&auto=format&fit=crop",
    ativo: true,
  },
  {
    id: "p3",
    nome: "Refrigerante Coca-Cola",
    descricao: "Coca-Cola 350ml bem gelada.",
    preco: 6.5,
    categoria: "Bebidas",
    imagem:
      "https://images.unsplash.com/photo-1521302090492-a9b09f4b3d84?q=80&w=400&auto=format&fit=crop",
    ativo: true,
  },
  {
    id: "p4",
    nome: "Pizza de Frango Catupiry",
    descricao: "Massa fina, frango desfiado, catupiry e azeitonas.",
    preco: 49.9,
    categoria: "Pizzas",
    imagem: "https://images.unsplash.com/photo-1594002636752-09c3a353683f?q=80&w=400&auto=format&fit=crop",
    ativo: true,
  },
  {
    id: "p5",
    nome: "Açaí na Tigela",
    descricao: "Açaí puro com granola e banana.",
    preco: 18.0,
    categoria: "Sobremesas",
    imagem:
      "https://images.unsplash.com/photo-1601007802773-678229b90c79?q=80&w=400&auto=format&fit=crop",
    ativo: true,
  },
  {
    id: "p8",
    nome: "Brownie com Sorvete",
    descricao: "Brownie de chocolate quentinho com uma bola de sorvete de creme.",
    preco: 22.0,
    categoria: "Sobremesas",
    imagem: "https://images.unsplash.com/photo-1582210214695-17a81093126e?q=80&w=400&auto=format&fit=crop",
    ativo: true,
  },
];

export default function Cardapio({ busca }: { busca: string }) {
  // --- ESTADOS ---
  const [modoLista, setModoLista] = useState(false);
  const [produtos] = useState<Produto[]>(INITIAL_PRODUCTS);
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);
  
  // NOVO ESTADO: Formulário de Checkout
  const [checkoutAberto, setCheckoutAberto] = useState(false);
  
  // NOVO ESTADO: Dados da Entrega
  const [dadosEntrega, setDadosEntrega] = useState<DadosEntrega>({
    nome: "",
    endereco: "",
    numero: "",
    complemento: "",
  });

  // --- FUNÇÕES DO CARRINHO (Mantidas) ---

  const adicionarAoCarrinho = (produto: Produto) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.id === produto.id);

      if (itemExistente) {
        return prevCarrinho.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...prevCarrinho, { ...produto, quantidade: 1 }];
      }
    });
  };

  const removerDoCarrinho = (produtoId: string) => {
    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.id === produtoId);

      if (itemExistente && itemExistente.quantidade > 1) {
        return prevCarrinho.map((item) =>
          item.id === produtoId
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        );
      } else {
        return prevCarrinho.filter((item) => item.id !== produtoId);
      }
    });
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  // --- NOVAS FUNÇÕES DE CHECKOUT ---

  const iniciarCheckout = () => {
    setCarrinhoAberto(false); // Fecha o carrinho
    setCheckoutAberto(true); // Abre o formulário de checkout
  };

  const lidarComEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você faria a validação final e enviaria o pedido para o servidor/API
    
    // Simulação de Envio
    console.log("Pedido Enviado!");
    console.log("Itens:", carrinho);
    console.log("Endereço de Entrega:", dadosEntrega);

    // Resetar o estado (Simular conclusão do pedido)
    setCarrinho([]);
    setCheckoutAberto(false);
    setDadosEntrega({
      nome: "",
      endereco: "",
      numero: "",
      complemento: "",
    });

    alert(`Pedido de ${dadosEntrega.nome} enviado para ${dadosEntrega.endereco}, Nº ${dadosEntrega.numero}!`);
  };

  const lidarComMudanca = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDadosEntrega((prevDados) => ({
      ...prevDados,
      [name]: value,
    }));
  };

  // --- CÁLCULOS (Mantidos) ---
  const produtosFiltrados = useMemo(() => {
    // ... (Lógica de filtro) ...
    let filtrados = produtos.filter((produto) => produto.ativo);

    if (categoriaAtiva !== "Todos") {
      filtrados = filtrados.filter(
        (produto) => produto.categoria === categoriaAtiva
      );
    }

    if (busca) {
      const termoBusca = busca.toLowerCase();
      filtrados = filtrados.filter(
        (produto) =>
          produto.nome.toLowerCase().includes(termoBusca) ||
          produto.descricao.toLowerCase().includes(termoBusca)
      );
    }

    return filtrados;
  }, [produtos, busca, categoriaAtiva]);

  const produtosAgrupados = useMemo(() => {
    return ALL_CATEGORIES.slice(1).reduce((acc, categoria) => {
      const produtosDaCategoria = produtosFiltrados.filter(
        (p) => p.categoria === categoria
      );
      if (produtosDaCategoria.length > 0) {
        acc[categoria] = produtosDaCategoria;
      }
      return acc;
    }, {} as Record<string, Produto[]>);
  }, [produtosFiltrados]);

  const categoriasComProdutos = Object.keys(produtosAgrupados);

  const totalCarrinho = useMemo(() => {
    return carrinho.reduce(
      (total, item) => total + item.preco * item.quantidade,
      0
    );
  }, [carrinho]);

  // --- COMPONENTES AUXILIARES ---

  const CheckoutForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-6">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-red-800 flex items-center gap-2">
            <MapPin size={24} /> Detalhes da Entrega
          </h2>
          <button onClick={() => setCheckoutAberto(false)} className="p-2 text-gray-500 hover:text-red-700">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={lidarComEnvio} className="space-y-4">
          
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={dadosEntrega.nome}
              onChange={lidarComMudanca}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Ex: João da Silva"
            />
          </div>

          {/* Endereço */}
          <div>
            <label htmlFor="endereco" className="block text-sm font-medium text-gray-700">
              Endereço (Rua/Avenida)
            </label>
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={dadosEntrega.endereco}
              onChange={lidarComMudanca}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
              placeholder="Ex: Rua das Flores"
            />
          </div>

          <div className="flex gap-4">
            {/* Número */}
            <div className="w-1/3">
              <label htmlFor="numero" className="block text-sm font-medium text-gray-700">
                Número
              </label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={dadosEntrega.numero}
                onChange={lidarComMudanca}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Ex: 100"
              />
            </div>
            
            {/* Complemento */}
            <div className="w-2/3">
              <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">
                Complemento (Apto, Bloco, etc.)
              </label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={dadosEntrega.complemento}
                onChange={lidarComMudanca}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Ex: Apartamento 301, Bloco B"
              />
            </div>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Pedido (Total: R$ {totalCarrinho.toFixed(2)})
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // --- RENDERIZAÇÃO DO COMPONENTE PRINCIPAL ---
  return (
    <Section className="p-4 sm:p-6 bg-red-800 min-h-screen">
      {/* 1. CABEÇALHO E CONTROLES (Mantido) */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* ... (código do cabeçalho) ... */}
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg flex items-center gap-3">
          <span role="img" aria-label="hambúrguer e pizza">
            🍔🍕
          </span>
          Cardápio Digital
        </h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setModoLista(!modoLista)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 font-medium rounded-lg hover:bg-red-100 transition shadow-md"
            title={modoLista ? "Ver em Grade" : "Ver em Lista"}
          >
            {modoLista ? (
              <>
                <LayoutGrid size={20} />
                <span className="hidden sm:inline">Ver em Grade</span>
              </>
            ) : (
              <>
                <List size={20} />
                <span className="hidden sm:inline">Ver em Lista</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 2. FILTRO DE CATEGORIA (Mantido) */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center sm:justify-start">
        {ALL_CATEGORIES.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaAtiva(categoria)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 shadow-lg ${
              categoriaAtiva === categoria
                ? "bg-white text-red-800 ring-2 ring-white"
                : "bg-red-600 text-white hover:bg-red-500"
            }`}
          >
            {categoria}
          </button>
        ))}
        {busca && (
          <div className="flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-yellow-400 text-gray-800 shadow-lg">
            <Search size={16} className="mr-1" />
            Buscando por: "{busca}"
          </div>
        )}
      </div>
      <hr className="border-red-600 mb-8" />

      {/* 3. LISTA DE PRODUTOS (Mantido) */}
      {/* ... (código da listagem de produtos) ... */}
      {categoriasComProdutos.length === 0 ? (
        <p className="text-white text-xl text-center p-10 bg-red-700/50 rounded-lg shadow-inner">
          Nenhum produto encontrado.
        </p>
      ) : (
        categoriasComProdutos.map((categoria) => (
          <div key={categoria} className="mb-10">
            <h2 className="text-3xl font-bold text-white mb-6 pt-4 border-b border-red-500 pb-2">
              {categoria}
            </h2>
            <div
              className={
                modoLista
                  ? "flex flex-col gap-4"
                  : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              }
            >
              {produtosAgrupados[categoria].map((produto) => (
                <div
                  key={produto.id}
                  className={`bg-white border-2 border-red-200 rounded-xl p-4 shadow-xl flex hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                    modoLista ? "flex-row items-center gap-6" : "flex-col"
                  }`}
                >
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={`object-cover rounded-lg shadow-inner ${
                      modoLista ? "w-28 h-28 flex-shrink-0" : "w-full h-48 mb-4"
                    }`}
                  />
                  <div className={`${modoLista ? "flex-1" : "flex-grow"}`}>
                    <h3 className="text-xl font-extrabold text-gray-900 mb-1">
                      {produto.nome}
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      {produto.descricao}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-red-700 text-2xl font-black">
                        R$ {produto.preco.toFixed(2)}
                      </span>
                      <button
                        onClick={() => adicionarAoCarrinho(produto)}
                        className="flex items-center gap-1 px-3 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                      >
                        <Plus size={18} />
                        Adicionar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      {/* 4. BOTÃO FLUTUANTE DO CARRINHO (Mantido) */}
      {carrinho.length > 0 && !checkoutAberto && (
        <button
          onClick={() => setCarrinhoAberto(true)}
          className="fixed bottom-6 right-6 p-4 bg-yellow-400 text-red-800 rounded-full shadow-2xl hover:bg-yellow-300 transition-transform transform hover:scale-105 z-50 flex items-center gap-2 font-bold"
        >
          <ShoppingCart size={24} />
          <span className="text-lg">
            Ver Carrinho ({carrinho.reduce((total, item) => total + item.quantidade, 0)})
          </span>
        </button>
      )}

      {/* 5. VISUALIZAÇÃO DO CARRINHO (DRAWER/MODAL) */}
      {carrinhoAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="bg-white w-full max-w-sm h-full shadow-2xl p-6 flex flex-col">
            {/* Cabeçalho do Carrinho */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h2 className="text-2xl font-bold text-red-800 flex items-center gap-2">
                <ShoppingCart size={24} /> Seu Carrinho
              </h2>
              <button onClick={() => setCarrinhoAberto(false)} className="p-2 text-gray-500 hover:text-red-700">
                <X size={24} />
              </button>
            </div>

            {/* Lista de Itens no Carrinho */}
            <div className="flex-1 overflow-y-auto space-y-4">
              {carrinho.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b last:border-b-0 pb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.imagem}
                      alt={item.nome}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.nome}</h3>
                      <p className="text-sm text-red-600 font-bold">
                        R$ {(item.preco * item.quantidade).toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => removerDoCarrinho(item.id)}
                      className="p-1 bg-gray-200 rounded-full hover:bg-red-300 text-red-800"
                    >
                      {item.quantidade === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                    </button>
                    <span className="mx-2 font-bold">{item.quantidade}</span>
                    <button
                      onClick={() => adicionarAoCarrinho(item)}
                      className="p-1 bg-red-800 text-white rounded-full hover:bg-red-700"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Rodapé do Carrinho (Total e Ações) */}
            <div className="pt-4 border-t mt-4 space-y-3">
              <div className="flex justify-between text-xl font-extrabold text-gray-900">
                <span>Total:</span>
                <span className="text-red-700">R$ {totalCarrinho.toFixed(2)}</span>
              </div>
              
              {/* NOVO: Botão que chama a função para iniciar o checkout */}
              <button 
                onClick={iniciarCheckout}
                className="w-full py-3 bg-red-700 text-white font-bold rounded-lg hover:bg-red-600 transition"
              >
                Finalizar Pedido e Endereço
              </button>
              
              <button
                onClick={limparCarrinho}
                className="w-full py-2 flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-red-600 transition"
              >
                <Trash2 size={16} /> Limpar Carrinho
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. FORMULÁRIO DE CHECKOUT (Entrega) */}
      {checkoutAberto && <CheckoutForm />}
      
    </Section>
  );
}