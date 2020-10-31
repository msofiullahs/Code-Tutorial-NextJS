import styles from '../styles/Home.module.css'
import Header from './layouts/header'
import Footer from './layouts/footer'
import Sidebar from './layouts/sidebar'
import {Container, Row, Col, Card} from 'react-bootstrap'

const Home = ({posts, categories}) => {
    return (
    <div className={styles.container}>
        <Header pageName="Home" activePage="/" categories={categories} />
        <Container className="content-body">
            <Row>
                <Col xs={12} lg={9}>
                    {posts.data.map((post) => (
                        <Card as="a" href={`/post/` + post.post_slug} bg="transparent" className="border-0 mb-4 h-md-250 post-link code-tutorial-element">
                            <Row className="no-gutters">
                                <Col md={3}>
                                    <Card.Img className="code-tutorial-element" src={post.thumb_url} />
                                </Col>
                                <Col md={9}>
                                    <Card.Body className="py-0">
                                        <h4 className="post-title">{post.post_title}</h4>
                                        <p>{post.plain_content}</p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
                <Sidebar about />
            </Row>
        </Container>
      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          ABOUT
        </h1>
        <ul>
        {posts.data.map((post) => (
            <li>{post.post_title}</li>
        ))}
        </ul>
      </main> */}
        <Footer />
    </div>
    )
}

export async function getStaticProps() {
    const url = process.env.API_HOST + `post`
    const res = await fetch(url)
    const posts = await res.json()
    const pageName = "Home"
    const activePage = "/"

    return {
        props: {
            posts,
            pageName,
            activePage
        },
    }
}
  
export default Home