import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

function MyApp({ Component, pageProps, menuData }) {
  return (<Component {...pageProps} menuData={menuData} />)
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const url = publicRuntimeConfig.baseApi + `category`
    const res = await fetch(url)
    const menuData = await res.json()
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, menuData };
};

export default MyApp
