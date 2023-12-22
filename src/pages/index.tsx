import Main from "@/components/Main";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div>
      <Main />
      <ToastContainer  />
    </div>
  );
}
