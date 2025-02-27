import { Link } from '@inertiajs/react';

export default function NavLinks({className=''}) {
    return (
        <div className='flex items-center text-white gap-9 transition ease-in-out duration-150'>
            <Link href="/" className={'hover:text-gray-400 ' + className}>الرئيسية</Link>
            <Link href="/about" className={'hover:text-gray-400 ' + className}>من نحن</Link>
            <Link href="/courses" className={'hover:text-gray-400 ' + className}>الدورات</Link>
            <Link href="/#faq" className={'hover:text-gray-400 ' + className}>الأسئلة</Link>
            <Link href="/" className={'hover:text-gray-400 ' + className}>المدونة</Link>
        </div>
    );
}