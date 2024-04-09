import bbc from '../../../../assets/images/bbc.svg'
import getnin from '../../../../assets/images/getninjas-removebg-preview 1.svg'
import dello from '../../../../assets/images/delloit.svg'
import unileven from '../../../../assets/images/unileven.svg'

import { FunctionComponent } from 'react'
import styles from './SocialProof.module.css'

const GetNinjas: FunctionComponent = () => {
  return (
    <div className={styles.socialProof8}>
      <img className={styles.autoLayoutVertical} alt="" src={bbc} />
      <img
        className={styles.getninjasRemovebgPreview1Icon}
        alt=""
        src={getnin}
      />
      <img className={styles.autoLayoutHorizontal} alt="" src={dello} />
      <img className={styles.frameIcon} alt="" src={unileven} />
    </div>
  )
}

export default GetNinjas
