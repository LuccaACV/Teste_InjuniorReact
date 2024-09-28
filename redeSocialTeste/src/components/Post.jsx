import styles from './post.module.css'
import { Comment } from './Comment'

export function Post(){
    return(
        <div className={styles.post}>
            <header className={styles.header}>
                <div>
                    <img src="http://static1.squarespace.com/static/5c3e25923e2d0977a884f82c/5c3f4b9e010685e0e261593a/5c3f4e6a010685e0e261b6ea/1547652714741/IMG_1322.jpg?format=original" alt="" />
                    <div>
                        <div>Fernanda</div>
                        <div>Engenheira</div>
                    </div>
                </div>
                <time>Publicado a 1h</time>
            </header>
            <div className={styles.body}>
                <h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit eius rem commodi sit neque velit voluptatibus, magnam provident placeat? Voluptates quae eaque culpa ad dicta veniam voluptatibus doloribus a maxime!
                Eum odio sint ipsa nulla deleniti deserunt aut in facilis harum? Eaque ducimus neque possimus inventore dolorem provident quidem quam, aspernatur dicta deleniti reprehenderit nisi molestias, saepe sed omnis porro.
                Enim, quae distinctio. Enim laboriosam in nulla cum sunt corporis vero, odit dolores, omnis modi veniam natus consectetur iusto praesentium porro culpa eius placeat commodi. Quae id obcaecati aliquid quasi.
                </h1>
            </div>
            <form action='' className={styles.form}>
                <label>Deixe seu feedback</label>
                <textarea placeholder='Escreva um comentário...'></textarea>
                <button>Comentar</button>
            </form>
            <Comment/>
        </div>
    )
}

