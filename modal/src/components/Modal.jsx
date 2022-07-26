import './modal.scss'

function Modal({ onClose = () => {}, children, id = 'modal' }) {
    
    const handleClick = (event) => {
        event.target.id === 'modal' && onClose()
    }
    
    return (
        <div id={id} className="modal" onClick={handleClick}>
            <div className="container-modal">
                <button className="close" onClick={onClose}/>
                <div className="content">{children}</div>
            </div>
        </div>
    )
}


export default Modal