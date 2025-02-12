import styles from './header.module.css';

export default function Header(){
    return(
        <header className={styles.header}>
            <img src="src\assets\img\React-Symbol.png" alt="" />
            <strong>Currículo eletrônico</strong>

        </header>
    )
}