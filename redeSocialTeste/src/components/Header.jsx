import styles from './header.module.css'
export function Header(){
    return(
        <div className={styles.header}>
            <div><img src="src/assets/LogoInFeed.svg" alt="Logo da In Feed" /></div>
            <h1>Feed</h1>
        </div>
    )
}