import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({title, subTitle, children }) {
    return (
        <div className="h-[100vh] flex pt-6 sm:pt-0 bg-primary">
            <div className="relative w-[50%] h-[100vh] flex justify-end p-[75px] bg-[url('https://s3-alpha-sig.figma.com/img/5b6c/1d79/86620df9fa97823295e87b6faa6c7fc7?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XEGTLKG44OoxMZnFAmykM8lJFbjakbYVrFNrIb~XVgE6PlqQj5pbW1nuxK-ER6TMn5muoFNgaoyUBpa2c4zVjzdsemH9AbFx1WJ4rykhEAjXtT80Kd0O8sWiSh-o7LbgfMBCwzkNdth4uIBlvDmHGdUG0rAiX4FrXMxwUJPIJ7ooCh7969vtQg9ItMLXXdBfRWzWgMCsp1etFRiqmho5G1ZOeVd~pTstdgdrk6E~-T6TluYDgnoEoqimzKfLcudYl~vTxoLjqaO5TGHzlrft3EovBttE6X0K0Hv-5PbJjBONUNF0hSDyZYCdn2TRkE~yHGSocPFZJ0NOcbXvQQro5Q__')] bg-lightgray bg-cover bg-no-repeat bg-center">
                <div className='absolute inset-0 bg-primary opacity-50'/>
                <div className='relative w-[80%]'>
                    <h2 className='text-[55px]/[70px] text-slate-50 font-bold line'>خطوة واحدة تفصلك عن تحقيق حلمك.</h2>
                    <p className='text-slate-200 text-lg mt-6 font-bold'>خدمة تعليم إلكتروني مجانية جاهزة لمساعدتك في أن تصبح خبيرًا.</p>
                </div>
            </div>

            <div className="w-[50%] h-full px-[100px] py-[75px]">
                <h2 className='text-4xl text-white font-bold'>{title}</h2>
                <p className='text-white text-lg mt-4'>استعد لمستقبل زاخر بالإنجازات.</p>
                <div className='mt-12'>
                    {children}
                </div>
            </div>
        </div>
    );
}
