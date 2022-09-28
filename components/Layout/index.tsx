import { Meta, Navbar } from ".."

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="container mx-auto text-gray-400 body-font">{children}</div>
    </>
  )
}