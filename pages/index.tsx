// pages/index.js
import Head from 'next/head';
import Header from './components/Header';
import Layout from './components/Layout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>React Next.js App</title>
      </Head>
      <Header />
      <Layout>
        {/* Your page content */}
        <h1>Welcome to the Home Page</h1>
      </Layout>
    </div>
  );
};

export default Home;
