import React, { useState, FormEvent } from 'react';

// 1. Definição da interface (tipos de dados)
interface AppointmentData {
  name: string;
  email: string;
  phone: string;
  service: string;
}

// Cor de Destaque da Playtecno (Roxo/Púrpura Vibrante)
const HIGHLIGHT_COLOR = '#A020F0';
// Cor de Fundo de Card
const CARD_BACKGROUND = '#2b3440';
// Cor do Texto
const TEXT_COLOR = 'white';
// Cor de Fundo de Página
const PAGE_BACKGROUND = 'linear-gradient(135deg, #1f1b2e 0%, #11111f 100%)';


const AppointmentScheduler: React.FC = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    service: 'site',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    } as AppointmentData);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Dados de Agendamento Enviados:', formData);
    setIsSubmitted(true);
  };

  // 3. Renderização de Sucesso
  if (isSubmitted) {
    return (
      <div style={styles.fullPageContainer}>
        <div style={styles.successContainer}>
          <h2 style={{color: HIGHLIGHT_COLOR}}>✅ Agendamento Confirmado!</h2>
          <p style={{color: TEXT_COLOR}}>A Playtecno agradece o seu interesse. Nosso consultor entrará em contato em breve para confirmar a data e hora da reunião.</p>
          <p style={{marginTop: '20px', color: TEXT_COLOR}}>Acesse nossos planos de alta performance: <a href="https://www.playtecno.com.br" style={styles.link}>playtecno.com.br</a></p>
        </div>
      </div>
    );
  }

  // 4. Renderização do Formulário
  return (
    <div style={styles.fullPageContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Consulte Nossos Planos Performance</h1>

        <p style={styles.subtitle}>
          **Agende uma reunião com um de nossos consultores** para entendermos exatamente o que você precisa e podermos fornecer o serviço mais rápido e eficiente para o seu negócio.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>

          {/* Campo Nome */}
          <label htmlFor="name" style={styles.label}>Seu Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {/* Campo E-mail */}
          <label htmlFor="email" style={styles.label}>Seu E-mail Profissional:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {/* Campo Telefone */}
          <label htmlFor="phone" style={styles.label}>Telefone/WhatsApp:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />

          {/* Campo Serviço de Interesse */}
          <label htmlFor="service" style={styles.label}>Qual Plano/Serviço te Interessou?</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            style={styles.select}
          >
            <option value="site">Plano Web (Site, SEO, Performance)</option>
            <option value="suporte">Plano Suporte (Turbo Manutenção)</option>
            <option value="cloud">Cloud Performance</option>
            <option value="seguranca">Cibersegurança Avançada</option>
            <option value="outro">Outro Plano</option>
          </select>

          {/* Botão de Envio */}
          <button type="submit" style={styles.button}>
            Agendar Minha Consultoria Performance
          </button>

        </form>
      </div>
    </div>
  );
};

// 5. Estilos de Design Atualizados (Tema Roxo/Magenta)
const styles: Record<string, React.CSSProperties> = {
  fullPageContainer: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    background: PAGE_BACKGROUND,
  },
  container: {
    maxWidth: '500px',
    width: '100%',
    padding: '40px',
    // Sombra Púrpura para efeito tech
    boxShadow: `0 0 40px ${HIGHLIGHT_COLOR}50`,
    borderRadius: '12px',
    backgroundColor: CARD_BACKGROUND,
    // Borda fina de destaque Púrpura
    border: `1px solid ${HIGHLIGHT_COLOR}`,
    zIndex: 10,
    color: TEXT_COLOR,
  },
  title: {
    textAlign: 'center',
    color: HIGHLIGHT_COLOR,
    marginBottom: '15px',
    fontSize: '2.2em',
    textTransform: 'uppercase',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#a0aec0',
    fontSize: '1.1em',
    lineHeight: 1.5,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    marginTop: '15px',
    fontWeight: '600',
    color: TEXT_COLOR,
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #4a5568',
    fontSize: '16px',
    backgroundColor: '#1f2937',
    color: TEXT_COLOR,
  },
  select: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #4a5568',
    fontSize: '16px',
    backgroundColor: '#1f2937',
    color: TEXT_COLOR,
  },
  button: {
    backgroundColor: HIGHLIGHT_COLOR, // CTA Púrpura vibrante
    color: 'white',
    padding: '15px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '30px',
    fontSize: '1.1em',
    fontWeight: '700',
    letterSpacing: '1px',
    transition: 'background-color 0.3s',
  },
  successContainer: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: CARD_BACKGROUND,
    border: `1px solid ${HIGHLIGHT_COLOR}`,
    borderRadius: '10px',
    color: TEXT_COLOR,
  },
  link: {
      color: HIGHLIGHT_COLOR,
      textDecoration: 'none'
  }
};

export default AppointmentScheduler;
