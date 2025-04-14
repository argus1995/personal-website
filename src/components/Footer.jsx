export default function Footer() {
    return (
      <footer className="bg-black text-white py-6 border-t border-emerald-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300 text-sm mt-1">© {new Date().getFullYear()} Crafted with React and Tailwind CSS</p>
        </div>
      </footer>
    )
  }