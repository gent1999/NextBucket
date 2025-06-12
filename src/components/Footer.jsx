function Footer() {
    return (
      <footer className="bg-black border-t border-gray-800 text-gray-400 text-sm text-center py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} NextBucket. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400">About</a>
            <a href="#" className="hover:text-orange-400">FAQ</a>
            <a href="#" className="hover:text-orange-400">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  