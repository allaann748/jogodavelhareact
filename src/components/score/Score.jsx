import styles from './Score.module.css'
import Icon from '../icon/Icon'

function Score ({ xWinnerTimes, circleWinnerTimes }) {
    return (
     <>
     <h4>Placar:</h4>
     <div className={styles.score}>
        <div className={styles.scorecontent}>
            <Icon iconName="circle" />
            <h2 className={styles.sco}>={circleWinnerTimes}</h2>
        </div>
        <div className={styles.scorecontent}>
            <Icon iconName="x" />
            <h2 className={styles.sco}>={xWinnerTimes}</h2>
        </div>
     </div>
     </> 
    )
}

export default Score