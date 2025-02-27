import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import FAQItem from "../Components/FAQItem"



export default function Courses({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>

            <Head title="About Us" />

            <div className='py-7 bg-[#EEF4FA]'>
                <div className='max-w-7xl mx-auto'>
                    <p><Link href='/'>الرئيسية</Link> <samp className='mx-2'>&gt;</samp> من نحن</p>
                </div>
            </div>

            <div className='pt-[125px] pb-[200px] bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className='text-darkblue mb-[75px]'>
                        <p className='text-2xl text-darkblue opacity-70'>معلومات عنا</p>
                        <h3 dir='auto' className='text-4xl text-darkblue my-4'>منصة [HATEM] للتعلم الإلكتروني المجاني ودعم التطور المهني ومساعدتك على النمو</h3>
                        <p dir='auto' className=' text-darkblue opacity-70'>من المتوقع أن تصبح منصة [HATEM] رائدة في مجال التعليم الإلكتروني، حيث توفر خدمات تعليمية مبتكرة تلبي احتياجات المتعلمين بفاعلية.</p>
                    </div>
                    <div className='rounded-md overflow-hidden'><img src="/images/Home/info.jpg" alt="" className='w-full' /></div>
                    <div className='mt-16'>
                        <p className='text-2xl text-darkblue ' dir='auto'>مرحبًا بك في [HATEM]، حيث نؤمن بأن التعليم هو المفتاح لبناء مستقبل مشرق. نحن منصة تعليمية متكاملة تهدف إلى توفير بيئة تعليمية حديثة، تفاعلية، ومبتكرة تساعد الطلاب على اكتساب المهارات والمعرفة التي يحتاجونها للنجاح.</p>
                    </div>
                </div>
            </div>

            <FAQItem question="ما اسمك؟" answer="حاتم شويعي" index="1"/>
            <FAQItem question="ما اسمك؟" answer="حاتم شويعي" index="1"/>
            <FAQItem question="ما اسمك؟" answer="حاتم شويعي" index="1"/>
            <FAQItem question="ما اسمك؟" answer="حاتم شويعي" index="1"/>
        </AuthenticatedLayout>
    );
};
