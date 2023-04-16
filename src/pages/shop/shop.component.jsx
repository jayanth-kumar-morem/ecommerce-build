import React from 'react';
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

class ShopPage extends React.Component {
  state = {
    loading: true,
    lastVisible: null,
    hasMore: true
  };

  itemsPerPage = 200; // Number of documents to fetch per page

  componentDidMount() {
    // const { match } = this.props;
    // console.log(match.params)
    // const businessId = match.params.businessId;
    // if (!isNaN(businessId) || businessId!=undefined) {
      this.fetchDataFromFirestore();
    // }else{
      // this.fetchDataFromFirestoreSpecificToBusiness(businessId);
    // }

  }



  fetchDataFromFirestore = async () => {
    const { updateCollections } = this.props;
    const { lastVisible } = this.state;
    let ondcCatalogRef = firestore.collection('ondcCatalog').orderBy('business_id').limit(this.itemsPerPage);
    // let ondcCatalogRef = firestore.collection('ondcCatalog').orderBy('business_id');
  
    if (lastVisible) {
      ondcCatalogRef = ondcCatalogRef.startAfter(lastVisible);
    }
  
    const snapshot = await ondcCatalogRef.get();
  
    if (snapshot.empty) {
      console.log(snapshot)
  
      this.setState({ hasMore: false });
      return;
    }
    const data = snapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      .reduce((uniqueData, currentData) => {
        if (!uniqueData.some(data => data.business_id === currentData.business_id)) {
          uniqueData.push(currentData);
        }
        return uniqueData;
      }, []);
  
    console.log({data})
  
    const newLastVisible = snapshot.docs[snapshot.docs.length - 1];
  
    updateCollections(data);
    this.setState({ loading: false, lastVisible: newLastVisible });
  };
  

  loadMore = () => {
    this.setState({ loading: true }, this.fetchDataFromFirestore);
  };

  render() {
    const { match } = this.props;
    const { loading, hasMore } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:businessId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
        {hasMore && (
          <div className="div" style={{display: "flex", justifyContent: "space-evenly"}}>
<CustomButton onClick={this.loadMore} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </CustomButton>
          </div>
          
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
