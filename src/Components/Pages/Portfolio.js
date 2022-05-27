import React from 'react';
import mypic from '../../Assets/MyPic.jpg'
const Portfolio = () => {
    return (
        <div>
            <div class="navbar bg-primary text-2xl text-center text-white">
                Personal Information
            </div>
            <div class="hero min-h-screen bg-base-200 lg:px-40">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={ mypic } class="max-w-sm rounded-lg shadow-2xl w-48 lg:w-full" />
                    <div>
                        <h1 class="text-4xl text-primary font-bold">Ehsanul Ahmmed</h1>
                        <p class="text-2xl">Phone: 01796664507</p>
                        <p class="text-2xl">Email: ehsanulahmmed@gmail.com</p>
                        <p class="text-2xl">Address: Bashundhara R/ A, Dhaka. </p>
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/in/ehsanul-ahmmed-a15841198/" target="_blank" class="btn btn-outline btn-primary">LinkedIn </a>
                            <a href="https://github.com/ehsan-0801" target="_blank" class="btn btn-outline btn-primary">Github</a>
                            <a href="https://drive.google.com/file/d/1COoubi1XBKCyxa25n5wpCzki_9vV9QPX/view?usp=sharing" target="_blank" class="btn btn-outline btn-primary">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar bg-primary text-2xl text-center text-white">
                Objectives:
            </div>
            <div className="lg:px-40 my-8">
                <p>Just Completed the undergradute degree in CSE and Looking for some opportunity as a frontend developer. Also achieved some experience working in Backend developer. Hard-working, enthusiastic and passionate about learning and also has a goal to work as a full-stack developer.</p>
            </div>
            <div class="navbar bg-primary text-2xl text-center text-white">
                Academic Qualification
            </div>
            <div className="lg:px-40">
                <div className="flex flex-col lg:flex-row gap-5 ">
                    <div>
                        <h1>BACHELOR OF SCIENCE (B.SC)</h1>
                        <p>American International University Bangladesh</p>
                        <p>2018-2022</p>
                        <p>Department: CSE </p>
                    </div>
                    <div>
                        <h1>HIGHER SECONDARY CERTIFICATE ( H.S.C)</h1>
                        <p>lshurdi Government Collage</p>
                        <p>2016</p>
                        <p>Department: Science </p>
                    </div>
                    <div>
                        <h1>SECONDARY SCHOOL CERTIFICATE (S.S.C) </h1>
                        <p>lkkshu Gobeshawana High School</p>
                        <p>2014</p>
                        <p>Department: Science </p>
                    </div>
                </div>
            </div>
            <div class="navbar bg-primary text-2xl text-center text-white">
                Skills
            </div>
            <div className="lg:px-40">
                <p> <span className="font-bold"> Expertise:</span> HTML, CSS, Bootstrap, Tailwindcss, JavaScript, ES6, Reactjs, Firebase, JWT-Auth,Context API.</p>

                <p> <span className="font-bold"> Comfortable:</span> NodeJs, ExpressJs,MongoDb, MySql, PHP</p>

                <p> <span className="font-bold"> Others:</span> C, C++, Java, C#, Python</p>

                <p> <span className="font-bold"> Tools & Technologies :</span> GitHub, VS Code, Heroku, Netlify, Adobe XD, Illustrator, Microsoft Office.</p>

                <p> <span className="font-bold"> Interpersonal </span>: Problem Solving, Leadership, Communication, Flexibility, Teamwork.</p>
            </div>
            <div class="navbar bg-primary text-2xl text-center text-white">
                Project Links
            </div>
            <div className="lg:px-40">
                <div className="flex gap-5 my-6">
                    <h1 className="text-primary">1. WAREHOUSE MANAGEMENT WEB APPLICATION</h1>
                    <a href="https://github.com/ehsan-0801/Warehouse-Management" target="_blank" class="btn btn-outline btn-primary">Github </a>
                    <a href="https://watch-warehouse-3d5c2.web.app/" target="_blank" class="btn btn-outline btn-primary">Live Website </a>
                </div>
                <div className="flex gap-5 my-6">
                    <h1 className="text-primary">2. INDEPENDENT-SERVICE-PROVIDER-IN-REACTJS-BARBAR.</h1>
                    <a href="https://github.com/ehsan-0801/-independent-service-provider-in-reactJs-Barbar-" target="_blank" class="btn btn-outline btn-primary">Github </a>
                    <a href="https://mr-x-the-barbar.netlify.app/" target="_blank" class="btn btn-outline btn-primary">Live Website </a>
                </div>
                <div className="flex gap-5">
                    <h1 className="text-primary my-6">3. CRICKET BAT STORE WITH REACTJS</h1>
                    <a href="https://github.com/ehsan-0801/Cricket_bat_store_using_reactJs" target="_blank" class="btn btn-outline btn-primary">Github </a>
                    <a href="https://cricket-bat-store.netlify.app/" target="_blank" class="btn btn-outline btn-primary">Live Website</a>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;