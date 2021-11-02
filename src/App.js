import React, {useState} from "react";
import "./App.scss";
import Modal from "./components/Modal/Modal";
import GenericModalLayout from "./components/GenericModalLayout";
import {Separator} from "@teambit/design.ui.separator";
import {IconButton} from "@teambit/design.ui.icon-button";
import {XButton} from "@teambit/evangelist.elements.x-button";

function App() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="App">
            <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
            <Modal
                isShow={showModal}
                backdrop={'rgba(0,0,0,0.7)'}
                onCancel={() => setShowModal(false)}
                shouldCloseOnOverlayClick
                showXButton
            >
                <GenericModalLayout
                    header={(
                        <div style={{backgroundColor: '#fff', width: '350px'}}>
                            <div className={"close-icon"}>
                                <XButton onClick={() => setShowModal(false)} />
                            </div>
                            <h2 className={"header-content"}>who runs the world?</h2>
                            <Separator isPresentational/>
                        </div>
                    )}
                    children={(<div className={"body-content"} style={{backgroundColor: '#fff'}}>Your content goes here...</div>)}
                    footer={(
                        <div className={'footer-content'} style={{backgroundColor: '#fff'}}>
                            <Separator isPresentational />
                            <IconButton
                                priority={'cta'}
                                active={"true"}
                                onClick={()=>alert('Hello!')}
                            >
                                Confirm
                            </IconButton>
                        </div>
                    )}
                />
            </Modal>
        </div>
    );
}

export default App;