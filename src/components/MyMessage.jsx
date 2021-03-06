const MyMessage = ({message}) => {
    if(message?.attachments?.length > 0) {
        return(
            <img 
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float:"right",height:"100px",width:"80px"}}
            />
        )
    }
    return(
        <div className="message" style={{float:"right", marginRight:'18px',clr:'white', backgroundColor:'#ff9999'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;