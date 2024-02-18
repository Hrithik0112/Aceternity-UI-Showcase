import { motion } from "framer-motion";
import Link from "next/link";

interface DropdownProps {
  onClose: () => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ onClose }) => {
  return (
    <motion.div
      className="w-screen h-screen text-slate-300 bg-gradient-to-b
          from-neutral-50 to bg-neutral-400 bg-opacity-50  p-6 space-y-4 absolute top-28 right-0 left-0 
          z-50 rounded-t-3xl"
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-10">
        <Link href="/pricing" className="text-black text-2xl">
          Pricing
        </Link>
        <Link href="/contact" className="text-black text-2xl">
          Conatct
        </Link>
        <Link href="/boo" className="text-black text-2xl">
          Book a Call
        </Link>
      </div>
    </motion.div>
  );
};

export default Dropdown;
