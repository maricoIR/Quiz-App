const Layout = (props) => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-[15px]">
      {props.children}
    </div>
  );
};

export default Layout;
