import styles from '../styles/Home.module.css'
import Header from './layouts/header'
import {Container} from 'react-bootstrap'

const About = ({posts, categories}) => {
    return (
    <div className={styles.container}>
        <Header pageName="About" activePage="about" categories={categories} />
      <main className={styles.main}>
        <h1 className={styles.title}>
          ABOUT
        </h1>
        <ul>
        {posts.data.map((post) => (
            <li>{post.post_title}</li>
        ))}
        </ul>
      </main>
      <Footer />
    </div>
    )
}

export async function getStaticProps() {
    const url = process.env.API_HOST + `post`
    const res = await fetch(url)
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}
  
export default About