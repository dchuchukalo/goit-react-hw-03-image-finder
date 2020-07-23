import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ imagesArr, onImageClick }) => (
  <ul className={styles.ImageGallery}>
    <ImageGalleryItem imagesArr={imagesArr} onImageClick={onImageClick} />
  </ul>
);

export default ImageGallery;
