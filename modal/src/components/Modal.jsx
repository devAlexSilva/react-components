function Modal({ onClose = () => {}, children }) {
    return (
        <div className="modal">
            <div className="container">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
            </div>
        </div>
    )
}


export default Modal