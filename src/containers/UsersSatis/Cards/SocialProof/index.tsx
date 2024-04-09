import { FunctionComponent } from 'react'
import styles from './SocialProof.module.css'

const SocialProof: FunctionComponent = () => {
  return (
    <div className={styles.socialProof3}>
      <div className={styles.autoLayoutHorizontal}>
        <div className={styles.autoLayoutVertical}>
          <b className={styles.b}>24+</b>
          <div className={styles.cidadesEmTodo}>Cidades em todo o brasil</div>
        </div>
        <div className={styles.autoLayoutVertical}>
          <b className={styles.b}>{`17M `}</b>
          <div className={styles.cidadesEmTodo}>Clientes satisfeitos</div>
        </div>
        <div className={styles.autoLayoutVertical}>
          <b className={styles.b}>+95%</b>
          <div className={styles.cidadesEmTodo}>Satisfação dos clientes</div>
        </div>
      </div>
    </div>
  )
}

export default SocialProof
