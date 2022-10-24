import Div100vh from "react-div-100vh";
import LibraryModal from "react-modal";
import React from "react";
import Theme from "theme/default";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
  },
};

// TODO: figure this out
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//Modal.setAppElement('#yourAppElement')

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div>
      <LibraryModal
        isOpen={props.isOpen}
        onAfterOpen={() => {
          document.body.style.overflow = "hidden";
          // TODO: this is bad and horrible (we should not use query selector)
          const layoutNode = document.querySelector(
            ".layout"
          ) as HTMLDivElement;
          if (layoutNode) {
            layoutNode.style.overflow = "hidden";
          }
          props.onAfterOpen?.();
        }}
        onAfterClose={() => {
          document.body.style.overflow = "";
          // TODO: this is bad and horrible (we should not use query selector)
          const layoutNode = document.querySelector(
            ".layout"
          ) as HTMLDivElement;
          if (layoutNode) {
            layoutNode.style.overflow = "";
          }
        }}
        onRequestClose={props.onRequestClose}
        shouldCloseOnOverlayClick={props.shouldCloseOnOverlayClick}
        style={customStyles}
        overlayClassName={
          props.isMinimized ? "minimized-modal-overlay" : "modal-overlay"
        }
      >
        <Div100vh style={{ overflowY: "scroll", height: "100rvh" }}>
          <div className="content">{props.children}</div>
        </Div100vh>
      </LibraryModal>

      <style jsx>{`
        .content {
          margin-top: 3vh;
          margin-bottom: 3vh;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${Theme.MODAL_BACKGROUND_COLOR};
          z-index: 100;
        }
        .minimized-modal-overlay {
          position: fixed;
          top: 60vh;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${Theme.MODAL_BACKGROUND_COLOR};
          z-index: 100;
        }
      `}</style>
    </div>
  );
};

export default Modal;

export interface ModalProps extends LibraryModal.Props {
  isMinimized?: boolean;
}
