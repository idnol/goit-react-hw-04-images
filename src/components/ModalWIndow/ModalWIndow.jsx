import Modal from 'react-modal';
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.8)';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)'
  },
};

Modal.setAppElement('#root');

export const ModalWIndow = ({open, close, image, user}) => {
  return <Modal
    isOpen={open}
    onRequestClose={close}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <img src={image} alt={user} />
  </Modal>
}
