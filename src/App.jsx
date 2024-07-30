import Card from "./Card";

function App() {
    return (
        <div className="body">
            <header className="header">
                <div className="header__top">
                    <h1>Miguel Tapalla</h1>
                    <h2>Computer Engineer</h2>
                    <p>
                        I am a recent Computer Engineering graduate at the
                        Polytechnic University of the Philippines Manila and
                        with 5 months of IT work experience.
                    </p>
                    <nav>
                        <ul>
                            <li>
                                <a href="#about">
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#certifications">
                                    <span>Certifications</span>
                                </a>
                            </li>
                            <li>
                                <a href="#experience">
                                    <span>Experience</span>
                                </a>
                            </li>
                            <li>
                                <a href="#projects">
                                    <span>Projects</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__bottom">
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/mmtapalla/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="#333"
                                    className="h-6 w-6"
                                >
                                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.credly.com/users/mmtapalla"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#333"
                                    className="h-6 w-6"
                                >
                                    <path d="M 16.351562 0.105469 C 16.695312 0.304688 16.898438 0.550781 17.019531 0.929688 C 17.105469 1.316406 17.0625 1.675781 16.878906 2.023438 C 16.792969 2.148438 16.699219 2.269531 16.605469 2.386719 C 15.605469 3.691406 14.929688 5.417969 14.746094 7.046875 C 14.703125 7.453125 14.597656 7.835938 14.289062 8.121094 C 13.992188 8.347656 13.625 8.484375 13.25 8.4375 C 12.839844 8.359375 12.550781 8.210938 12.277344 7.890625 C 11.882812 7.289062 12.082031 6.492188 12.207031 5.835938 C 12.238281 5.691406 12.269531 5.546875 12.304688 5.40625 C 12.316406 5.355469 12.328125 5.308594 12.339844 5.257812 C 12.363281 5.167969 12.386719 5.074219 12.410156 4.980469 C 12.527344 4.523438 12.507812 4.089844 12.277344 3.671875 C 12.082031 3.363281 11.792969 3.191406 11.441406 3.105469 C 10.804688 3.003906 10.238281 3.257812 9.703125 3.585938 C 9.542969 3.707031 9.390625 3.832031 9.242188 3.964844 C 9.207031 3.996094 9.171875 4.023438 9.136719 4.054688 C 8.925781 4.234375 8.742188 4.429688 8.566406 4.640625 C 8.535156 4.675781 8.503906 4.714844 8.472656 4.75 C 6.699219 6.820312 5.597656 9.546875 5.527344 12.277344 C 5.527344 12.332031 5.523438 12.382812 5.523438 12.4375 C 5.5 13.742188 5.695312 15.25 6.574219 16.277344 C 7.023438 16.734375 7.589844 16.964844 8.222656 16.972656 C 10.257812 16.976562 12.074219 16.191406 13.585938 14.851562 C 13.644531 14.800781 13.644531 14.800781 13.703125 14.75 C 14.039062 14.453125 14.34375 14.144531 14.625 13.792969 C 14.726562 13.667969 14.832031 13.542969 14.9375 13.421875 C 15.078125 13.25 15.210938 13.078125 15.339844 12.894531 C 15.5625 12.59375 15.8125 12.390625 16.191406 12.328125 C 16.582031 12.296875 16.957031 12.394531 17.261719 12.648438 C 17.535156 12.9375 17.605469 13.238281 17.617188 13.625 C 17.550781 14.03125 17.320312 14.355469 17.089844 14.6875 C 17.058594 14.734375 17.027344 14.78125 16.996094 14.824219 C 16.230469 15.929688 15.363281 17.019531 14.304688 17.847656 C 14.261719 17.882812 14.222656 17.914062 14.179688 17.949219 C 13.59375 18.414062 12.957031 18.804688 12.277344 19.113281 C 12.230469 19.136719 12.230469 19.136719 12.183594 19.15625 C 10.503906 19.917969 8.320312 20.324219 6.496094 19.875 C 6.46875 19.867188 6.441406 19.859375 6.410156 19.851562 C 5.1875 19.539062 4.164062 18.800781 3.503906 17.722656 C 3.472656 17.675781 3.445312 17.632812 3.417969 17.585938 C 2.691406 16.402344 2.402344 14.902344 2.398438 13.527344 C 2.394531 13.488281 2.394531 13.449219 2.394531 13.40625 C 2.394531 13.277344 2.394531 13.148438 2.394531 13.019531 C 2.394531 12.976562 2.394531 12.929688 2.394531 12.886719 C 2.394531 12.183594 2.421875 11.496094 2.53125 10.800781 C 2.539062 10.753906 2.546875 10.707031 2.554688 10.65625 C 2.976562 7.941406 3.976562 5.234375 5.78125 3.121094 C 5.808594 3.089844 5.835938 3.058594 5.863281 3.023438 C 7.039062 1.6875 8.597656 0.550781 10.433594 0.425781 C 10.472656 0.425781 10.507812 0.421875 10.546875 0.421875 C 10.574219 0.421875 10.601562 0.417969 10.628906 0.417969 C 11.679688 0.378906 12.707031 0.578125 13.667969 1.007812 C 13.886719 1.101562 14.03125 1.113281 14.261719 1.054688 C 14.320312 0.984375 14.320312 0.984375 14.347656 0.886719 C 14.804688 0.207031 15.503906 -0.285156 16.351562 0.105469 Z M 16.351562 0.105469 " />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="main">
                <section id="about">
                    <div className="section-name">
                        <h2>About</h2>
                    </div>
                    <div>
                        <p>
                            I grew up fixated on technologies and playing video
                            games while learning how to draw at the same time.
                            Over time, I became curious about whether I could
                            combine the best of both worlds to create a
                            meaningful user experience. And that's where I am
                            right now.
                        </p>
                        <p>
                            I enjoy software development when design and
                            engineering intersect—creating things that not only
                            look good but are also well-built behind the covers.
                        </p>
                        <p>
                            When I'm not at the computer, you'll find me
                            drawing, reading manga, hanging out with my dog, or
                            playing video games.
                        </p>
                    </div>
                </section>
                <section id="certifications">
                    <div className="section-name">
                        <h2>Certifications</h2>
                    </div>
                    <div className="card">
                        <Card
                            year="Apr 2024"
                            heading="Amazon Web Services"
                            subheading="AWS Certified Cloud Practitioner"
                            tags={[
                                "Amazon Web Services",
                                "EC2",
                                "IAM",
                                "VPC",
                                "Lambda",
                                "CloudFormation",
                                "RDS",
                                "Route 53",
                                "Linux",
                                "Python",
                                "Shell",
                            ]}
                            badge="https://images.credly.com/size/110x110/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
                        />
                        <Card
                            year="Jan 2023"
                            heading="Cisco"
                            subheading="Cybersecurity Essentials"
                            tags={["Packet Tracer", "Cybersecurity"]}
                            badge="https://images.credly.com/size/110x110/images/054913b2-e271-49a2-a1a4-9bf1c1f9a404/CyberEssentials.png"
                        />
                        <Card
                            year="Dec 2022"
                            heading="Cisco"
                            subheading="CCNA: Enterprise Networking, Security, and Automation"
                            tags={[
                                "Packet Tracer",
                                "Networking",
                                "Security",
                                "Automation",
                            ]}
                            badge="https://images.credly.com/size/110x110/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png"
                        />
                        <Card
                            year="Aug 2022"
                            heading="Cisco"
                            subheading="CCNA: Switching, Routing, and Wireless Essentials"
                            tags={[
                                "Packet Tracer",
                                "Switch",
                                "Routers",
                                "Wireless Devices",
                            ]}
                            badge="https://images.credly.com/size/110x110/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png"
                        />
                        <Card
                            year="Sep 2021"
                            heading="Coursera"
                            subheading="HTML, CSS, and JavaScript for Web Developers"
                            tags={[
                                "HTML",
                                "CSS",
                                "JavaScript",
                                "Bootstrap",
                                "Node.js",
                            ]}
                            badge="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/74/7ae340ec6911e5b395490a2a565172/JHU-Logo-Square-Mini_180px.png?auto=format%2Ccompress&dpr=1&w=180&h=180"
                        />
                    </div>
                </section>
                <section id="experience">
                    <div className="section-name">
                        <h2>Experience</h2>
                    </div>
                    <div className="card">
                        <Card
                            year="Oct — Dec 2023"
                            heading="OptoGrow Operations Management Services"
                            subheading="IT Specialist (Contractor)"
                            info="• Spearheaded the front-end redesign of the company website using Photoshop, Figma, and HighLevel's page builder, demonstrating design and implementation skills.<br />• Collaborated on technical documentation, remote tech support, training videos, and international client audits, addressing WordPress and HighLevel functionalities, troubleshooting workflows, databases, and third-party integrations.<br />• Mentored interns, providing guidance on company tasks and technologies."
                            tags={[
                                "HighLevel CRM",
                                "Bootstrap",
                                "JavaScript",
                                "Twilio",
                                "Pabbly",
                                "WordPress",
                                "Avada",
                                "Beaver",
                                "Elementor",
                                "Photoshop",
                            ]}
                        />

                        <Card
                            year="Aug — Sep 2022"
                            heading="OptoGrow Operations Management Services"
                            subheading="IT Specialist (Intern)"
                            info="• Collaborated with cross-functional teams to document client funnels, provide remote technical support, and conduct international client audits, addressing CRM functionalities, workflow automations, and relational databases.<br />• Led audits of the company's CRM platform, enhancing client funnels using HTML, CSS, and JavaScript, ensuring cross-device compatibility, and employing semantic HTML and SEO techniques.<br />• Managed API-integrated tools such as Integrately, Pabbly, Zapier, MailGun, and Twilio."
                            tags={[
                                "HighLevel CRM",
                                "Integrately",
                                "Pabbly",
                                "Zapier",
                                "MailGun",
                                "Twilio",
                            ]}
                        />
                    </div>
                    <a href="https://drive.google.com/file/d/1qZvN87ZCkYUX1dxTK8M1kPGJx1n8BIYA/view?usp=sharingz">
                        Download Full Résumé
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </section>
                <section id="projects">
                    <div className="section-name">
                        <h2>Projects</h2>
                    </div>
                    <div className="card">
                        <Card
                            year=""
                            heading="Indoor Object Detection Device for the Visually Impaired"
                            subheading="Project Manager and Developer"
                            info="• Led a team of four and developed a Raspberry Pi 4 device using Python, TensorFlow Lite, and OpenCV for the Philippine National School for the Blind in Pasay City."
                            tags={[
                                "Python",
                                "Raspberry Pi",
                                "TensorFlow Lite",
                                "Linux",
                            ]}
                        />

                        <Card
                            heading="Automatic Pet Food Dispenser"
                            subheading="Project Manager and Developer"
                            info="• Led a team of four and developed an Arduino-based pet food dispenser that allows pet owners to schedule when the food should automatically dispense."
                            tags={["Arduino", "TinkerCAD"]}
                        />

                        <Card
                            heading="KADiRi: Knowledge About Disaster and Risk"
                            subheading="Front-end Developer and UI/UX Designer"
                            info="• Collaborated on a Unity 2D Android educational game focused on DRRR, encompassing C# programming, game asset creation, art direction, and animation."
                            tags={["Unity", "Front-end", "UI/UX", "Photoshop"]}
                        />
                    </div>
                </section>
                <footer>
                    <p>
                        By <strong>Miguel Tapalla</strong>.{" "}
                    </p>
                </footer>
            </main>
        </div>
    );
}

export default App;
