import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({gallery}) => {
  return <Gallery className="gallery">
    {gallery.map(item => {
      return<li className="gallery-item" key={item.id}>
        <ImageGalleryItem image={item} />
      </li>
    })}
  </Gallery>
}
