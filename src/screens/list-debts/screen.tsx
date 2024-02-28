import {useQuery} from "@tanstack/react-query";
import {List} from "react-native-paper"
import {listAllDebts} from "@/services/debts";
import {FlatList} from "react-native";
import {useMemo} from "react";
import {Fab} from "@/components/fab";
import {useIsFocused} from "@react-navigation/native";
import {DebtsQueryKeys} from "@/constants/query-keys/debts";

export function ListDebtsScreen() {
  const isFocused = useIsFocused();

  const debtsQuery = useQuery({
    queryKey: DebtsQueryKeys.all,
    queryFn() {
      return listAllDebts();
    }
  });

  const data = useMemo(() => debtsQuery.data, [debtsQuery.data]);

  return (
    <>
      <Fab
        visible={isFocused}
        icon={"plus"}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <List.Item
            title={item.name}
            description={item.amount}
          />
        )}
      />
    </>
  );
}