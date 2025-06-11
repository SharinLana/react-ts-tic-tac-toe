interface HeaderInterface {
  className: string;
  title: string;
}
const Header = ({ className, title }: HeaderInterface) => {
  return <h1 className={className}>{title}</h1>;
};

export default Header;
