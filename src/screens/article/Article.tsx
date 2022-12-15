import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {RootStackParamList} from '../../navigator/Root';
import WebView from 'react-native-webview';
import {BookmarkIcon} from '../../icons/Bookmark';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';
import {OverlaySpinner} from '../../components/OverlaySpinner';
import {useBMArticle} from '../../realm/Service';
import {Header} from '../../components/Header';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Article'>;
type RouteProps = RouteProp<RootStackParamList, 'Article'>;

export const Article = () => {
  const {goBack} = useNavigation<NavigationProps>();
  const {
    params: {article},
  } = useRoute<RouteProps>();
  const [isLoading, setIsLoading] = useState(true);
  const {addBookmark, removeBookmark, bookmarkArticle} = useBMArticle();

  const isAlreadyBM = bookmarkArticle.some(v => v.title === article.title);

  const addToBookmark = () => {
    if (isAlreadyBM) {
      removeBookmark(article);
    } else {
      addBookmark(article);
    }
  };

  return (
    <View style={styles.root}>
      <Header
        title={''}
        leftIcon={<ArrowLeftIcon color={Colors.Black} size={24} />}
        onPressLeft={goBack}
        rightIcon={<BookmarkIcon color={Colors.Black} size={24} />}
        onPressRight={addToBookmark}
      />
      <WebView
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        source={{uri: article.articleUrl}}
      />
      {isLoading && (
        <View style={StyleSheet.absoluteFill}>
          <OverlaySpinner />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  topButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  topButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.GreySoft,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  bottomButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.GreySoft,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
