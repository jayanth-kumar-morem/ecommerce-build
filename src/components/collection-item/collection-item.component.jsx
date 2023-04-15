import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-styles.styles';


const CollectionItem = ({ item, addItem }) => {
  const { short_desc, mrp, images } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={images?.length ? images[0] : "" } />
      <CollectionFooterContainer>
        <NameContainer>{short_desc.substring(0, 20)} {short_desc.length >= 20 && '...'}</NameContainer>
        <PriceContainer>{mrp}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
