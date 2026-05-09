import { useState, useEffect, useRef } from "react";
import "../general.css";
import "../styles/chatbox.css";

function Chatbox() {
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);

	const chatsRef = useRef(null);

	useEffect(() => {
		if (chatsRef.current) {
			chatsRef.current.scrollTop = chatsRef.current.scrollHeight;
		}
	}, [messages]);

	const sendMessage = async () => {
		if (!input.trim()) return;

		const userMessage = {
			role: "user",
			text: input,
		};

		const processMessage = {
			role: "bot processing",
			text: `...`,
		};

		setMessages((prev) => [...prev, userMessage]);
		setMessages((prev) => [...prev, processMessage]);
		const currentMessage = input;
		setInput("");

		try {
			const response = await fetch("http://localhost:8000/chat", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					text: currentMessage,
				}),
			});

			const data = await response.json();

			const botMessage = {
				role: "bot",
				text: data.reply,
			};

			setMessages((prev) => [...prev.slice(0, -1), botMessage]);
		} catch (error) {
			console.error(error);

			setMessages((prev) => [
				...prev.slice(0, -1),
				{
					role: "bot",
					text: "Kelly server offline.",
				},
			]);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendMessage();
		}
	};

	return (
		<section className="chatbox">
			<div className="main-box">
				<div ref={chatsRef} className="chats">
					{messages.map((chat, index) => (
						<div
							key={index}
							className={`chat-message ${chat.role}`}
						>
							{chat.text}
						</div>
					))}
				</div>
				<div className="action">
					<button className="add-files-btn">+</button>
					<textarea
						className="textbox"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Type something..."
					/>
					<button
						className="send-btn font-scribble"
						onClick={sendMessage}
					>
						Send
					</button>
				</div>
			</div>
		</section>
	);
}

export default Chatbox;
