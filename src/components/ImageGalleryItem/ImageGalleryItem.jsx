import { Component } from 'react';
import { ModalWIndow } from '../ModalWIndow/ModalWIndow';
import { Image, Item } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    open: false
  }
  onOpen = () => {
    this.setState({
      open: true
    })
  }

  onClose = () => {
    this.setState({
      open: false
    })
  }
  render() {
    const {image: {previewURL, user, webformatURL}} = this.props;
    return <Item>
      <Image src={previewURL} alt={user} onClick={this.onOpen}/>
      <ModalWIndow open={this.state.open} close={this.onClose} image={webformatURL} user={user} />
    </Item>
  }
}
