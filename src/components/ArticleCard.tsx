import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import dayjs from 'dayjs';

import FastImage from 'react-native-fast-image';
import {Colors} from '../Colors';
import {Styles} from '../Styles';
import ImageLoader from './ImageLoader';
import {Text} from './Text';

const {width} = Dimensions.get('window');
const itemWidth = width - 48;

interface ArticleCardProps {
  article: Article;
  onPress: () => void;
}

export const ArticleCard = ({article, onPress}: ArticleCardProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[Styles.card, styles.container]}>
        <ImageLoader
          style={styles.fillImage}
          source={{
            uri: article.imageUrl,
            priority: FastImage.priority.high,
          }}
        />
        <View style={[styles.detailContainer]}>
          {article.title && (
            <Text size={14} fontFamily={'NWSB'} style={styles.title}>
              {article.title}
            </Text>
          )}
          <View style={styles.bottomContainer}>
            {article.author && (
              <Text fontFamily={'NSB'} size={12}>
                {article.author}
              </Text>
            )}
            {article.publishDate && (
              <Text size={10} fontFamily={'NSB'}>
                {dayjs(article.publishDate).format('ddd, MMM D, YYYY')}
              </Text>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    aspectRatio: 3 / 1,
    padding: 0,
    borderRadius: 20,
    backgroundColor: Colors.White,
    alignSelf: 'center',
    marginBottom: 16,
    flexDirection: 'row',
  },

  fillImage: {
    width: 80,
    flex: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.Black,
  },
  blurContainer: {
    flex: 1,
    backgroundColor: Colors.Black,
    opacity: 0.6,
    borderRadius: 20,
  },
  detailContainer: {
    flex: 1,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
  },
  bottomContainer: {
    justifyContent: 'space-between',
    width: '100%',
  },
});
