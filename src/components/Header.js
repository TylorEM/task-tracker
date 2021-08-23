import Button from './Button';

const Header = ({ title }) => {
  const handleButtonClick = () => {
    console.log('Click');
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={handleButtonClick} />
    </header>
  );
};

//Example showing default props
Header.defaultProps = {
  title: 'Task Tracker',
};

//CSS styling in JS:

//const headingStyle = {
//  color: 'red',
//  backgroundColor: 'black'
//}

export default Header;
