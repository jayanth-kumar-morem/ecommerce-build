import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';
import CollectionPage from '../collection/collection.component';
import { ButtonsBarContainer } from '../../components/sign-in/sign-in.styles';
import CustomButton from '../../components/custom-button/custom-button.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ProductPage (props) {

  const [productId, setProductId] = useState('');
  const [foundItem, setFoundItem] = useState(null);
  const [state,setState]=useState({
    loading: true,
    lastVisible: null,
    hasMore: true
  });

  useEffect(async () => {

    const { match } = props;
    console.log(match.params)
    const productId = match.params.productId;
    console.log({productId});
    if (productId) {
      await findItemById(productId).then(setFoundItem);
    }
  }, [productId]);



  const findItemById = async (id) => {
    const ondcCatalogRef = firestore.collection('ondcCatalog');
    const querySnapshot = await ondcCatalogRef.get();
    let foundItem = null;

    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      const { items } = documentData;
      const item = items.find((item) => item.id === id);
      if (item) {
        foundItem = { ...item, docId: doc.id };
      }
    });

    return foundItem;
  };

    const { match } = props;
    const { loading, hasMore } = state;
    return (
      <div className='product-page'>
        {JSON.stringify(foundItem)}
      </div>
    );
  }

export default connect(
  null,
  null
)(ProductPage);
