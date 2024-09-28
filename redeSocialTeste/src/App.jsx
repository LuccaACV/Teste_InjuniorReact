import { Aside } from "./components/Aside.jsx"
import {Header} from "./components/Header.jsx"
import { Post } from "./components/Post.jsx"
import styles from "./app.module.css"
import "./global.css"


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>   
        <Aside />
        <main>
          <Post />  
        </main>
      </div>
    </div>
  )
}

export default App
