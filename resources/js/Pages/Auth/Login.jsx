import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout title={"تسجيل دخول"}>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="الإيميل"
                        className="mt-1 block w-full h-16 rounded-lg bg-primary outline-none border-2 p-8 text-xl text-slate-400 border-[#ffffff10]"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="كلمة المرور"
                        className="mt-1 block w-full h-16 rounded-lg bg-primary outline-none border-2 p-8 text-xl text-slate-400 border-[#ffffff10]"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center flex-row-reverse">
                        <Checkbox
                            className="bg-primary w-5 h-5 "
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="me-2 text-slate-400 border-[#ffffff15]">تذكرني</span>
                    </label>
                </div>

                {canResetPassword && (
                    <div className='mt-10'>
                        <button type='submit' className="w-full h-16 text-center bg-secondary active:scale-[99%] active:bg-yellow-200 duration-200 text-lg text-primary font-bold rounded-md" disabled={processing}>
                            إرســـال
                        </button>
                    </div>
                )}

                <div className="flex items-center justify-center mt-4">
                    <Link
                        href={route('password.request')}
                        dir='auto'
                        className="underline text-xl text-white hover:text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        نسيت كلمة المرور؟
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
