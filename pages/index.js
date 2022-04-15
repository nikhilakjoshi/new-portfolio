import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bluebuck Designs - Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="heroSection">
        <div className="bg-gradient-to-l from-slate-300 via-slate-50">
          <div className="p-16 border-b border-slate-100">
            <h1 className="text-3xl mb-4 font-bold text-slate-800 tracking-wide">
              <span className="text-teal-500">B</span>lue<span className="text-teal-500">B</span>uck
              <span className="text-teal-500">D</span>esigns
            </h1>
            <h2 className="text-2xl font-bold text-slate-400">Tech solutions to your business needs</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
