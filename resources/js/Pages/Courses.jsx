import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { LuClock2 } from "react-icons/lu";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import coursesData from "../../data/courses.json"


export default function Courses({ auth }) {
    const [categories, setCategories] = useState("all");
    const [searchTerm, setSearchTerm] = useState("");

const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = searchTerm === "" || course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categories === "all" || course.category === categories;

    return matchesSearch && matchesCategory;
});


    const handleCategory = (category) => {
        setCategories(category.target.name);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <div className='py-7 bg-[#EEF4FA]'>
                <div className='max-w-7xl mx-auto'>
                    <p><Link href='/'>الرئيسية</Link> <samp className='mx-2'>&gt;</samp> الدورات</p>
                </div>
            </div>

            <div className='pt-[125px] pb-[200px] bg-white'>
                <div className='max-w-7xl mx-auto flex flex-col items-center'>
                    <input 
                        type="text" 
                        placeholder='...إبحث في الدورات' 
                        className='w-[745px] px-10 py-4 text-xl text-darkblue rounded-lg border-2 border-[rgba(40,41,56,0.60)] outline-none'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className='flex gap-10 mt-10 mb-[185px]'>
                        <button className={` ${categories === 'all' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='all' onClick={handleCategory}>الكل</button>
                        <button className={` ${categories === 'prog' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='prog' onClick={handleCategory}>البرمجة</button>
                        <button className={` ${categories === 'design' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='design' onClick={handleCategory}>التصميم</button>
                        <button className={` ${categories === 'markting' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='markting' onClick={handleCategory}>التسويق</button>
                        <button className={` ${categories === 'soft' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='soft' onClick={handleCategory}>المهارات الناعمة</button>
                        <button className={` ${categories === 'network' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='network' onClick={handleCategory}>الشبكات</button>
                        <button className={` ${categories === 'data' ? 'text-[#2405F2]' : 'text-darkblue opacity-70'}`} name='data' onClick={handleCategory}>تحليل البيانات</button>
                    </div>

                    <div className='grid grid-cols-3 gap-[70px]'>
                        {filteredCourses.length > 0 ? filteredCourses.map((course, index) => (
                            <Link key={index} href='/' className='w-96 shadow-md rounded-md overflow-hidden hover:scale-[1.03] transition-all duration-300'>
                                <div>
                                    <img src={`/images/Courses/${course.image}`} alt="" />
                                    <div></div>
                                </div>
                                <div className='px-4 py-6'>
                                    <h4 className='text-2xl text-darkblue mb-1'>{course.title}</h4>
                                    <p className='text-darkblue opacity-60 mb-6'>{course.subtitle}</p>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center gap-1'><LuClock2 className='text-xl'/>{course.date}</div>
                                        <div className='flex items-center gap-1'><MdOutlineSlowMotionVideo className='text-xl'/>{course.videos} فيديو</div>
                                        <div className='flex items-center gap-1'><MdOutlinePeopleOutline className='text-xl'/>{course.students} طالب</div>
                                    </div>
                                </div>
                            </Link>
                        )) : <p className='absolute mx-auto text-4xl text-darkblue'>لا توجد نتائج</p>}
                    </div>

                    <div className='flex items-center gap-10 mt-[100px]'>
                        <Link className='w-[50px] hover:scale-[1.1] duration-200 text-white bg-secondary text-center py-2 font-bold text-2xl rounded-md'>1</Link>
                        <Link className='w-[50px] hover:scale-[1.1] duration-200 text-[#656565] bg-[#f5f5f5] text-center py-2 font-bold text-2xl rounded-md'>2</Link>
                        <Link className='w-[50px] hover:scale-[1.1] duration-200 text-[#656565] bg-[#f5f5f5] text-center py-2 font-bold text-2xl rounded-md'>3</Link>
                        <p className='w-[50px] text-[#656565] text-center pt-3 font-bold text-2xl'>. . .</p>
                        <Link className='w-[50px] hover:scale-[1.1] duration-200 text-[#656565] bg-[#f5f5f5] text-center py-2 font-bold text-2xl rounded-md'>5</Link>
                    </div>
                </div>
            </div>
        
        </AuthenticatedLayout>
    );
}