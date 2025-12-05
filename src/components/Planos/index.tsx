import React from 'react';
import { Zap, Activity, Rocket, Check } from 'lucide-react';

// Configuração dos Planos e Links
const PLANOS = {
  start: {
    nome: "Plano Start",
    link: "https://buy.stripe.com/14A8wPcWM9X018zdLSbQY00",
    destaque: false,
    icone: <Zap size={24} className="text-purple-600" />,
    features: [
      "Landing Page",
      "Design responsivo (mobile/desktop)",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "Suporte técnico por e-mail"
    ]
  },
  performance: {
    nome: "Plano Performance",
    link: "https://buy.stripe.com/9B67sLf4UfhkbNd0Z6bQY01",
    destaque: true,
    icone: <Activity size={24} className="text-purple-600" />,
    features: [
      "Site institucional completo (até 6 pgs)",
      "Integração WhatsApp e Google Maps",
      "Otimização SEO inicial",
      "Hospedagem e suporte 24h"
    ]
  },
  turbo: {
    nome: "Plano Turbo",
    link: "https://buy.stripe.com/6oU5kDg8Yglo2cD6jqbQY02",
    destaque: false,
    icone: <Rocket size={24} className="text-purple-600" />,
    features: [
      "Layout exclusivo e personalizado",
      "Loja Virtual / E-commerce",
      "SEO completo e Google Analytics",
      "Suporte técnico prioritário"
    ]
  }
};

const App = () => {
  const handleContratar = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 flex flex-col items-center font-sans text-gray-800">

      {/* Header */}
      <div className="text-center max-w-3xl mb-16">
        <span className="block text-purple-600 font-bold uppercase text-sm tracking-wider mb-3">
          Planos e Preços
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-5">
          Desenvolvimento de Sites Profissionais
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          Escolha o plano ideal para o seu negócio. Todos incluem suporte
          técnico, hospedagem segura e design responsivo.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl items-start">
        {/* Card: Start */}
        <CardPlano
          dados={PLANOS.start}
          onContratar={handleContratar}
        />

        {/* Card: Performance (Destaque) */}
        <CardPlano
          dados={PLANOS.performance}
          onContratar={handleContratar}
        />

        {/* Card: Turbo */}
        <CardPlano
          dados={PLANOS.turbo}
          onContratar={handleContratar}
        />
      </div>
    </div>
  );
};

const CardPlano = ({ dados, onContratar }) => {
  const { nome, link, destaque, icone, features } = dados;

  return (
    <div
      className={`
        relative flex flex-col flex-1 min-w-[300px] max-w-[380px] p-8 rounded-2xl
        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
        ${destaque
          ? 'bg-purple-50 border-2 border-purple-600 shadow-xl shadow-purple-200/50 z-10 lg:scale-105'
          : 'bg-white border border-gray-200 shadow-lg'
        }
      `}
    >
      {destaque && (
        <div className="absolute -top-4 right-5 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-md">
          Mais Popular
        </div>
      )}

      {/* Icon Box */}
      <div className={`
        w-12 h-12 rounded-xl flex items-center justify-center mb-6
        ${destaque ? 'bg-purple-200' : 'bg-purple-100'}
      `}>
        {icone}
      </div>

      <h3 className={`text-2xl font-bold mb-6 ${destaque ? 'text-purple-900' : 'text-gray-900'}`}>
        {nome}
      </h3>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((item, index) => (
          <li key={index} className="flex items-start text-gray-600 text-[15px]">
            <div className="mr-3 mt-0.5 min-w-[20px]">
              <Check
                size={20}
                className={destaque ? "text-purple-600" : "text-green-500"}
              />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onContratar(link)}
        className={`
          w-full py-3.5 rounded-lg font-bold text-base transition-colors duration-200
          ${destaque
            ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-600/30'
            : 'bg-gray-100 text-purple-700 hover:bg-gray-200'
          }
        `}
      >
        Contratar Plano
      </button>
    </div>
  );
};

export default App;
