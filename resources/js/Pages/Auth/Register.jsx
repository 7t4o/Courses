import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register({ isFocused = true }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout title={"تسجيل جديد"}>
            { isFocused ? <Head title="Register" /> : "" }
            <form onSubmit={submit}>
                <div>
                    <TextInput
                        id="name"
                        value={data.name}
                        placeholder="أسمك"
                        className="mt-1 w-full h-16 rounded-lg bg-primary outline-none border-2 p-8 text-xl text-slate-400 border-[#ffffff10]"
                        autoComplete="name"
                        isFocused={isFocused}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="email"
                        type="email"
                        value={data.email}
                        placeholder="الإيميل"
                        className="mt-1 w-full h-16 rounded-lg bg-primary outline-none border-2 p-8 text-xl text-slate-400 border-[#ffffff10]"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        value={data.password}
                        placeholder="كلمة المرور"
                        className="mt-1 w-full h-16 rounded-lg bg-primary outline-none border-2 p-8 text-xl text-slate-400 border-[#ffffff10]"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        value={data.password_confirmation}
                        placeholder="تأكيد كملة المرور"
                        className="mt-1 w-full h-16 rounded-lg bg-primary outline-none border-2 p-8 text-xl text-slate-400 border-[#ffffff10]"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className='mt-10'>
                    <button type='submit' className="w-full h-16 text-center bg-secondary active:scale-[99%] active:bg-yellow-200 duration-200 text-lg text-primary font-bold rounded-md" disabled={processing}>
                        إرســـال
                    </button>
                </div>

                <div className="flex items-center justify-center mt-4">
                    <Link
                        href={route('login')}
                        dir='auto'
                        className="underline text-xl text-white hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        عندك حساب جاهز؟
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
