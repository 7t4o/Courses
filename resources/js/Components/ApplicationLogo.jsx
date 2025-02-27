import { Link } from '@inertiajs/react';

export default function ApplicationLogo(props) {
    return (
        <Link href="/" {...props} >
            <h1 className='text-white text-2xl font-bold'>[HATEM]</h1>
        </Link>
    );
}
