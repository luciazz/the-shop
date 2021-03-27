import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collecton-item.component';

const CollectionPreview = ({title, items}) =>(
  <div className = 'collection-preview'>
    <h1 className = 'title'>{title.toUpperCase()}</h1>
    <div className = 'preview'>
      {items
        //idx < 4, only 4 items will be shown for each collection
        .filter((item, idx) => idx < 4)
        .map(({id, ...itemProps}) =>(
          <CollectionItem key={id} {...itemProps}/>
      ))}
    </div>
  </div>
);

export default CollectionPreview;