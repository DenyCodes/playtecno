import React, { useState, useEffect } from 'react';
import {
  Smartphone,
  QrCode,
  Zap,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ChefHat,
  ShoppingBag,
  Star,
  TrendingUp,   // Importação Essencial
  ShieldCheck   // Importação Essencial
} from 'lucide-react';

// Tipos
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

// Componente Cartão de Benefício
const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement, { size: 28 }) : icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// Componente Cartão de Preço
const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, isPopular }) => (
  <div className={`relative p-8 rounded-3xl border flex flex-col h-full transition-all duration-300 ${isPopular ? 'border-blue-600 bg-blue-50/30 ring-4 ring-blue-100' : 'border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg'}`}>
    {isPopular && (
      <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
        <Star size={12} fill="white" /> Mais Popular
      </span>
    )}
    <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
    <div className="flex items-baseline mb-8">
      <span className="text-5xl font-extrabold text-slate-900">R${price}</span>
      <span className="text-slate-500 font-medium ml-2">/mês</span>
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-slate-700">
          <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
          <span className="font-medium text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
      isPopular
        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 hover:shadow-xl'
        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
    }`}>
      Começar Agora <ArrowRight size={18} />
    </button>
  </div>
);

export default function MenuDenLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productUrl = "https://menu-den.vercel.app/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200/60 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform">
                <LayoutDashboard className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Play<span className="text-blue-600">Tecno</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Funcionalidades</a>
              <a href="#beneficios" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Vantagens</a>
              <a href="#precos" className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm">Preços</a>
              <a
                href={productUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition-all hover:shadow-lg flex items-center gap-2 group text-sm"
              >
                Ver Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <button
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full px-4 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-5">
            <a href="#funcionalidades" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <Zap size={18} className="text-blue-600"/> Funcionalidades
            </a>
            <a href="#beneficios" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <CheckCircle2 size={18} className="text-blue-600"/> Vantagens
            </a>
            <a href="#precos" className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-lg flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingBag size={18} className="text-blue-600"/> Preços
            </a>
            <a href={productUrl} target="_blank" rel="noreferrer" className="bg-blue-600 text-white text-center py-3 rounded-xl font-bold mt-2 shadow-lg shadow-blue-200">
              Acessar Sistema
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-60" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8 animate-in slide-in-from-bottom-10 fade-in duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-semibold shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Novo Sistema V 2.0
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Cardápio Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Inteligente
                </span>
              </h1>

              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                O <strong>Menu Den</strong> moderniza seu restaurante. Elimine custos de impressão, atualize preços em tempo real e receba pedidos via QR Code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={productUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Ver Demonstração <ArrowRight className="w-5 h-5" />
                </a>
                <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:border-slate-300">
                  <QrCode className="w-5 h-5 text-slate-500" /> Como Funciona
                </button>
              </div>
            </div>

            {/* Visual Mockup */}
            <div className="relative lg:h-[700px] flex items-center justify-center perspective-1000 animate-in fade-in zoom-in duration-1000">
              <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3.5rem] border-[10px] border-slate-900 shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-10 ring-1 ring-white/20">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-white overflow-y-auto no-scrollbar relative font-sans">
                  <div className="bg-orange-500 h-36 p-6 flex items-end relative rounded-b-3xl shadow-md z-10">
                     <div className="absolute top-12 right-6 bg-white/20 p-2 rounded-full backdrop-blur-md cursor-pointer hover:bg-white/30 transition-colors">
                        <QrCode className="text-white w-5 h-5" />
                     </div>
                     <div>
                       <span className="text-orange-100 text-xs font-medium uppercase tracking-wider">Restaurante</span>
                       <h2 className="text-white font-bold text-2xl leading-tight">Burguer <br/>King's House</h2>
                     </div>
                  </div>
                  <div className="flex gap-3 px-6 py-6 overflow-x-auto no-scrollbar">
                    {['Lanches', 'Bebidas', 'Sobres.', 'Combos'].map((cat, i) => (
                      <span key={cat} className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors cursor-pointer shadow-sm ${i === 0 ? 'bg-orange-500 text-white shadow-orange-200' : 'bg-white text-slate-500 border border-slate-100 hover:bg-orange-50'}`}>
                        {cat}
                      </span>
                    ))}
                  </div>
                  <div className="px-6 pb-24 space-y-5">
                    {[
                      { name: "X-Bacon Supremo", price: "28,90", desc: "Duplo smash, bacon crocante." },
                      { name: "Classic Salad", price: "24,50", desc: "Hambúrguer 180g, salada fresh." },
                      { name: "Batata Rústica", price: "18,00", desc: "Alecrim e páprica defumada." },
                      { name: "Milkshake Oreo", price: "22,00", desc: "Sorvete baunilha e Oreo." },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-slate-50 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                        <div className="w-20 h-20 bg-slate-100 rounded-xl flex-shrink-0 flex items-center justify-center text-slate-300 group-hover:bg-orange-100 group-hover:text-orange-500 transition-colors">
                          <ChefHat size={32} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-800 text-lg leading-tight">{item.name}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1 mt-1">{item.desc}</p>
                          <div className="flex justify-between items-center mt-3">
                             <span className="font-bold text-slate-900">R$ {item.price}</span>
                             <button className="bg-slate-900 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm hover:bg-orange-500 transition-colors">+</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="funcionalidades" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Por que escolher o Menu Den?</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Tecnologia que aumenta seu faturamento</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Deixe o papel no passado. Com a PlayTecno, seu cardápio trabalha para você, vendendo mais e operando sozinho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<QrCode />}
              title="Acesso via QR Code"
              description="Seu cliente aponta a câmera e acessa o cardápio instantaneamente. Sem necessidade de baixar aplicativos pesados."
            />
            <FeatureCard
              icon={<Zap />}
              title="Atualização Instantânea"
              description="Acabou o estoque? O preço mudou? Atualize em segundos pelo painel e reflita na hora para todos os clientes."
            />
            <FeatureCard
              icon={<Smartphone />}
              title="100% Responsivo"
              description="Design perfeito em qualquer dispositivo, seja Android ou iPhone. Navegação fluida e intuitiva."
            />
            <FeatureCard
              icon={<LayoutDashboard />}
              title="Painel Administrativo"
              description="Gerencie categorias, produtos, adicionais e imagens de forma simples e organizada em um só lugar."
            />
            <FeatureCard
              icon={<TrendingUp />}
              title="Aumento de Ticket"
              description="Fotos atraentes e descrições detalhadas incentivam o cliente a pedir mais itens e adicionais."
            />
            <FeatureCard
              icon={<ShieldCheck />}
              title="Alta Estabilidade"
              description="Servidores rápidos e seguros garantem que seu cardápio nunca saia do ar durante o horário de pico."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Planos Transparentes</h2>
            <p className="text-slate-600">Escolha a melhor opção para o tamanho do seu negócio. Sem fidelidade.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Starter"
              price="00"
              features={[
                "Até 30 produtos",
                "QR Code Básico",
                "Link personalizado",
                "Suporte por E-mail"
              ]}
            />
            <PricingCard
              title="Pro"
              price="49"
              isPopular={true}
              features={[
                "Produtos Ilimitados",
                "QR Code Personalizado",
                "Painel de Analytics",
                "Fotos em Alta Resolução",
                "Suporte WhatsApp",
                "Sem anúncios"
              ]}
            />
            <PricingCard
              title="Enterprise"
              price="99"
              features={[
                "Múltiplas Filiais",
                "Gestão de Equipe",
                "API de Integração",
                "Consultoria de Cardápio",
                "Gerente de Conta",
                "Domínio Próprio"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} PlayTecno. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Instagram</a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
