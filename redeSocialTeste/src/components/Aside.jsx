import styles from './aside.module.css'


export function Aside(){
    return(
        <aside className={ styles.aside}>
            <img src="https://rollingstone.com.br/media/_versions/2024/08/alien-romulus-volta-as-origens-em-trama-que-sustenta-a-tensao-ate-o-fim-leia-a-critica_widelg.jpg" alt="" />
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/63/Ronaldo_Helal_3x4.jpg" alt="" />
                <h1>Romario jr.</h1>
                <h2>Dev Front-End</h2>
            </div>
        </aside>
    )
}