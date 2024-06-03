import styles from "@/src/utils/style";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import NavItems from "../NavItems";
import ProfileDropdown from "../ProfileDropdown";
const Header = () => {
	return (
		<header className="w-full bg-[#0F1524] ">
			<div className="w-[90%] m-auto h-[80px] flex items-center justify-between">
				<h1 className={`${styles.logo}`}>Abhilash</h1>
				<NavItems />
				<ProfileDropdown />
			</div>
		</header>
	);
};

export default Header;
