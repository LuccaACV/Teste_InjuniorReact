import styles from './comment.module.css'
import { Trash,ThumbsUp } from 'phosphor-react'

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
                        <button>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <main>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis dolorem, esse vitae possimus delectus sequi sed aliquam numquam, quibusdam, rem fugit alias veritatis mollitia quasi dolor distinctio. Quasi, fuga iste!
                        Non dolorem molestiae ut, qui rerum ipsam voluptas illo corrupti quaerat. Dolorem, eos? Nisi, ullam maxime, quos at amet earum et debitis quisquam exercitationem eaque molestiae repudiandae impedit iure aliquid?
                        Nam voluptas, earum suscipit delectus totam debitis quam repudiandae dolores minima sapiente dolorum aperiam dignissimos? Illo harum aspernatur delectus obcaecati, culpa explicabo non quasi, eaque ab modi sapiente fugiat? Voluptatum?
                    </main>
                </div>
                <div className={styles.likes}>
                    <button>
                        <ThumbsUp size={20}/>  
                        <p>Like <span>7</span></p>  
                    </button>
                </div>
            </div>
        </div>
    )
}