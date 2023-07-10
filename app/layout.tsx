import Link from "next/link"
import { ChakraProvider } from "@chakra-ui/react"

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <ChakraProvider>
          <header>
            <h1>
              <Link href="/">Blog</Link>
            </h1>
          </header>
          {children}
          <footer>
            <small>©︎ 2023 example</small>
          </footer>
        </ChakraProvider>
      </body>
    </html>
  )
}
