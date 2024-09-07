import { motion } from "framer-motion";
import Link from "next/link";

interface DropdownProps {
  onClose: () => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ onClose }) => {
  return (
    <motion.div
      className="w-screen h-screen text-slate-300 bg-gradient-to-b from-black to-gray-300   p-6 space-y-4 absolute top-28 right-0 left-0 
          z-[100] rounded-t-3xl border-t"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-12 flex flex-col text-center text-white text-2xl mt-20">
        <Link href="/" className="hover:text-gray-200 transition-colors" onClick={onClose}>
          Home
        </Link>
        <Link href="/pricing" className="hover:text-gray-200 transition-colors" onClick={onClose}>
          Pricing
        </Link>
        <Link href="/contact" className="hover:text-gray-200 transition-colors" onClick={onClose}>
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Dropdown;
