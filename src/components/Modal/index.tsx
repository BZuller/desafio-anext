import modalStyle from './styles.module.scss';

type props = {
  children?: React.ReactElement;
  handleCloseModal: () => void;
  messageTitle?: string;
  footerMessage?: string | React.ReactElement;
  send?: () => void;
};
export default function Modal({
  children,
  handleCloseModal,
  messageTitle,
  footerMessage,
  send,
}: props): React.ReactElement {
  return (
    <div className={modalStyle.darkBG}>
      <div className={modalStyle.modalContainer}>
        <div className={modalStyle.header}>
          <button className={modalStyle.button} onClick={() => handleCloseModal()}>
            x
          </button>
        </div>
        <div className={modalStyle.title}>
          <h1>{messageTitle}</h1>
        </div>
        <div className={modalStyle.body}>
          <p>{children}</p>
        </div>
        <div className={modalStyle.footer}>{footerMessage}</div>
        <span className={modalStyle.buttons}>
          <button className={modalStyle.sendButton} onClick={send}>
            ENVIAR CONVITE
          </button>
          <a onClick={() => handleCloseModal()}>Editar informações</a>
        </span>
      </div>
    </div>
  );
}
