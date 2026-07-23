import React from 'react';
import {
  BottomNavigation,
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ProductList from './Products/Products';
import ProductAdd from './Products/Product_Add';
import ProductSearch from './Products/Product_Search';
import ProductDetail from './Products/Product_Detail';

const renderScene = BottomNavigation.SceneMap({
  productList: ProductList,
  productAdd: ProductAdd,
  productSearch: ProductSearch,
  productDetail: ProductDetail,
});

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'productList',
      title: 'Products',
      focusedIcon: 'format-list-bulleted',
    },
    { key: 'productAdd', title: 'Add', focusedIcon: 'plus-circle' },
    { key: 'productSearch', title: 'Search', focusedIcon: 'magnify' },
    { key: 'productDetail', title: 'Detail', focusedIcon: 'card-text' },
  ]);

  return (
    <SafeAreaProvider>
      <PaperProvider theme={MD3LightTheme}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
}
