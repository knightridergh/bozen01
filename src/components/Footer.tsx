const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} MNEURA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
