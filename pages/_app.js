import '../styles/globals.css'

export const config = {
  runtime: 'edge',
}


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
