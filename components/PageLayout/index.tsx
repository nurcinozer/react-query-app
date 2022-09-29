import { Card, Layout, PageInfo } from "..";

type PageLayoutProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Layout>
      <section className="px-5 py-24">
        <PageInfo title={title} description={description} />
        <div className="flex flex-wrap -m-4">
          {children}
        </div>
      </section>
    </Layout>
  );
}