import { Meta, Navbar } from ".."

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="pt-px mb-4 md:mb-0">{children}</div>
    </>
  )
}