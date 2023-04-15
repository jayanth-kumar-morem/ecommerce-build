import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { TitleContainer } from '../../components/collection-preview/collection-preview.styles';
import { LogoContainer } from '../../components/header/header.styles';
import { firestore } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const fetchDataFromFirestoreSpecificToBusiness = async (businessId) => {
  const ondcCatalogRef = firestore.collection('ondcCatalog');
  const query = ondcCatalogRef.where('business_id', '==', businessId);
  const snapshot = await query.get();
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  console.log({data});
  return data;
};

const CollectionPage = ({ match , ...props}) => {
  // const { title, items } = collection;
  const { updateCollections } = props;

  const [collection,SetCollection] = useState([])

  useEffect( async () => {
    const businessId = parseInt(match.params?.businessId, 10);
    if (businessId.toString().length > 0) {
      SetCollection(await fetchDataFromFirestoreSpecificToBusiness(match.params.businessId.toString()));
    }
    return () => {
    }
  }, [])
  
  useEffect(()=>{
    console.log({collection});
  },[collection])

  return (
    <CollectionPageContainer>
    {
    collection?.length ? 

    <TitleContainer>
    {collection?.length ?? collection[0]?.business_data?.name}
    <LogoContainer>
      <img src={collection?.length ?? collection[0]?.business_data?.symbol} className='logo' style={{height: 30 + "px"}} />
    </LogoContainer>
  </TitleContainer>

  : 


  <TitleContainer>
  "Business Not Found"
</TitleContainer>
    }
      {/* <CollectionTitle>{title}</CollectionTitle> */}
      <CollectionItemsContainer>
        {collection?.map(c => (
          c.business_data?.items?.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.businessId)(state)
});

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(CollectionPage);
