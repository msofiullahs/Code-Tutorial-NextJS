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
                        <Card as="a" href={`/post/` + post.post_slug} bg="transparent" className="border-0 mb-5 mb-md-4 post-link code-tutorial-element">
                            <Row className="align-items-center" noGutters>
                                <Col md={3}>
                                    <Card.Img className="code-tutorial-element mb-3 mb-md-0 list-img" src={post.thumb_url} />
                                </Col>
                                <Col md={9}>
                                    <Card.Body className="py-0 px-0 pl-md-3">
                                        <h4 className="post-title">{post.post_title}</h4>
                                        <p className="mb-0">{post.excerpt}</p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
                <Sidebar about />
            </Row>
        </Container>
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
  
export default Home