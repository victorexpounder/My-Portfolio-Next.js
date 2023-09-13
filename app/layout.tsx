import Head from 'next/head'
import '../styles/globals.css'
import victor from '../images/victor.jpg'
export const metadata = {
  title: 'Eze Victor | Fullstack Developer',
  description: 'Passionate FullStack Developer with a knack for crafting amazing digital experiences',
  keywords: "Fullstack Engineer, Web developer, frontend developer, Backend developer,Fullstack developer, Best developer, Best web developer in nigeria, html, css, javascript, javascript developer, react developer"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="noF-gSAeZHN1bOs6vXZFVMoRacv0UwZFJwM29S0vGPw" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;500;600&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/22b7007952.js" crossOrigin="anonymous"></script>
      </head>
      <body className='bg-[#191322]'>{children}</body>
    </html>
  )
}
