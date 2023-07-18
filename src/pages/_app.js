import '@/styles/globals.css'
import Navbar from '@/components/navbar'
import PageContainer from '@/components/pageContainer'

export default function App({ Component, pageProps }) {
  return (
    <div>
    <Navbar/>
    <PageContainer>
        <Component {...pageProps} />
    </PageContainer>
    </div>
  )
}
