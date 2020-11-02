import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)

function MyApp({ Component, pageProps, categories }) {

    return (<Component {...pageProps} categories={categories} />)
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const url = process.env.API_HOST + `category`
    const res = await fetch(url)
    const categories = await res.json()
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, categories };
};

export default MyApp
