import { useMemo } from 'react';
import { FlatList } from 'react-native';
import { List } from 'react-native-paper';

import { Fab } from '@agiota-plus/components/fab';
import { DebtsQueryKeys } from '@agiota-plus/constants/query-keys/debts';
import { DebtsRoutes } from '@agiota-plus/constants/routes/debts';
import { listAllDebts } from '@agiota-plus/services/debts';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

export function ListDebtsScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const debtsQuery = useQuery({
    queryKey: DebtsQueryKeys.all,
    queryFn() {
      return listAllDebts();
    },
  });

  const onNewDebtHandler = () => {
    navigation.navigate(DebtsRoutes.create);
  };

  const data = useMemo(() => debtsQuery.data, [debtsQuery.data]);

  return (
    <>
      <Fab icon="plus" visible={isFocused} onPress={onNewDebtHandler} />
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <List.Item title={item.name} description={item.amount} />
        )}
      />
    </>
  );
}
