/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
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
  BbsetCurrentProductAction,
  BbremoveFavAction,
  BbsetFavAction,
} from '../BbStateManagement/BbActions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import BbSearchBar from '../BbComp/BbSearchBar';
// import BbHeader from '../BbComp/BbHeader';
// import UseHeader from '../BbFrequentUsage/BbHeader';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';

function BbHome(props) {
  useEffect(() => {
    BbchangeTab(Data.Category[0]);
  });
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  const [Bbcategories] = useState(Data.Category);
  const [BbcurrentCat, setBbCurrentCat] = useState(Data.Category[0]);
  const [BbtabProducts, setBbTabProducts] = useState([]);

  const BbchangeTab = (tab) => {
    setBbCurrentCat(tab);
    const filteredProducts = Data.Product.filter(
      (item) => item.categoryid === tab.id,
    );
    setBbTabProducts(filteredProducts);
  };

  // // const BbGotoFav = () => RefNavigation.Navigate('BbFav');
  // const BbGotoCart = () => RefNavigation.Navigate('BbCart');
  // const BbGotoSearch = () => RefNavigation.Navigate('BbSearch');
  // const BbGoToSingleProduct = (item) => {
  //   props.BbsetCurrentProductAction(item);
  //   RefNavigation.Navigate('BbSP');
  // };

  return (
    <WrapperScreen style={{backgroundColor: 'white'}}>
      <ScrollView style={{...border, flex: 1}}>
        <Text>Adasdas</Text>
        <Text>Adasdas</Text>
        <Text>asdas</Text>
        <View style={{...border, flex: 1}}>
          {/* <Loop
            data={Bbcategories}
            renderItems={({item}) => <TabList item={item} />}
          /> */}
        </View>
      </ScrollView>
    </WrapperScreen>
  );
}

export const BbVerticalTile = ({
  item,
  BbGoToSingleProduct,
  BbFavs,
  BbremoveFav,
  BbsetFav,
}) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  return (
    <TouchableOpacity
      onPress={() => BbGoToSingleProduct(item)}
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

export const TabList = ({item, BbchangeTab, BbcurrentCat}) => {
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);
  return (
    <TouchableOpacity>
      <Text style={{color: 'black'}}>{item.category}</Text>
    </TouchableOpacity>
  );
};

const border = {
  borderWidth: 1,
  borderColor: 'red',
};
const styles = StyleSheet.create({
  BbHome21: {},
  BbHome20: {},
  BbHome19: {},
  BbHome18: {},
  BbHome17: {},
  BbHome16: {},
  BbHome15: {},
  BbHome14: {},
  BbHome13: {},
  BbHome12: {},
  BbHome11: {
    fontSize: 19,
    fontFamily: textFont.DINAlternate,
    color: colors.primary,
  },
  BbHome10: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  BbHome9: {
    marginLeft: H_W.width * 0.045,
    color: colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  BbHome8: {display: 'flex', flexDirection: 'row', alignItems: 'center'},
  BbHome7: {
    fontSize: 18.5,
    fontFamily: textFont.DINAlternate,
    color: colors.darkGray,
  },
  BbHome6: {
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
  BbHome5: {
    width: '85%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.2,
    shadowRadius: 17.11,
  },
  BbHome4: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BbHome3: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdana-Bold',
    fontStyle: 'italic',
    color: 'white',
  },
  BbHome2: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Verdana-Bold',
    color: 'white',
  },
  BbHome1: {
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
    // BbtotalItems: state.BbCartReducer.totalItems,
    BbFavs: state.BbToggleFav,
  };
};

export default connect(mapStateToProps, {
  BbsetCurrentProductAction,
  BbremoveFavAction,
  BbsetFavAction,
})(BbHome);
