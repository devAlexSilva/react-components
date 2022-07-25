function Modal({ children }) {
    return (
        <div className="modal">
            <div className="container">
                <button className="close" />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}


export default Modal