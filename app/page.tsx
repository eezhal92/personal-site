import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
          >
            @eezhal92{' '} -- WIP 🚧
          </Link>
        </div>

        <div>
          <ul className="flex">
            <li className="px-2"><Link className="py-1 border-b border-dashed border-blue-400" href="/experience">my experiences</Link></li>
            <li className="px-2"><Link className="py-1 border-b border-dashed border-blue-400" href="/blog">blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="relative  before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h2 className="text-6xl font-bold mb-4">Hi, I&apos;m Rijal</h2>
        <p className="text-2xl font-semibold">Web Frontend Software Engineer</p>
        <br />
        <div className="text-lg">
          <p className="mb-2">I love building web application end-to-end, so I have knowledge and experience on backend development as well.</p>
          <p className="mb-2">I consider myself a user- and product-centric guy.  I have attempted to build numerous of my own products, but unfortunately, they all failed. 😬</p>
          <p className="mb-2">PS: Apart from coding, I am enthusiastic about farming and other eco-friendly/sustainable activities.</p>
          <p>PSPS: If you love basketball, Let&apos;s hoop together 🏀</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>
          <h3 className="text-2xl mb-4">Social</h3>
          <ul>
            <li className="mb-2"><a href="https://github.com/eezhal92" target="_blank" rel="noopener">Github</a></li>
            <li><a href="https://www.linkedin.com/in/muhammad-rizki-rijal-0a711575/" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
