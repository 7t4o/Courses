import ApplicationLogo from '@/Components/ApplicationLogo';
import Header from '@/Components/Header';
import NavLinks from '@/Components/NavLinks';
import { Link } from '@inertiajs/react';

export default function Authenticated({ user, children }) {

    return (
        <div className="min-h-screen bg-[#ECEFF1]">
            <Header user={user} />

            <main>{children}</main>

            <footer className='bg-primary'>
                <div className='max-w-7xl mx-auto h-[360px] flex justify-between pt-16'>
                    <div className='relative h-full'>
                        <ApplicationLogo className="shrink-0 text-left flex mb-3"/>
                        <p className='text-white text-left'>لنبني أحلامنا معاً ونصنع مستقبلًا مشرق</p>
                        <div className='bg-secondary px-8 py-4 rounded-s rounded-t absolute bottom-0 flex gap-7'>
                            <div>
                                <h3 className='text-lg'>الإيميل</h3>
                                <p className='text-zinc-600'>hatemlaptop1@gmail.com</p>
                            </div>
                            <div>
                                <h3 className='text-lg'>رقم التواصل</h3>
                                <p className='text-zinc-600'>+966533802245</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[100px]'>
                        <div className='text-white'>
                            <h4 className='mb-5 text-xl'>مواقع التواصل</h4>
                            <Link href='/' className='block mb-1'>إنستقرام</Link>
                            <Link href='/' className='block mb-1'>تويتر</Link>
                            <Link href='/' className='block '>لنكدان</Link>
                        </div>
                        <div className='text-white'>
                            <h4 className='mb-5 text-xl'>برامجنا</h4>
                            <Link href='/' className='block mb-1'>العمل المستقل</Link>
                            <Link href='/' className='block '>ريادة الأعمال</Link>
                        </div>
                        <div className='text-white'>
                            <h4 className='mb-5 text-xl'>أخرى</h4>
                            <Link href='/' className='block mb-1'>من نحن</Link>
                            <Link href='/' className='block mb-1'>الدعم</Link>
                            <Link href='/' className='block '>سياسة الخصوصية</Link>
                        </div>
                    </div>
                </div>
                <div className='h-20 bg-white'>
                    <div className='max-w-7xl mx-auto h-full flex justify-between items-center'>
                        <p className='font-sans'>© Copyright EDUFREE 2021 - 2022</p>
                        <NavLinks className='text-black hover:text-gray-700'/>
                    </div>
                </div>
            </footer>
        </div>
    );
}
