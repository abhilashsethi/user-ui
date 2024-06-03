import { useState } from "react";
import Login from "../shared/Auth/Login";
import Signup from "../shared/Auth/Signup";

const AuthScreen = () => {
	const [activeState, setActiveState] = useState("Login");

	return (
		<div
			className={`w-full fixed ${
				activeState === "Signup" ? "top-20 h-fit" : "top-0 h-screen"
			}  left-0 z-50 flex items-center justify-center bg-[#00000032]`}
		>
			<div className="w-[500px] bg-slate-900 rounded shadow-sm p-3">
				{activeState === "Login" && <Login setActiveState={setActiveState} />}
				{activeState === "Signup" && <Signup setActiveState={setActiveState} />}
			</div>
		</div>
	);
};

export default AuthScreen;
