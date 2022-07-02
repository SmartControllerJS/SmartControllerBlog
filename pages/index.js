import Head from 'next/head'
import Header from '@components/header/Header'
import Footer from '@components/footer/Footer'
import Script from 'next/head'

export default function Home() {
  return (
    <>
    <Script 
    src="https://unpkg.com/smartcontroller@3.2.1/dist/smartcontroller.min.js"
    />
    <Script
      src="/static/qrcode.js"
    />

    <div className="container">
      <Head>
        <title>The dev branch</title>
        <link rel="icon" href="/favicon.ico" />


 
      </Head>

      <main>
        <Header />

        <div id="qrcode">
          <canvas width="159" height="159"></canvas>
        </div>

        <p className="description fade">
          Get started by<code>scanning the QR code</code>
        </p>
      </main>

      <Footer />
    </div>
    </>
  )
}
