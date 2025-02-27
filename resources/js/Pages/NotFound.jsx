import { Link } from '@inertiajs/react';

export default function NotFound(){
    return(
        <div className="h-[100vh] flex justify-center items-center">
            <div className='flex flex-col justify-center'>
                <h1 className='text-[200px] text-secondary text-center'>4<span className='text-darkblue'>0</span>4</h1>
                <p className='text-darkblue text-4xl text-center'>عفواً... لم يتم العثور على الصفحة</p>
                <p className='text-lg mt-4 w-[500px] text-[#535353] text-center'>عذرا، لم يتم العثور على الصفحة التي تحاول فتحها.
                تأكد من أن عنوان URL الذي أدخلته صحيح</p>
                <Link href='/' className='mx-auto py-4 px-12 bg-secondary rounded-md mt-16 text-center'>الصفحة الرئيسية</Link>
            </div>
        </div>
    );
}