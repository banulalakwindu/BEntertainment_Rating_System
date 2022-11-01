import Image from "next/dist/client/image";
import { HiUser, HiUsers, HiUserCircle } from "react-icons/hi";
import { GoSignOut } from "react-icons/go";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "../node_modules/@mui/material/index";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="shadow-md sticky top-0 z-50 ">
      <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-gray-900">
        <Link href={"/"}>
          <div className="flex my-4 ml-4">
            <Image src="/favicon.ico" width={40} height={40} layout="fixed" />
            <p className="hidden sm:inline-block pl-4 text-white font-bold text-3xl capitalize transition duration-300 ease-in-out hover:text-red-500 ">
              Entertainment
            </p>
          </div>
        </Link>
        <div className="flex">
          <Button className="h-16 w-28 text-white" href="/">
            Movies
          </Button>
          <Button className="h-16 text-white" href="/tvpage">
            TV-Shows
          </Button>
        </div>
        <div className="flex">
          {!session ? (
            <Button className="mr-4 py-1" href="/login" variant="contained">
              <HiUser className=" h-4 w-4 mb-1 mr-1" />
              Login
            </Button>
          ) : null}

          <Button className="mr-4" href="/admin" variant="contained">
            <HiUsers className=" h-4 w-4 mb-1 mr-1" />
            Admin
          </Button>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <img
              src={
                session
                  ? session.user.image
                  : "https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
              }
              className="h-10 w-10 bg-white mr-5 rounded-full border-2 border-white"
            />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 0.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
          >
            <MenuItem
              onClick={() => {
                session ? router.push("/account") : router.push("/login");
              }}
              className="flex"
            >
              <HiUserCircle className="h-5 w-5 mt-0.5 mr-3" />
              <h1>Profile</h1>
            </MenuItem>
            <MenuItem onClick={() => signOut()}>
              <GoSignOut className="h-5 w-5 mt-0.5 mr-2 ml-1" />
              <h1>Logout</h1>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
