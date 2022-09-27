import { Meta } from "../Meta"

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      {/* <Navbar /> */}
      <div className="mt-16 pt-px mb-4 md:mb-0">{children}</div>
    </>
  )
}