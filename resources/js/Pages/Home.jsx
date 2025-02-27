import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import Icon from "../Components/CounterIcon"
import { LuClock2 } from "react-icons/lu";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Balls from "../Components/Balls"
import FAQItem from "../Components/FAQItem"
import { FiPlus } from "react-icons/fi";
import Register from "./Auth/Register"
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiArrowLongLeft } from "react-icons/hi2";
import coursesData from "../../data/courses.json"



export default function Home({ auth }) {

    const faqItems = [
        {
            question: "هل الدورات مجانية بالكامل؟",
            answer: "نعم، جميع دوراتنا متاحة مجانًا للمستخدمين. للمزيد من الاستفسارات تواصل معنا على الرقم المذكور."
        },
        {
            question: "هل الدورات مناسبة للمبتدئين؟",
            answer: "بالتأكيد، تم تصميم الدورات لتناسب جميع المستويات بما في ذلك المبتدئين."
        },
        {
            question: "هل هناك شهادات معتمدة؟",
            answer: "نعم، يتم منح شهادات معتمدة بعد إتمام الدورات بنجاح."
        },
        {
            question: "هل هناك متابعة بعد التخرج؟",
            answer: "نعم، نوفر متابعة ودعمًا فنيًا بعد الانتهاء من الشرح لضمان فهم كامل للمادة."
        },
        {
            question: "هل استطيع التقديم على الوظائف بعد التخرج؟",
            answer: "بالتأكيد، الدورات مصممة لتأهيلك للتقديم على الوظائف في المجال ذي الصلة."
        }
    ];
    
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Home" />

            {/* Home Page */}
            <div className="py-12 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <div className="h-[calc(100vh-160px)] flex items-center flex-row-reverse">
                        <div className='w-1/2'>
                            <h2 className='text-5xl text-white mb-8'>لنبني ونصنع أحلامنا معاً</h2>
                            <p className='text-white mb-16'>هذه المنصة تقدم خدمة دورات تدريبية مجانية, تهدف إلى مساعدتك في تحقيق أحلامك في المجالات التقنية وتنمية مهارات التعلم</p>
                            <div className='flex flex-row-reverse'>
                                <Link href='/courses' className='bg-secondary px-11 py-4 rounded-md text-lg ml-9'>عرض الدورات</Link>
                                <Link className='flex items-end text-lg text-white p-2 gap-3'><FaArrowLeftLong />إكمال التعلم</Link>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div><img src="/images/Home/main.png" alt="" className='transform scale-x-[-1]' /></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Supporters Section */}
            <div className='h-52 bg-white'>
                <div className='max-w-7xl mx-auto h-full flex items-center justify-between'>
                    <div className='w-36'><img src="/images/supporters/elm.png" alt="" /></div>
                    <div className='w-36'><img src="/images/supporters/ncai.png" alt="" /></div>
                    <div className='w-36'><img src="/images/supporters/safosp.png" alt="" /></div>
                    <div className='w-36'><img src="/images/supporters/sdaia.png" alt="" /></div>
                    <div className='w-36'><img src="/images/supporters/ster.png" alt="" /></div>
                    <div className='w-36'><img src="/images/supporters/tuwaiq.png" alt="" /></div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className='py-32'>
                <div className='max-w-7xl mx-auto'>
                    <h2 dir="auto" className='text-4xl text-center text-darkblue mb-16'>
                        فوائد الانضمام إلى برنامج [Hatem] للتعليم الإلكتروني
                    </h2>
                    <div className='grid grid-cols-3 grid-rows-2 justify-between gap-y-10'>
                        <div className='p-12 w-96 bg-slate-300 flex flex-col items-end'>
                            <Icon num="3" />
                            <h3 className='text-2xl text-darkblue mt-5 mb-3'>استشارات</h3>
                            <p className='text-darkblue opacity-70'>نوفر مجموعة استشارية داعمة لمساعدتك في طرح الأسئلة أو فتح مناقشات جديدة حول أي موضوع. يمكنك الاستفادة من هذه الخدمة للحصول على إجابات واضحة أو مشاركة أفكارك مع الآخرين</p>
                        </div>
                        <div className='p-12 w-96 bg-slate-300 flex flex-col items-end'>
                            <Icon num="2" />
                            <h3 className='text-2xl text-darkblue mt-5 mb-3'>محتوى دائم</h3>
                            <p className='text-darkblue opacity-70'>يمكنك الوصول إلى جميع الدورات التي سجلت فيها إلى الأبد، مما يتيح لك التعلم بوتيرة تناسبك دون ضغوط. نهدف إلى توفير تجربة تعليمية مرنة ومريحة تناسب احتياجاتك الفردية, استمتع بفرصة التعلم في الوقت الذي يناسبك وبالطريقة التي تفضلها</p>
                        </div>
                        <div className='p-12 w-96 bg-slate-300 flex flex-col items-end'>
                            <Icon num="1" />
                            <h3 className='text-2xl text-darkblue mt-5 mb-3'>دورات مجانية</h3>
                            <p className='text-darkblue opacity-70'>نقدم مجموعة متنوعة من الدورات المجانية لدعم وصول التعليم للمجتمعات المحرومة، بهدف تمكين الأفراد وتطوير مهاراتهم. نسعى من خلال هذه المبادرات إلى تقليل الفجوات التعليمية وخلق فرص متكافئة للجميع</p>
                        </div>
                        <div className='p-12 w-96 bg-slate-300 flex flex-col items-end'>
                            <Icon num="6" />
                            <h3 className='text-2xl text-darkblue mt-5 mb-3'>مدربين خبراء</h3>
                            <p className='text-darkblue opacity-70'>نقدم مجموعة متنوعة من الدورات المجانية لدعم وصول التعليم للمجتمعات المحرومة، بهدف تمكين الأفراد وتطوير مهاراتهم. نسعى من خلال هذه المبادرات إلى تقليل الفجوات التعليمية وخلق فرص متكافئة للجميع</p>
                        </div>
                        <div className='p-12 w-96 bg-slate-300 flex flex-col items-end'>
                            <Icon num="5" />
                            <h3 className='text-2xl text-darkblue mt-5 mb-3'>التدرج في التعلم</h3>
                            <p className='text-darkblue opacity-70'>تقدم دوراتنا مسارًا تعليميًا متكاملًا يبدأ من المستوى الأساسي وصولًا إلى مستوى الخبراء، لضمان تلبيتها لاحتياجات جميع المتعلمين. سواء كنت مبتدئًا أو محترفًا، ستجد محتوى يناسب مستواك ويساعدك على تطوير مهاراتك بشكل تدريجي</p>
                        </div>
                        <div className='p-12 w-96 bg-slate-300 flex flex-col items-end'>
                            <Icon num="4" />
                            <h3 className='text-2xl text-darkblue mt-5 mb-3'>شهادات ومشاريع عملية</h3>
                            <p className='text-darkblue opacity-70'>بعد إكمال الدورة، ستتلقى شهادة معتمدة تعكس جهودك وإنجازاتك، بالإضافة إلى مجموعة من المشاريع العملية التي أكملتها خلال الدورة</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us */}
            <div>
                <div className='max-w-7xl mx-auto flex gap-24 flex-row-reverse'>
                    <div className='w-1/2 flex flex-col justify-center'>
                        <p className='text-lg text-darkblue opacity-70'>معلومات عنا</p>
                        <h3 dir='auto' className='text-4xl text-darkblue my-4'>منصة [HATEM] للتعلم الإلكتروني المجاني ودعم التطور المهني ومساعدتك على النمو</h3>
                        <p dir='auto' className='text-sm text-darkblue opacity-70'>من المتوقع أن تصبح منصة [HATEM] رائدة في مجال التعليم الإلكتروني، حيث توفر خدمات تعليمية مبتكرة تلبي احتياجات المتعلمين بفاعلية.</p>
                    </div>
                    <div className='w-1/2'><img src="/images/Home/info.jpg" alt="" /></div>
                </div>
            </div>

            {/* Courses Section */}
            <div className='py-[150px]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between flex-row-reverse border-b-2 border-[#dcdce1] pb-5 mb-16'>
                        <h3 className='text-4xl text-darkblue'>الدورات المقترحة لك</h3>
                        <div className='flex gap-2 items-center flex-row-reverse'>
                            <Link className='px-12 py-4 flex items-center gap-[10px]'><MdKeyboardArrowDown className='text-2xl'/>الفئات</Link> 
                            <Link href='/courses' className='px-12 py-4 bg-secondary rounded-md'>عرض الكل</Link>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        {coursesData.slice(0, 3).map((course, index) => (
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
                        ))}
                    </div>
                </div>
            </div>

            {/* What they said about us Section */}
            <div className='py-[85px] bg-slate-300'>
                <div className='max-w-7xl mx-auto flex flex-row-reverse gap-[140px] overflow-hidden text-darkblue'>
                    <div className='min-w-96'>
                        <h3 className='text-3xl mb-2'>ماذا يقولون عن دوراتنا</h3>
                        <p className='opacity-70'>حصل موقعنا على ثقة أكثر من 10,000 ألف طاب</p>
                    </div>
                    <div>
                        <p className='text-2xl' dir='auto'>"الدورات اللي يقدمونها سهلة ومفهومة، وجودة المدربين ممتازة جداً وردودهم سريعة. والله دورة تستاهل التجربة، أنا عن نفسي استفدت كثير وأوصي بيها لكل اللي يبغون يتعلمون برمجة المواقع!"</p>
                        <div className='mt-7 flex justify-between flex-row-reverse items-center'>
                            <div className='flex gap-3'>
                                <div>
                                    <h3 className='text-lg text-darkblue'>حاتم عبد الرحمن</h3>
                                    <p className='text-xs text-darkblue'>مهندس برمجيات</p>
                                </div>
                                <div className='rounded-full overflow-hidden w-14'><img src="/images/Home/luffy.jpg" alt="" /></div>
                            </div>
                            <Balls />
                        </div>
                    </div>
                </div>
            </div>

            {/* Frequently Questions */}
            <div className='py-[150px]' id='faq'>
                <div className='max-w-7xl mx-auto flex flex-row-reverse gap-[120px]'>
                    <div className='w-80 text-darkblue'>
                        <h3 className='text-3xl mb-2'>الأسئلة الشائعة</h3>
                        <p dir='auto'>للمزيد من الإستفسارات تواصل معنا على الرقم التالي: 966533802245+</p>
                    </div>
                    <div className='w-full'>
                        
                        {faqItems.map((item, index) => (
                            <FAQItem 
                                key={index} 
                                question={item.question} 
                                answer={item.answer} 
                                index={index} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Register */}
            <div>
                <div className='max-w-7xl mx-auto rounded-md overflow-hidden'>
                    <Register isFocused={false} />
                </div>
            </div>

            {/* Blogs Section */}
            <div className='pt-[150px] pb-[200px]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex mb-16 justify-between items-center text-darkblue flex-row-reverse'>
                        <h2 className='text-4xl'>المدونة والأخبار والأحداث</h2>
                        <Link className='flex items-center gap-2'><HiOutlineArrowLeft /> عرض الكل</Link>
                    </div>
                    <div className='flex justify-center gap-11'>
                        <div>
                        <div className='w-[405px] h-[285px] mb-10 rounded-t-md overflow-hidden'><img src="/images/Blogs/blog1.jpg" alt="" className='h-full' /></div>
                        <div className='text-darkblue'>
                                <p className='opacity-70'>19 Jan 2022</p>
                                <h3 className='my-4 text-xl'  dir='auto'>طرق سهلة لبدء تعلم البرمجة - [HATEM]</h3>
                                <p className='opacity-70'  dir='auto'>لقد أصبح تعلم البرمجة الآن سهلاً جدًا لأي شخص...</p>
                                <Link className='mt-9 flex items-center gap-2 justify-end'><HiArrowLongLeft className='text-2xl'/> اقرأ المزيد</Link>
                            </div>
                        </div>
                        <div>
                        <div className='w-[405px] h-[285px] mb-10 rounded-t-md overflow-hidden'><img src="/images/Blogs/blog2.jpg" alt="" className='h-full' /></div>
                        <div className='text-darkblue'>
                                <p className='opacity-70'>19 Jan 2022</p>
                                <h3 className='my-4 text-xl'  dir='auto'>طرق سهلة لبدء تعلم البرمجة - [HATEM]</h3>
                                <p className='opacity-70'  dir='auto'>لقد أصبح تعلم البرمجة الآن سهلاً جدًا لأي شخص...</p>
                                <Link className='mt-9 flex items-center gap-2 justify-end'><HiArrowLongLeft className='text-2xl'/> اقرأ المزيد</Link>
                            </div>
                        </div>
                        <div>
                            <div className='w-[405px] h-[285px] mb-10 rounded-t-md overflow-hidden'><img src="/images/Blogs/blog3.jpg" alt="" className='h-full' /></div>
                            <div className='text-darkblue'>
                                <p className='opacity-70'>19 Jan 2022</p>
                                <h3 className='my-4 text-xl'  dir='auto'>طرق سهلة لبدء تعلم البرمجة - [HATEM]</h3>
                                <p className='opacity-70'  dir='auto'>لقد أصبح تعلم البرمجة الآن سهلاً جدًا لأي شخص...</p>
                                <Link className='mt-9 flex items-center gap-2 justify-end'><HiArrowLongLeft className='text-2xl'/> اقرأ المزيد</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
