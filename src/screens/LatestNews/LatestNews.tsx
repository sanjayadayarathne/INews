import React, {useCallback} from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {TabNavigatorParamList} from '../../navigator/Tab';
import {RootStackParamList} from '../../navigator/Root';
import {FlashList} from '@shopify/flash-list';
import {useLatestArticles} from '../../context/Articles';
import {ArticleCard} from '../../components/ArticleCard';
import {SpinnerStyle} from '../../types/appEnums';
import {Spinner} from '../../components/Spinner';
import {Header} from '../../components/Header';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export const LatestNews = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {articles, loading} = useLatestArticles();

  const navigateToArticle = useCallback(
    (article: Article) => {
      navigate('Article', {
        article,
      });
    },
    [navigate],
  );

  return (
    <View style={styles.root}>
      <Header title={'Latest INews'} backgroundColor={'white'} />

      {loading ? (
        <>
          <View style={styles.spinnerContainer}>
            <Spinner size={'small'} renderStyle={SpinnerStyle.Fluid} />
          </View>
        </>
      ) : (
        <FlashList
          scrollEnabled={false}
          data={articles}
          contentContainerStyle={styles.list}
          estimatedItemSize={100}
          renderItem={({item}) => {
            return (
              <ArticleCard
                onPress={() => navigateToArticle(item)}
                article={item}
              />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  spinnerContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  list: {
    paddingTop: 20,
  },
  topContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
    marginLeft: 16,
  },
});
