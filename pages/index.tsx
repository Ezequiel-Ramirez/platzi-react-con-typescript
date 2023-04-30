import Head from 'next/head'
import { NextPage } from 'next'
import { RandomFox } from '@/components/RandomFox'


 const Home:NextPage = () => {
  return (
    <>
      <Head>
        <title>App typescript</title>
        <meta name="description" content="Generated by Next with Typescript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <RandomFox/>
      </main>
    </>
  )
}

export default Home
