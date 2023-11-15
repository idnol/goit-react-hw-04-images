import { useState } from 'react';
import { ModalWIndow } from '../ModalWIndow/ModalWIndow';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = (props) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => { setOpen(true) };
  const onClose = () => { setOpen(false) };

  const {image: {previewURL, user, webformatURL}} = props;

  return <Item>
    <Image src={previewURL} alt={user} onClick={onOpen}/>
    <ModalWIndow open={open} close={onClose} image={webformatURL} user={user} />
  </Item>

}
