import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import styles from './Header.module.css'
import Icon from '../icon/Icon'

function Header () {
    return (
      <div className={styles.header}>
        <Title>Jogo da velha</Title>
        <Subtitle>Alan Nunes</Subtitle>
        <div className={styles.iconContent}>
            <Icon iconName="github" link="https://github.com/allaann748"/>
        </div>
      </div>
    )
}

export default Header