const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mt-16 border-t border-gray-100 pt-8">
          <p className="text-center text-xs/relaxed text-white">
            © Tripix {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
