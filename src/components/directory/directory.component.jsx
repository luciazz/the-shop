import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

//need a class component
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        title: 'potters',
        imageUrl: 'https://image.shutterstock.com/z/stock-photo-various-types-of-mini-zebra-plant-echeveria-succulent-house-plants-clay-pots-on-striped-table-1025332855.jpg',
        id: 1,
        linkUrl: 'pots'
      },
      {
        title: 'INDOOR',
        imageUrl: 'https://image.shutterstock.com/z/stock-photo-two-hands-of-the-men-was-carrying-a-bag-of-potting-seedlings-to-be-planted-into-the-soil-548138944.jpg',
        id: 2,
        linkUrl: ''
      },
      {
        title: 'OUTDOOR',
        imageUrl: 'https://image.shutterstock.com/z/stock-photo-outdoor-garden-bench-with-pepper-plants-and-soil-spilling-from-clay-pottery-in-front-of-a-stand-of-1897896376.jpg',
        id: 3,
        linkUrl: ''
      },
      {
        title: 'PET-FRIENDLY',
        imageUrl: 'https://image.shutterstock.com/z/stock-photo-adorable-cat-near-houseplant-on-floor-at-home-1611010756.jpg',
        size: 'large',
        id: 4,
        linkUrl: ''
      },
      {
        title: 'BEST SELLERS',
          imageUrl: 'https://image.shutterstock.com/z/stock-photo-the-stylish-room-filled-with-a-lot-of-modern-plants-in-different-clay-pots-modern-composition-of-1079536967.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        }]
    }
  }

  render() {
    return (
    <div className = 'directory-menu'>
      {
        //pass the section obj into menu-items
        // this.state.sections.map( ({title, imageUrl, id, size, linkUrl}) => (
        //   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        // ))
        this.state.sections.map( ({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
        
      }
    </div>
    );
  }
}

export default Directory;