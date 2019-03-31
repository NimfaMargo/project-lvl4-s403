import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import connect from '../utils/connect.js';

const mapStateToProps = (state) => {
  const { channels } = state;
  return { channels };
};

@connect(mapStateToProps)
@reduxForm({ form: 'newChannelName' })

class RenameChannelModal extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { modalShow: false };
  }

  handleEditChannel = ({ newName }) => {
    const {
      id,
      renameChannel,
      updateChannelRequest,
      reset,
    } = this.props;
    updateChannelRequest(id, newName);
    renameChannel({ id, newName });
    this.setState({ modalShow: false });
    reset();
  }

  render() {
    const { submitting, handleSubmit } = this.props;
    const modalClose = () => this.setState({ modalShow: false });

    return (
      <>
        <Button
          type="button"
          className="close mx-3"
          onClick={() => this.setState({ modalShow: true })}
        >
          <span>&#9998;</span>
        </Button>
        <Modal
           show={this.state.modalShow}
           onHide={modalClose}
           size="sm"
         >
           <Modal.Header>
             <Modal.Title id="contained-modal-title-vcenter">
               Edit Channel Name
             </Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <h5>Enter New Name</h5>
             <Form onSubmit={handleSubmit(this.handleEditChannel)}>
               <div className="input-group m-2">
                 <Field required component='input' className="form-control" disabled={submitting} type="text" name="newName" />
                 <div className="input-group-append">
                   <button className="btn btn-info btn-sm" disabled={submitting} type="submit">Submit</button>
                 </div>
               </div>
             </Form>
           </Modal.Body>
           <Modal.Footer>
             <Button className="btn btn-info" onClick={modalClose}>Close</Button>
           </Modal.Footer>
         </Modal>
       </>
    );
  }
}
export default RenameChannelModal;
