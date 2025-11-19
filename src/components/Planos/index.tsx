import React from 'react';
import { Zap, Activity, Rocket, Check } from 'lucide-react';

// Configuração dos Planos e Links (Links da Stripe atualizados)
const PLANOS = {
  start: {
    nome: "Plano Start",
    link: "https://buy.stripe.com/14A8wPcWM9X018zdLSbQY00",
    destaque: false,
    icone: <Zap size={24} color="#9333ea" />,
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
    icone: <Activity size={24} color="#9333ea" />,
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
    icone: <Rocket size={24} color="#9333ea" />,
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
    <div className="container">
      {/* Injeção de CSS para garantir que funcione sem configurar Tailwind */}
      <style>{`
        .container {
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #f9fafb;
          min-height: 100vh;
          padding: 60px 20px;
          color: #1f2937;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Header */
        .header {
          text-align: center;
          max-width: 800px;
          margin-bottom: 60px;
        }
        .subtitle {
          color: #9333ea;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
          margin-bottom: 10px;
          display: block;
        }
        .title {
          font-size: 36px;
          font-weight: 800;
          color: #111827;
          margin: 0 0 20px 0;
        }
        .description {
          font-size: 18px;
          color: #6b7280;
          line-height: 1.6;
        }

        /* Grid Layout */
        .cards-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          width: 100%;
          max-width: 1200px;
          align-items: flex-start;
        }

        /* Card Styles */
        .card {
          background: white;
          border-radius: 16px;
          padding: 40px 30px;
          flex: 1;
          min-width: 300px;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          position: relative;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #e5e7eb;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        /* Card Destaque (Performance) */
        .card.destaque {
          border: 2px solid #9333ea;
          background: #faf5ff; /* Tom de roxo muito claro */
          box-shadow: 0 20px 25px -5px rgba(147, 51, 234, 0.15);
          z-index: 10;
        }

        @media (min-width: 1024px) {
          .card.destaque {
            transform: scale(1.05);
          }
          .card.destaque:hover {
            transform: scale(1.05) translateY(-5px);
          }
        }

        .tag-popular {
          position: absolute;
          top: -15px;
          right: 20px;
          background-color: #9333ea;
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Icon Box */
        .icon-box {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }
        .card:not(.destaque) .icon-box { background-color: #f3e8ff; }
        .card.destaque .icon-box { background-color: #e9d5ff; }

        /* Content */
        .plan-name {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 20px 0;
          color: #111827;
        }
        .card.destaque .plan-name { color: #581c87; }

        /* List */
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
          flex-grow: 1;
        }
        .features-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 15px;
          font-size: 15px;
          color: #4b5563;
        }
        .check-icon {
          margin-right: 12px;
          min-width: 20px;
        }

        /* Button */
        .btn-contratar {
          width: 100%;
          padding: 14px;
          border-radius: 8px;
          border: none;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .card:not(.destaque) .btn-contratar {
          background-color: #f3f4f6;
          color: #7e22ce;
        }
        .card:not(.destaque) .btn-contratar:hover {
          background-color: #e5e7eb;
        }

        .card.destaque .btn-contratar {
          background-color: #9333ea;
          color: white;
          box-shadow: 0 4px 6px rgba(147, 51, 234, 0.3);
        }
        .card.destaque .btn-contratar:hover {
          background-color: #7e22ce;
        }

      `}</style>

      <div className="header">
        <span className="subtitle">Planos e Preços</span>
        <h2 className="title">Desenvolvimento de Sites Profissionais</h2>
        <p className="description">
          Escolha o plano ideal para o seu negócio. Todos incluem suporte
          técnico, hospedagem segura e design responsivo.
        </p>
      </div>

      <div className="cards-grid">
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
    <div className={`card ${destaque ? 'destaque' : ''}`}>
      {destaque && <div className="tag-popular">Mais Popular</div>}

      <div className="icon-box">
        {icone}
      </div>

      <h3 className="plan-name">{nome}</h3>

      <ul className="features-list">
        {features.map((item, index) => (
          <li key={index}>
            <div className="check-icon">
              <Check size={20} color={destaque ? "#9333ea" : "#22c55e"} />
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onContratar(link)}
        className="btn-contratar"
      >
        Contratar Plano
      </button>
    </div>
  );
};

export default App;
