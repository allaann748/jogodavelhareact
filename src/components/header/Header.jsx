import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import styles from './Header.module.css'

function Header () {
    return (
      <div className={styles.header}>
        <Title>Jogo da velha</Title>
        <Subtitle>Alan Nunes</Subtitle>
      </div>
    )
}

export default Header