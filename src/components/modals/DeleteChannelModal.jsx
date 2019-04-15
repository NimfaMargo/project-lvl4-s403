import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import connect from '../../utils/connect.js';

const mapStateToProps = (state) => {
  const { channels } = state;
  return { channels };
};

@connect(mapStateToProps)

class DeleteChannelModal extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { modalShow: false };
  }

  handleRemoveChannel = () => {
    const { id, deleteChannelRequest } = this.props;
    deleteChannelRequest(id);
    this.setState({ modalShow: false });
  }

  render() {
    const modalClose = () => this.setState({ modalShow: false });
    return (
      <>
        <Button
          type="button btn-sm"
          className=" ml-1 text-dark"
          style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
          aria-label="Delete"
          onClick={() => this.setState({ modalShow: true })}
        >
          <h4>&times;</h4>
        </Button>
        <Modal
           show={this.state.modalShow}
           onHide={modalClose}
         >
           <Modal.Header>
             <Modal.Title id="contained-modal-title-vcenter">
               Delete channel
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <p>Do you want to delete this channel:
                <strong> {this.props.name} </strong>
                ?
             </p>
           </Modal.Body>
           <Modal.Footer>
             <Button className="btn btn-info" onClick={modalClose}>Close</Button>
             <Button className="btn btn-danger" onClick={this.handleRemoveChannel}>OK</Button>
           </Modal.Footer>
         </Modal>
       </>
    );
  }
}
export default DeleteChannelModal;
