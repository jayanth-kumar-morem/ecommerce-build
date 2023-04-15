import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import { LogoContainer } from '../header/header.styles';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';

const CollectionPreview = ({ history, match, routeName,...props }) => {
  let businessLogoURL = `${props.business_data?.symbol}`
  return(
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${props?.business_id}`)}>
      {props.business_data?.name}
      <LogoContainer to='/'>
        <img src={businessLogoURL} className='logo' style={{height: 30 + "px"}} />
      </LogoContainer>
    </TitleContainer>
    <PreviewContainer>
      {props?.business_data?.items
        ?.filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
)};

export default withRouter(CollectionPreview);
