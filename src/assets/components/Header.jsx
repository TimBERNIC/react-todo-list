const Header = ({ icon, title, className }) => {
  return (
    <header>
      <div className={className}>
        {icon} {title}
      </div>
    </header>
  );
};

export default Header;
