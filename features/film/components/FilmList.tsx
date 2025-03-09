import { ReactNode, ReactElement } from "react";
import { Text, FlatList, ListRenderItemInfo, View } from "react-native";
import useFilms from "../hooks/useFilms";
import { Film } from "../types";
import Loader from "@/common/components/ui/Loader";
import FilmListItem from "./FilmListItem";

export default function FilmList({ searchTerm }: FilmListProps): ReactNode {
  const { data, status } = useFilms();

  function renderFilmItem({ item }: ListRenderItemInfo<Film>): ReactElement {
    return <FilmListItem {...item} />;
  }

  if (status === "pending") {
    return <Loader size="small" />;
  } else if (status === "error") {
    return (
      <View>
        <Text>Could not load films.</Text>
      </View>
    );
  } else {
    let filteredData = data.filter((film) =>
      film.title.toLowerCase().includes(searchTerm)
    );
    return (
      <FlatList
        data={filteredData}
        renderItem={renderFilmItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

type FilmListProps = {
  searchTerm: string;
};
