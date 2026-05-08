import React from 'react'
import "../general.css"
import "../styles/chatbox.css"

function Chatbox()  {
  return (
    <section className="chatbox">
        <div className="main-box">
            <div className="chats"></div>
            <div className='action'>
                <button className='add-files-btn'>+</button>
                <div className='textbox' id="textbox" contentEditable={true} />
                <button className='send-btn font-scribble'>Send</button>
            </div>
        </div>
    </section>
  )
}

export default Chatbox