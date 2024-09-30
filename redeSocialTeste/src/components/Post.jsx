import PropTypes from 'prop-types'
import styles from './post.module.css'
import { Comment } from './Comment'

export function Post(props){
    return(
        <div className={styles.post}>
            <header className={styles.header}>
                <div>
                    <img src="http://static1.squarespace.com/static/5c3e25923e2d0977a884f82c/5c3f4b9e010685e0e261593a/5c3f4e6a010685e0e261b6ea/1547652714741/IMG_1322.jpg?format=original" alt="" />
                    <div>
                        <div>{props.author}</div>
                        <div>Engenheira</div>
                    </div>
                </div>
                <time>Publicado a 1h</time>
            </header>
            <div className={styles.body}>
                <h1>
                    {props.content}
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

Post.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string
}