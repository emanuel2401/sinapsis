import "./App.css";
import DropFileInput from "./components/DropFileInput";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
function App() {
  const onFileChange = (files) => {
    console.log(files);
  };
  const user = useSelector(selectUser);
  return (
    <div>
      {user ? (
        <div className="box">
          <h2 className="header">React drop files</h2>
          <DropFileInput onFileChange={(files) => onFileChange(files)} />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
