import Navbar from "../components/Navbar";
import Chatbox from "../components/Chatbox";

function ChatsPage() {
  return (
    <>
      <Navbar hamburger={false} />
      <main>
        <Chatbox />
      </main>
    </>
  );
}

export default ChatsPage;