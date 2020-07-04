/* eslint-disable react/prop-types */
import '../styles/main.css'

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
