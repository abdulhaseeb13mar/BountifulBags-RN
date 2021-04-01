/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {H_W} from '../BbFrequentUsage/BbResponsive';
import WrapperScreen from '../BbFrequentUsage/BbWrapperScreen';
import {connect} from 'react-redux';
import {colors, textFont} from '../BbFrequentUsage/BbColor';
import NavigationRef from '../BbFrequentUsage/BbRefNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  BbremoveFavAction,
  BbsetFavAction,
  BbaddCartAction,
  BbremoveCartAction,
} from '../BbStateManagement/BbActions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import StarRating from '../starRating';
import {Badge} from 'react-native-elements';

function SingleProduct(props) {
  useEffect(() => {
    checkIfFav();
  }, []);
  const BbProduct = props.BbProduct;
  const [fav, setFav] = useState(false);
  const insets = useSafeAreaInsets();
  const HEIGHT = H_W.height - (insets.bottom + insets.top);

  const checkIfFav = () => {
    for (let Bb = 0; Bb < props.BbFavs.length; Bb++) {
      if (props.BbFavs[Bb].id === BbProduct.id) {
        setFav(true);
        break;
      }
    }
  };

  const toggleFav = () => {
    fav
      ? props.BbremoveFavAction(BbProduct.id)
      : props.BbsetFavAction(BbProduct);
    setFav(!fav);
  };

  const BbAddToCart = () => {
    props.BbaddCartAction({...BbProduct});
  };

  const BbRemoveFromCart = () => {
    props.BbCart[BbProduct.id] !== undefined &&
      props.BbremoveCartAction(BbProduct);
  };

  const renderSmallImages = () => {
    return [BbProduct.images, BbProduct.images, BbProduct.images].map(
      (item, index) => (
        <TouchableOpacity
          onPress={() => setCurrentImage(item)}
          key={index}
          style={{
            backgroundColor: colors.lightBackground2,
            padding: H_W.width * 0.015,
            borderRadius: 13,
            marginHorizontal: H_W.width * 0.03,
          }}>
          <ImageBackground
            source={item}
            style={{
              width: H_W.width * 0.11,
              height: H_W.width * 0.13,
            }}
          />
        </TouchableOpacity>
      ),
    );
  };

  const BbGotoCart = () => NavigationRef.Navigate('BbCart');
  const BbGoBack = () => NavigationRef.GoBack();

  return (
    <WrapperScreen style={{backgroundColor: BbProduct.bgcolor}}>
      <KeyboardAwareScrollView bounces={false}>
        <View
          style={{...border, alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              ...border,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: H_W.width * 0.04,
              marginTop: HEIGHT * 0.03,
            }}>
            <TouchableOpacity onPress={BbGoBack}>
              <AntDesign name="arrowleft" size={23} />
            </TouchableOpacity>
            <TouchableOpacity onPress={BbGotoCart}>
              <MaterialCommunityIcons name="cart-outline" size={23} />
              {props.totalItems > 0 && (
                <Badge
                  value={props.totalItems}
                  containerStyle={{position: 'absolute', bottom: 0, right: 0}}
                  badgeStyle={{
                    backgroundColor: 'red',
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
          <FastImage
            source={BbProduct.image}
            style={{width: H_W.width * 0.8, height: HEIGHT * 0.6, ...border}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingHorizontal: H_W.width * 0.1,
            // paddingBottom: HEIGHT * 0.02,
          }}>
          <TouchableOpacity
            onPress={toggleFav}
            style={{
              backgroundColor: 'white',
              // ...border,
              alignSelf: 'flex-end',
              padding: 10,
              borderRadius: 50,
              elevation: 4,
              marginTop: -HEIGHT * 0.028,
            }}>
            <Ionicons name={fav ? 'ios-heart' : 'heart-outline'} size={20} />
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'flex-start',
              ...border,
              width: H_W.width * 0.65,
              fontWeight: 'bold',
              fontSize: 23,
            }}>
            {BbProduct.product}
          </Text>
          <View
            style={{
              alignSelf: 'flex-start',
              ...border,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', ...border}}>
              <StarRating rating={2.5} size={H_W.width * 0.18} />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.lightBackground2,
                  marginLeft: H_W.width * 0.04,
                }}>
                {BbProduct.rating}
              </Text>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 19}}>
              ${BbProduct.price}
            </Text>
          </View>
          <Text
            style={{
              ...border,
              fontWeight: 'bold',
              lineHeight: HEIGHT * 0.03,
              marginTop: HEIGHT * 0.02,
            }}>
            {BbProduct.dis}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: HEIGHT * 0.01,
            }}>
            <Text
              style={{
                color: colors.lightGrey3,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Quantity
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '35%',
              }}>
              <TouchableOpacity
                onPress={BbRemoveFromCart}
                style={{
                  padding: 6,
                  backgroundColor: colors.lightBackground,
                  borderRadius: 5,
                }}>
                <FontAwesome name="minus" color={colors.darkGray} />
              </TouchableOpacity>
              <View
                style={{
                  padding: 5,
                  backgroundColor: colors.lightBackground,
                  borderRadius: 5,
                }}>
                <Text style={{fontWeight: 'bold', color: colors.darkGray}}>
                  {props.BbCart[BbProduct.id] === undefined
                    ? 0
                    : props.BbCart[BbProduct.id].added}
                </Text>
              </View>
              <TouchableOpacity
                onPress={BbAddToCart}
                style={{
                  padding: 6,
                  backgroundColor: colors.lightBackground,
                  borderRadius: 5,
                }}>
                <FontAwesome name="plus" color={colors.darkGray} />
              </TouchableOpacity>
            </View>
          </View>
          <Button
            onPress={BbAddToCart}
            title="Add To My Cart"
            buttonStyle={{
              backgroundColor: colors.primary,
              borderRadius: 50,
              paddingVertical: HEIGHT * 0.02,
            }}
            icon={
              <MaterialCommunityIcons
                name="cart-outline"
                size={20}
                color="white"
                style={{marginRight: H_W.width * 0.01}}
              />
            }
            containerStyle={{
              width: H_W.width,
              borderRadius: 50,
              marginTop: HEIGHT * 0.02,
            }}
          />
        </View>
      </KeyboardAwareScrollView>
    </WrapperScreen>
  );
}

const mapStateToProps = (state) => {
  return {
    BbProduct: state.BbCrntPrdtReducer,
    BbFavs: state.BbToggleFav,
    totalItems: state.BbCartReducer.totalItems,
    BbCart: state.BbCartReducer.items,
  };
};
const border = {
  // borderWidth: 1,
  borderColor: 'red',
};
export default connect(mapStateToProps, {
  BbsetFavAction,
  BbremoveFavAction,
  BbremoveCartAction,
  BbaddCartAction,
})(React.memo(SingleProduct));

const styles = StyleSheet.create({
  BbSp1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: H_W.width * 0.03,
  },
  BbSp2: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 29,
    paddingHorizontal: H_W.width * 0.03,
    fontFamily: textFont.DINAlternate,
  },
  BbSp3: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: H_W.width * 0.03,
  },
  BbSp4: {
    marginLeft: H_W.width * 0.065,
    color: colors.lightGrey3,
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  BbSp5: {
    paddingHorizontal: H_W.width * 0.03,
    fontSize: 15,
    color: colors.darkGray,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  BbSp6: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: H_W.width * 0.03,
  },
  BbSp7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: `rgba(${colors.rgb_Primary}, 0.2)`,
    alignSelf: 'stretch',
    width: H_W.width * 0.4,
    borderRadius: 50,
    paddingHorizontal: H_W.width * 0.04,
  },
  BbSp8: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    padding: 2,
    backgroundColor: colors.primary,
  },
  BbSp9: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  BbSp10: {
    alignItems: 'center',
    padding: 2,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  BbSp11: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 50,
    width: H_W.width * 0.4,
    backgroundColor: `rgba(${colors.rgb_Primary}, 0.1)`,
  },
  BbSp12: {
    flex: 1,
    textAlign: 'center',
    fontFamily: textFont.DINAlternate,
    fontSize: 18,
  },
  BbSp13: {
    alignSelf: 'stretch',
    borderRadius: 50,
    width: H_W.width * 0.11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  BbSp14: {},
  BbSp15: {},
  BbSp16: {},
  BbSp17: {},
});
