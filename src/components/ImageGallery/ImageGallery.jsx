import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { nanoid } from 'nanoid'

export const ImageGallery = ({gallery}) => {
  return <Gallery className="gallery">
    {gallery.map(item => {
      return<li className="gallery-item" key={nanoid()}>
        <ImageGalleryItem image={item} />
      </li>
    })}
  </Gallery>
}
