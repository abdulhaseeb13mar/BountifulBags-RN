/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import WrapperScreen from '../BbFrequentUsage/BbWrapperScreen';
import {colors, textFont} from '../BbFrequentUsage/BbColor';
import {H_W} from '../BbFrequentUsage/BbResponsive';
import Data from '../BbData';
import Loop from '../BbFrequentUsage//BbFlatList';
import RefNavigation from '../BbFrequentUsage/BbRefNavigation';
import {connect} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// import FastImage from 'react-native-fast-image';
import {
  DzsetCurrentProductAction,
  DzremoveFavAction,
  DzsetFavAction,
} from '../BbStateManagement/BbActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import DzSearchBar from '../DzComp/DzSearchBar';
// import DzHeader from '../DzComp/DzHeader';
// import UseHeader from '../BbFrequentUsage/BbHeader';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';

function DzHome(props) {
  useEffect(() => {
    // DzchangeTab(Data.category[0]);
  });
  // const insets = useSafeAreaInsets();
  // const HEIGHT = H_W.height - (insets.bottom + insets.top);
  // const [Dzcategories] = useState(Data.category);
  // const [DzcurrentCat, setDzCurrentCat] = useState(Data.category[0]);
  // const [DztabProducts, setDzTabProducts] = useState([]);
  // const [, setFavourites] = useState([]);

  // const DzchangeTab = (tab) => {
  //   setDzCurrentCat(tab);
  //   const filteredProducts = Data.product.filter(
  //     (item) => item.categoryId === tab.id,
  //   );
  //   const filterFavorites = props.DzFavs.filter(
  //     (item) => item.categoryId === tab.id,
  //   );
  //   setDzTabProducts(filteredProducts);
  //   setFavourites(filterFavorites);
  // };

  // // const DzGotoFav = () => RefNavigation.Navigate('DzFav');
  // const DzGotoCart = () => RefNavigation.Navigate('DzCart');
  // const DzGotoSearch = () => RefNavigation.Navigate('DzSearch');
  // const DzGoToSingleProduct = (item) => {
  //   props.DzsetCurrentProductAction(item);
  //   RefNavigation.Navigate('DzSP');
  // };

  return (
    <WrapperScreen style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          marginTop: 80,
        }}>
        <View
          style={{
            position: 'absolute',
            width: 400,
            height: 200,
            borderRadius: 30,
            backgroundColor: 'black',
            zIndex: -1,
            transform: [{perspective: 850}, {rotateY: '40deg'}],
          }}></View>
        {/* <FastImage
          source={dp}
          style={{width: 180, height: 180, zIndex: 5}}
          resizeMode="contain"
        /> */}
      </View>
    </WrapperScreen>
  );
}

export const DzVerticalTile = ({
  item,
  DzGoToSingleProduct,
  DzFavs,
  DzremoveFav,
  DzsetFav,
}) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  return (
    <TouchableOpacity
      onPress={() => DzGoToSingleProduct(item)}
      style={{
        width: H_W.width * 0.42,
        marginHorizontal: H_W.width * 0.04,
        marginVertical: HEIGHT * 0.016,
        alignItems: 'center',
      }}>
      <View
        style={{
          borderRadius: H_W.width * 0.2,
          backgroundColor: `rgba(${colors.rgb_Primary}, 0.1)`,
        }}>
        <FastImage
          source={item.images}
          style={{
            width: H_W.width * 0.37,
            height: HEIGHT * 0.2,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
          }}
          resizeMode="contain"
        />
      </View>

      <Text
        numberOfLines={2}
        style={{
          textAlign: 'center',
          marginTop: HEIGHT * 0.01,
          fontWeight: 'bold',
        }}>
        {item.productName}
      </Text>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.007,
        }}>
        <Text
          style={{
            marginHorizontal: H_W.width * 0.02,
            fontWeight: 'bold',
            color: colors.lightGrey3,
          }}>
          <AntDesign name="star" color="#ffce33" size={H_W.width * 0.037} />
          {item.rating}
        </Text>
        <View
          style={{
            backgroundColor: `rgba(${colors.rgb_Primary}, 0.2)`,
            borderRadius: 50,
            paddingVertical: HEIGHT * 0.002,
          }}>
          <Text
            style={{
              marginHorizontal: H_W.width * 0.02,
              fontWeight: 'bold',
              color: colors.primary,
            }}>
            ${item.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const TabList = ({item, DzchangeTab, DzcurrentCat}) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  return (
    <TouchableOpacity
      style={{
        ...styles.HomeTabsWrapper,
        backgroundColor: `rgba(${colors.rgb_Primary},${
          item.categoryName === DzcurrentCat.categoryName ? 1 : 0.15
        })`,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 4.65,
      }}
      onPress={() => DzchangeTab(item)}>
      <ImageBackground
        source={item.categoryImage}
        style={
          item.categoryName === DzcurrentCat.categoryName
            ? {
                width: H_W.width * 0.16,
                height: H_W.width * 0.16,
              }
            : {width: H_W.width * 0.13, height: H_W.width * 0.13}
        }
        imageStyle={
          item.categoryName === DzcurrentCat.categoryName
            ? {marginLeft: -H_W.width * 0.06, marginTop: -HEIGHT * 0.02}
            : {}
        }
        resizeMode="contain"
      />
      <Text
        style={{
          ...styles.HomeTabsText,
          color:
            item.categoryName === DzcurrentCat.categoryName
              ? 'white'
              : colors.primary,
        }}>
        {item.categoryName}
      </Text>
    </TouchableOpacity>
  );
};

const border = {
  borderWidth: 1,
  borderColor: 'red',
};
const styles = StyleSheet.create({
  DzHome21: {},
  DzHome20: {},
  DzHome19: {},
  DzHome18: {},
  DzHome17: {},
  DzHome16: {},
  DzHome15: {},
  DzHome14: {},
  DzHome13: {},
  DzHome12: {},
  DzHome11: {
    fontSize: 19,
    fontFamily: textFont.DINAlternate,
    color: colors.primary,
  },
  DzHome10: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  DzHome9: {
    marginLeft: H_W.width * 0.045,
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  DzHome8: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  DzHome7: {
    fontSize: 18.5,
    fontFamily: textFont.DINAlternate,
    color: colors.darkGray,
  },
  DzHome6: {
    margin: H_W.width * 0.023,
    width: H_W.width * 0.45,
    padding: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    borderRadius: 8,
  },
  DzHome5: {
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 17.11,
  },
  DzHome4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  DzHome3: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdana-Bold',
    fontStyle: 'italic',
    color: 'white',
  },
  DzHome2: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdana-Bold',
    color: 'white',
  },
  DzHome1: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabIndicator: {
    width: 30,
    borderWidth: 1.8,
    borderRadius: 10,
    marginTop: 4,
    backgroundColor: colors.primary,
  },
  HomeTabsText: {
    marginLeft: H_W.width * 0.05,
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  HomeTabsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginHorizontal: H_W.width * 0.05,
    paddingLeft: H_W.width * 0.02,
    paddingRight: H_W.width * 0.04,
    borderRadius: 50,
  },
});

const mapStateToProps = (state) => {
  return {
    DztotalItems: state.DzCartReducer.totalItems,
    DzFavs: state.DzToggleFav,
  };
};

export default connect(mapStateToProps, {
  DzsetCurrentProductAction,
  DzremoveFavAction,
  DzsetFavAction,
})(DzHome);
