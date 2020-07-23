import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imagesArr, onImageClick }) =>
  imagesArr.map(({ id, webformatURL, largeImageURL, pageURL }) => {
    const imageName = pageURL.replace('https://pixabay.com/photos/', '');

    return (
      <li
        onClick={() => {
          onImageClick(largeImageURL, imageName);
        }}
        className={styles.ImageGalleryItem}
        key={id}
      >
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt={imageName}
        />
      </li>
    );
  });

ImageGalleryItem.propTypes = {
  imagesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      pageURL: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
