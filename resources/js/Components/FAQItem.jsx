import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";



export default function FAQItem({ question, answer, index }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b-2 border-gray-300">
            <div className='flex items-center py-8 px-7 flex-row-reverse text-2xl relative' onClick={() => setIsOpen(!isOpen)} >
                <p className='text-blue-600 ml-14'>{`0${index + 1}`}</p>
                <h4 className='text-darkblue'>{question}</h4>
                <button className='absolute top-9 left-7 cursor-pointer' >{isOpen ? <FiMinus /> : <FiPlus />}</button>
            </div>
            
            <AnimatePresence>
                {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <div className="pb-4 pr-8 text-xl text-darkblue opacity-80" dir='auto'>{answer}</div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}