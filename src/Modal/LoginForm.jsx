import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LoginForm.css";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal className="Modal-container"
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <img src="../assets/Navigation/logo.png" alt="" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <input className="Login_form_input" type="text" placeholder="И-мэйл эсвэл Утасны дугаар" />
        <input className="Login_form_input" type="text" placeholder="Нууц үг" />
      </Modal.Body>
      <Modal.Footer>
        <Button className="Login-form-btn" onClick={props.onHide}>Login</Button>
        <div className="loginform-cross">
         
        </div>
        <Button className="Login-form-btn" onClick={props.onHide}>Бүртгүүлэх</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function LoginForm() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
