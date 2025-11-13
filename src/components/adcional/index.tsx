import imobiliaria from '../../assets/imobiliaria.png'
import impulso from '../../assets/impulso.png'

const Ad = () => {

  // URLs fornecidas
  const URL_IMOBILIARIA = 'https://imobiliariaoliveira.vercel.app/';
  const URL_IMPULSO = 'http://impulsojuridicoagencia.com.br/';

  // 1. Estilos Reutilizáveis
  const styles = {
    sectionContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 20px',
      backgroundColor: '#f8f8f8',
    },
    title: {
      fontSize: '2.5em',
      fontWeight: '700',
      color: '#1a1a1a',
      marginBottom: '40px',
      textAlign: 'center',
    },
    cardWrapper: {
      display: 'flex',
      gap: '30px',
      maxWidth: '1200px',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    // Estilo da tag <a> para remover formatação padrão (sublinhado, cor azul)
    link: {
        textDecoration: 'none',
        color: 'inherit',
        flex: 1, // Mantém a capacidade de ocupar espaço igual
        minWidth: '300px',
    },
    card: {
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease-in-out',
      paddingBottom: '20px',
      height: '100%', // Garante que o cartão preencha o link que o envolve
      backgroundColor: 'white',
    },
    imageContainer: {
        height: '250px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #eee',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    content: {
      padding: '25px',
    },
    subtitle: {
      fontSize: '1.8em',
      fontWeight: '600',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1em',
      color: '#555',
      lineHeight: '1.6',
    }
  };

  const getCardStyle = (baseColor) => ({
    ...styles.card,
    borderTop: `5px solid ${baseColor}`,
  });

  // 2. Renderização do Componente
  return (
    <section style={styles.sectionContainer}>
      <h1 style={styles.title}>
        Páginas do **Profissionalismo** à **Pura Criatividade**
      </h1>

      <div style={styles.cardWrapper}>

        {/* --- Cartão 1: Imobiliária (Profissional) --- */}
        {/* A tag <a> envolve todo o cartão */}
        <a
            href={URL_IMOBILIARIA}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
        >
            <div
              style={getCardStyle('#007bff')}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.imageContainer}>
                 <img
                    src={imobiliaria}
                    alt="Template de site Imobiliário e Corporativo (clique para ver)"
                    style={styles.image}
                />
              </div>
              <div style={styles.content}>
                <h2 style={{...styles.subtitle, color: '#007bff'}}>
                    Para o Profissional
                </h2>
                <p style={styles.description}>
                    Da Imobiliária ao Consultório. Páginas robustas, focadas em **credibilidade, conversão e SEO**. Layouts que transmitem confiança e autoridade no seu nicho de atuação.
                </p>
              </div>
            </div>
        </a>

        {/* --- Cartão 2: Impulso (Criativo) --- */}
        {/* A tag <a> envolve todo o cartão */}
        <a
            href={URL_IMPULSO}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
        >
            <div
              style={getCardStyle('#ff416c')}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={styles.imageContainer}>
                 <img
                    src={impulso}
                    alt="Template de site Criativo e Moderno para Agências (clique para ver)"
                    style={styles.image}
                />
              </div>
              <div style={styles.content}>
                <h2 style={{...styles.subtitle, color: '#ff416c'}}>
                    Para o Mais Criativo
                </h2>
                <p style={styles.description}>
                    Projetos que dão **impulso** ao seu portfólio. Designs modernos, animados e ideais para agências, freelancers e marcas que querem quebrar padrões e impressionar.
                </p>
              </div>
            </div>
        </a>

      </div>
    </section>
  );
};

export default Ad;
