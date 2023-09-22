const Footer = () => {
    return (
      <footer className="w-full p-4 bg-coLab-blue dark:bg-coLab-dark-blue text-white">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Alex Merkel. All Rights Reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;