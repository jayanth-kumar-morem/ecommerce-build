import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import {createStructuredSelector} from "reselect";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions"
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import SpinnerComponent from '../../components/Spinner/Spinner-component';
import CollectionPage from '../collection/collection.component';
import {selectIsFetching,selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors"
const CollectionsOverviewWithSpinner =(
  SpinnerComponent(CollectionsOverview)
)
const CollectionPageWithSpinner =(
  SpinnerComponent(CollectionPage)
)
class ShopPage extends React.Component {
  componentDidMount(){
    const {fetchCollectionsStartAsync} = this.props;
    fetchCollectionsStartAsync();
  }
  render(){
    const {isFetching, isCollectionsLoaded,match } = this.props;
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />} />
    <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
  </div>
)}}
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync : item => dispatch(fetchCollectionsStartAsync(item))
})
const mapStateToProps = createStructuredSelector({
  isFetching : selectIsFetching,
  isCollectionsLoaded : selectIsCollectionsLoaded
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);
