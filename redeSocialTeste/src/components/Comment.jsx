import styles from './comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://www.spescoladeteatro.org.br/wp-content/uploads/2023/07/3x4-Assistencia-Institucional-256x300.jpg" alt="" />
            <div>
                <div className={styles.content}>
                    <header>
                        <div>
                            <h1>Ronaldinho</h1>
                            <h2>cerca de 2h</h2>
                        </div>
                        <img src="https://cdn.icon-icons.com/icons2/931/PNG/512/delete_remove_bin_icon-icons.com_72400.png" alt="" />
                    </header>
                    <main>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit ducimus facere doloremque sapiente, vitae mollitia ipsum nihil suscipit labore maiores quae ab minima praesentium, quia ut repellat. Voluptatibus, voluptas.
                        Provident iure ipsum voluptate quibusdam esse nemo totam id praesentium quis iusto qui vero, voluptatibus inventore illum earum excepturi aspernatur sit consequuntur eaque, eveniet, vel deleniti nulla. Corrupti, harum eaque?
                        Sint possimus laboriosam perspiciatis corrupti, quis esse voluptate sunt dolores adipisci quibusdam a labore aut, sit dolore mollitia hic ut soluta odit! Magni aperiam, excepturi vitae eligendi qui quo nihil?
                    </main>
                </div>
                <div className={styles.likes}>
                    <img src="" alt="" />
                    <h1>Like * 7</h1>
                </div>
            </div>
        </div>
    )
}