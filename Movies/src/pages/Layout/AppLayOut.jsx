import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "./Loader";

export const AppLayOut = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <Loader/>
  return (
    <>
      <Header />
      <Outlet />
      {/* <Loader/> */}
    </>
  );
};
