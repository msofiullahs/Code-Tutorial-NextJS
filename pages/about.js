import styles from '../styles/Home.module.css'
import Header from './layouts/header'
import {Navbar, Nav, NavDropdown, Form, Container} from 'react-bootstrap'

const About = ({posts, menuData}) => {
    return (
    <div className={styles.container}>
      <Header pageName="ABOUT" activePage="/about" categories={menuData} />
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
    </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const url = process.env.API_HOST + `post`
    const res = await fetch(url)
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts,
        },
    }
}
  
export default About