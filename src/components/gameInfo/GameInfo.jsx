import styles from './GameInfo.module.css'
import Icon from '../icon/Icon'

function GameInfo ({ currentPlayer, winner }) {
    return(
        <div className={styles.gameinfo}>
       {
        winner === 0 &&
         <>
            <h4>Próximo a jogar:</h4>
            {
                currentPlayer === 1 && <Icon iconName="circle" />
            }
            {
                currentPlayer === -1 && <Icon iconName="x" />
            } 
         </>
       } 
        {
         winner !== 0 &&
         <>
           <h4>Fim de jogo! Campeão:</h4>
           {
            winner === 1 && <icon iconName="circle" />
           }
           {
            winner === -1 && <Icon iconName="x" />
           }
         </>   
        }  
         </div>
    )
}

export default GameInfo