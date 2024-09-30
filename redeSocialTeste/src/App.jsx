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
          <Post author="Lucca Amaral" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aliquid maxime et molestias delectus ducimus. Doloremque error id esse tempore obcaecati enim soluta, explicabo fugiat tempora placeat illo pariatur ab.
          Nemo facere cupiditate modi natus. Ea praesentium omnis at? Error quibusdam explicabo architecto laboriosam natus voluptatum magni esse iusto asperiores omnis nulla consectetur in quas distinctio quidem, illo odit nobis?
          Ipsa quam saepe placeat ipsam delectus eaque facilis quasi, ex cum necessitatibus vitae ipsum nesciunt rerum esse labore, veniam provident similique! Sed dolorum ipsa ad quis numquam commodi modi maxime?"/> 
        </main>
      </div>
    </div>
  )
}

export default App
