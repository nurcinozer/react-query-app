import type { NextPage } from "next"
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { Card, Input, PageLayout, Select } from "../components"
import { useData } from "../hooks/useData";
import { Entry } from "../lib/sample";
import { titleAscSort, titleDescSort, dateAscSort, dateDescSort } from "../utils/sort";

enum SortOrder {
  TITLE_ASC = "title_asc",
  TITLE_DESC = "title_desc",
  DATE_ASC = "date_asc",
  DATE_DESC = "date_desc",
}

const sortOptions = [
  { label: "Title (A-Z)", value: SortOrder.TITLE_ASC },
  { label: "Title (Z-A)", value: SortOrder.TITLE_DESC },
  { label: "Date (Oldest)", value: SortOrder.DATE_ASC },
  { label: "Date (Newest)", value: SortOrder.DATE_DESC },
];

const InnerPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading, isError } = useData();
  const [sort, setSort] = useState<SortOrder>(SortOrder.TITLE_ASC);
  const [search, setSearch] = useState("");
  const [newData, setNewData] = useState<Entry[]>([]);

  const handleTitle = useMemo(() => {
    if (!slug) return null;

    if (slug.toString() === "movie") {
      return "Movies";
    }
    if (slug.toString() === "series") {
      return "Series";
    }
  }, [slug]);

  const handleDescription = useMemo(() => {
    if (!slug) return null;

    if (slug.toString() === "movie") {
      return "Movie App is a global social network for grass-roots film discovery. Use it as a discovery to find films.";
    }
    if (slug.toString() === "series") {
      return "Movie App is a global social network for grass-roots serie discovery. Use it as a discovery to find series.";
    }
  }, [slug]);

  useEffect(() => {
    if (data && data.entries && data.entries.length > 0 && slug) {
      const filteredData = data.entries.filter((item) =>
        item.programType.toLowerCase() === slug.toString()
      ).sort((a, b) => {
        switch (sort) {
          case SortOrder.TITLE_ASC:
            return titleAscSort(a, b);
          case SortOrder.TITLE_DESC:
            return titleDescSort(a, b);
          case SortOrder.DATE_ASC:
            return dateAscSort(a, b);
          case SortOrder.DATE_DESC:
            return dateDescSort(a, b);
          default:
            return titleAscSort(a, b);
        }
      });
      console.log(filteredData);
      const newData = filteredData.filter((item) => {
        return item.releaseYear >= 2010;
      });
      // console.log("newdata", newData);

      if (search && search.length >= 3) {
        const searchResult = newData.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        });
        // console.log("search", searchResult);
        setNewData(searchResult);
      } else {
        setNewData(newData);
      }
    }
  }, [data, search, slug, sort]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!slug || !handleTitle || !handleDescription) {
    return null;
  }

  console.log(sort);

  return (
    <PageLayout
      title={handleTitle}
      description={handleDescription}
    >
      <div className="flex items-center justify-between w-full">
        <Input
          name="search"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select
          options={sortOptions}
          onChange={
            (e) => setSort(e.target.value as SortOrder)
          }
        />
      </div>
      {newData.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          image={item.images["Poster Art"].url}
          releaseDate={item.releaseYear}
        />
      ))}
    </PageLayout>
  )
}

export default InnerPage