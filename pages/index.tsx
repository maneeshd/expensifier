import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Expensifier</title>
        <meta name="description" content="A simple expense manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="w-full flex-grow py-4">
        <h1 id="title" className="text-5xl">
          Expensifier
        </h1>
      </main>

      <Footer />
    </div>
  )
}
