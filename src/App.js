import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.scss";
import Modal from "./modules/Modal/Modal";

function App() {
    const [showModal,setShowModal] = useState(false);
    return (
        <div className="App">
            <button onClick={()=>setShowModal(!showModal)}>Show Modal</button>
            <Modal
                isShow={showModal}
                title="who runs the world?"
                onConfirm={() => alert('girls')}
                onCancel={()=>setShowModal(false)}
                // shouldCloseOnOverlayClick
                confirmButtonText={'Save'}
            >
                Some body
            </Modal>
        </div>
    );
}

export default App;