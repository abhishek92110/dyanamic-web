function generateHTML(heading, city) {
    return `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/style.css">
    <link rel="stylesheet" href="/new.css">
    <link href="/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/css/main.css" rel="stylesheet">
</head>

<body>

    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
    
          <a href="index.html" class="logo d-flex align-items-center me-auto">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <img src="/assets/img/logo.png" alt="">
            <a href="/"><h1 class="sitename">SkillIndia</h1></a>
          </a>
    
          <nav id="navmenu" class="navmenu">
            <ul>
              <li><a href="/" class="active">Home<br></a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/term-condition">Term&Condition</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li>
                </ul>
              </li>
              <li class="listing-dropdown"><a href="#"><span>Listing Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li>
                    <a href="#">Column 1 link 1</a>
                    <a href="#">Column 1 link 2</a>
                    <a href="#">Column 1 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 2 link 1</a>
                    <a href="#">Column 2 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 3 link 1</a>
                    <a href="#">Column 3 link 2</a>
                    <a href="#">Column 3 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 4 link 1</a>
                    <a href="#">Column 4 link 2</a>
                    <a href="#">Column 4 link 3</a>
                  </li>
                  <li>
                    <a href="#">Column 5 link 1</a>
                    <a href="#">Column 5 link 2</a>
                    <a href="#">Column 5 link 3</a>
                  </li>
                </ul>
              </li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
    
          <a class="btn-getstarted flex-md-shrink-0" href="index.html#about">Get Started</a>
    
        </div>
      </header>

    <div class="herosectio">
        <div class="Container">
            <div class="rowclass ">
                <div class="banner-bg-pre"></div>
                <div class="dootedpre"></div>

                <div class="banner-section">

                    <div class="right-banner">
                        <h2 class="TExt-banner">${heading}</h2>
                        <p class="pTag"><span class="rank">Ranked #1</span> Data Science Course by Career Karma</p>
                        <ul>

                            <li> <i class="greentick"></i> Earn a recognized Data Scientist certification to boost your career </li>
                            <li> <i class="greentick"></i>Learn Python, SQL, Machine Learning, Generative AI, and Tableau
                            </li>
                            <li> <i class="greentick"></i>      Work on real-world projects using industry-aligned tools
                            <li> <i class="greentick"></i>                                Earn IBM certificates and benefit from Masterclasses by IBM experts </li>
                        </li>
                        </ul>
                       <div class="colab">
                        <h3>In Collaboration With</h3>
                        <img src="/image/R.png" alt="">
                       </div>
                        <div class="colabrtaion">
                            <!-- <img src="/image/phoen.png" alt=""> -->
                            <p> <i class="phone"></i>
                                For enquiries call:
                                1800 210 2020</p>
                        </div>

                        <div class="btn-hero">
                            <button class="btn1">Talk to advisor</button>
                            <button class="BTN2">Download Syllabus</button>
                        </div>
                    </div>
                    <div>

                        <div class="sir_banner_image">
                            <img src="/image/sir.avif" alt="">
                        </div>


                    </div>
                    <div class="sir-banner-btn">
                        <button class="btnban-btn"><Span class="stuNum">46329</Span>
                            <p class="bttp">Learn</p>
                        </button>
                        <button class="btnban-btn2"> <Span class="stuNum">4.6</Span>
                            <p class="bttp">Rating</p>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    </div>

    <div class="second-section">
        <div class="program-details">
            <div class="detail-item">
              <i class="icon-clock"><img src="https://www.simplilearn.com/ice9/assets/carbon_time.svgz" alt=""></i>
              <div class="detail-content">
                <p class="detail-title">Next cohort Starts</p>
                <p class="detail-value">7<sup>th</sup> Jan, 2025</p>
              </div>
            </div>
            <div class="detail-item">
              <i class="icon-calendar">
                <img src="https://www.simplilearn.com/ice9/assets/carbon_calendar.svgz" alt="">
              </i>
              <div class="detail-content">
                <p class="detail-title">Program duration</p>
                <p class="detail-value">11 months</p>
              </div>
            </div>
            <div class="detail-item">
              <i class="icon-book">
                <img src="https://www.simplilearn.com/ice9/assets/ion_book-outline.svgz" alt="">
              </i>
              <div class="detail-content">
                <p class="detail-title">Learning Format</p>
                <p class="detail-value">Live, Online, Interactive</p>
              </div>
            </div>
          </div>
          
    </div>


    <div class="join-program-container section-gap">
        <div class="cards-section">
            <h2>Why Join this Program</h2>
            <div class="benefits">
                <div class="benefit">
                    <div class="circle">
                        <img src="https://www.simplilearn.com/ice9/assets/AcademicExecandExecAlumniStatus.png?w=70&dpr=2" alt="">
                    </div>

                    <h3>IBM Advantage</h3>
                    <p>Access hackathons, masterclasses, and AMA sessions. Earn IBM certificates for IBM courses.</p>
                </div>
                <div class="benefit">
                <div class="circle">
                    <img src="https://www.simplilearn.com/ice9/assets/03%20(1).png?w=70&dpr=2" alt="">
                </div>

                    <h3>Generative AI Edge</h3>
                    <p>Live sessions on the latest AI trends, Generative AI tools, prompt engineering, and more.</p>
                </div>
                <div class="benefit">
                <div class="circle">
                    <img src="https://www.simplilearn.com/ice9/assets/TrendsandIndustryInsights.png?w=70&dpr=1.1" alt="">
                </div>

                    <h3>Applied Learning</h3>
                    <p>Capstone and 25+ industry-relevant data science projects to ensure comprehensive learning.</p>
                </div>
                <div class="benefit">
                <div class="circle">
                    <img src="https://www.simplilearn.com/ice9/assets/TrendsandIndustryInsights.png?w=70&dpr=1.1" alt="">
                </div>

                    <h3>Top-notch Data Science course</h3>
                    <p>Comprehensive data science curriculum with live online classes by industry experts.</p>
                </div>
            </div>

         
        </div>

        <div class="form-section">
            <div class="countdown">
                <h3>Next cohort starts on 7th Jan</h3>
                <p>Days: 7 | Hours: 11 | Minutes: 17 | Seconds: 39</p>
            </div>

            <div class="form-container">
                <h2>Contact Us</h2>
                <form>
                  <div class="form-group">
                    <input type="text" id="name" name="name" placeholder=" " required>
                    <label for="name">Name</label>
                  </div>
                  <div class="form-group">
                    <input type="email" id="email" name="email" placeholder=" " required>
                    <label for="email">Email Address</label>
                  </div>
                  <div class="form-group">
                    <input type="tel" id="phone" name="phone" placeholder=" " required>
                    <label for="phone">Phone Number</label>
                  </div>
                  <div class="form-group">
                    <input type="text" id="location" name="location" placeholder=" ">
                    <label for="location">Location</label>
                  </div>
                  <button type="submit" class="submit-btn">Submit</button>
                </form>
              </div>
        </div>
    </div>


    <div class="third-section">
        <div class="background-bg"></div>
    
        <div class="container-third">
            <div class="header">
                <h1>Data Science Certification Advantage</h1>
                <p>Get certified in data science through our IBM program and receive both Data Scientist and IBM certificates to enhance your career prospects. Gain exclusive access to expert-led masterclasses and engaging AMAs with industry leaders.</p>
            </div>
    
            <div class="certificates">
                <div class="certificate">
                  
                    <div class="icon">
                        <img src="/image/icons8-tick-mark.svg" alt="Icon">
                    </div>
                    <img src="https://uncodemy.com/img/tools/c1%20(1).png" alt="Simplilearn Certificate">
                    <div class="details">
                        <h3>Earn Your Data Scientist Certificate</h3>
                        <ul>
                            <li><img src="/image/icons8-tick-mark.svg" alt="Check"> Industry-recognized certificate by Simplilearn</li>
                            <li><img src="/image/icons8-tick-mark.svg" alt="Check"> Dedicated live sessions by industry experts</li>
                            <li><img src="/image/icons8-tick-mark.svg" alt="Check"> Lifetime access to self-paced learning content</li>
                        </ul>
                    </div>
                </div>
    
                <div class="certificate">
               
                    <div class="icon">
                        <img src="/image/icons8-tick-mark.svg" alt="Icon">
                    </div>
                    <img src="https://uncodemy.com/img/tools/c1%20(1).png" alt="IBM Certificate">
                    <div class="details">
                        <h3>Get Ahead with IBM Advantage</h3>
                        <ul>
                            <li><img src="/image/icons8-tick-mark.svg" alt="Check"> Content and certificate by IBM</li>
                            <li><img src="/image/icons8-tick-mark.svg" alt="Check"> Masterclasses by IBM experts</li>
                            <li><img src="/image/icons8-tick-mark.svg" alt="Check"> Hackathons and AMA Sessions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <!-- ---------- curriculum section---------- -->


    <div class="curriculum-container center-container section-gap">

        <span>PG in Data Science & AI (Executive) Curriculum</span>
        <div class="learn-with">
        <p>Learn with a</p>
            <span>World-Class Curriculum</span>
        </div>


        <div class="curriculum-right-left">
        <button class="prev-btn arrow-btn">&#8249;</button>
            <div class="curriculum-title-container">
                
                <div class="title-card custom-card">
                    <span>Course 1</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 2</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 3</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 4</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 5</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 6</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 7</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 8</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 9</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 10</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 11</span>
                    <span>Python for DS</span>
                </div>
                <div class="title-card custom-card">
                    <span>Course 12</span>
                    <span>Python for DS</span>
                </div>
            </div>
            <button class="next-btn arrow-btn">&#8250;</button>
        </div>


            <div class="curriculum-detail-container">
                <div class="curriculum-card custom-card">

                    <div class="curriculum-details active" id="course-1">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>5 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Science:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-2">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>7 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-3">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>10 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-4">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>12 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-5">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>15 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-6">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>18 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-7">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>21 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-8">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>24 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-9">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>27 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-10">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>30 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-11">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>33 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>
                    <div class="curriculum-details" id="course-12">
                        <div class="duration course-cover">
                        <strong>Duration</strong>
                        <span>36 weeks</span>
                    </div>

                    <div class="curriculum-title course-cover">
                        <strong>Python for Data Analytics:</strong>
                        <span>
                            Gain a comprehensive understanding of Python programming, manipulate data with Pandas, and visualise data using Seaborn.
                            </span>
                    </div>

                    <div class="topics-covered">
                        <strong>Topics Covered</strong>
                        <ul>
                            <li>Introduction to Python</li>
                            <li>Programming in Python</li>
                            <li>Python for DS</li>
                        </ul>
                    </div>
                    </div>

                    <div class="tools-and-technologies">
                        <strong>Tools and Technologies You'll Master</strong>
                        <div class="tools-img-name-container" id="carousel">
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                            <div class="tools-img-name">
                            <img src="/img/python.svg">
                            <span>Python</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>


    </div>
    <script src="/script.js"></script>
    <script src="/review.js"></script>


      <div class="unique-body section-gap">
        <div class="unique-container">
            <h1 class="unique-h1">Fast-track Your Career</h1>
            <p class="unique-p">After completing the course, Simplilearn learners have made successful career transitions, boosted career growth, and got salary hikes.</p>
            <div class="unique-divide">
                <div class="unique-achievements">
                    <div>
                        <h3>150%</h3>
                        <p>Maximum salary hike</p>
                    </div>
                    <div>
                        <h3>70%</h3>
                        <p>Average salary hike</p>
                    </div>
                    <div>
                        <h3>2900+</h3>
                        <p>Hiring partners</p>
                    </div>
                </div>
    
                <h2 class="unique-h2">Our Alumni In Top Companies</h2>
                <div class="unique-alumni">
                    <img src="https://via.placeholder.com/100x50?text=Amazon" alt="Amazon">
                    <img src="https://via.placeholder.com/100x50?text=Microsoft" alt="Microsoft">
                    <img src="https://via.placeholder.com/100x50?text=Google" alt="Google">
                    <img src="https://via.placeholder.com/100x50?text=IBM" alt="IBM">
                    <img src="https://via.placeholder.com/100x50?text=Adobe" alt="Adobe">
                    <img src="https://via.placeholder.com/100x50?text=Goldman+Sachs" alt="Goldman Sachs">
                    <img src="https://via.placeholder.com/100x50?text=JPMorgan+Chase" alt="JPMorgan Chase">
                    <img src="https://via.placeholder.com/100x50?text=LinkedIn" alt="LinkedIn">
                    <img src="https://via.placeholder.com/100x50?text=Deutsche+Bank" alt="Deutsche Bank">
                    <img src="https://via.placeholder.com/100x50?text=HSBC" alt="HSBC">
                    <img src="https://via.placeholder.com/100x50?text=Airbus" alt="Airbus">
                </div>
            </div>
        </div>
      </div>

      <!-- ------------ review section----------- -->


      <section class="testimonials">
        <h2>What Our Learners Have To Say</h2>
        <div class="carousel">
            <button class="crousel-prev-btn arrow-btn">&#8249;</button>
            <div class="slides-container">
                <div class="slides">
                    <div class="slide">
                        <blockquote>
                            <p>
                                <span class="quote-mark">“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque repellendus
                                vitae delectus dolor deleniti sed natus!...
                                <a onclick="openPopup()" class="read-more">Read More</a>
                            </p>


                            
                            <footer><a href="#" class="linkedin-link">LinkedIn</a></footer>
                        </blockquote>
                        <div class="popup">
                            <div class="popup-content">
                                <span class="close-btn" onclick="closePopup()">×</span>
                                <h3>Testimonials</h3>
                                <p>
                                    <span class="quote-mark">“</span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                    similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque
                                    repellendus vitae delectus dolor deleniti sed natus.
                                </p>
                                <div class="user-info">
                                    <img src="/image/images.jpeg" alt="User">
                                    <div>
                                        <h3>Aishwarya Ramachandran</h3>
                                        <p>News Analyst, Thomson Reuters<br>6 Years of Experience</p>
                                    </div>
                                </div>
                                <a href="#" class="linkedin-link">LinkedIn</a>
                            </div>
                        </div>
                        <div class="quate-card">
                            <div class="user-info">
                                <img src="/image/images.jpeg" alt="User">
                                <div>
                                    <h3>Mohit Singh</h3>
                                    <p>Data Scientist, Wipro<br>6 Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <blockquote>
                            <p>
                                <span class="quote-mark">“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque repellendus
                                vitae delectus dolor deleniti sed natus!...
                                <a onclick="openPopup()" class="read-more">Read More</a>
                            </p>
                            <footer><a href="#" class="linkedin-link">LinkedIn</a></footer>
                        </blockquote>
                        <div class="popup">
                            <div class="popup-content">
                                <span class="close-btn" onclick="closePopup()">×</span>
                                <h3>Testimonials</h3>
                                <p>
                                    <span class="quote-mark">“</span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                    similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque
                                    repellendus vitae delectus dolor deleniti sed natus.
                                </p>
                                <div class="user-info">
                                    <img src="/image/images.jpeg" alt="User">
                                    <div>
                                        <h3>Aishwarya Ramachandran</h3>
                                        <p>News Analyst, Thomson Reuters<br>6 Years of Experience</p>
                                    </div>
                                </div>
                                <a href="#" class="linkedin-link">LinkedIn</a>
                            </div>
                        </div>
                        <div class="quate-card">
                            <div class="user-info">
                                <img src="/image/images.jpeg" alt="User">
                                <div>
                                    <h3>Mohit Singh</h3>
                                    <p>Data Scientist, Wipro<br>6 Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <blockquote>
                            <p>
                                <span class="quote-mark">“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque repellendus
                                vitae delectus dolor deleniti sed natus!...
                                <a onclick="openPopup()" class="read-more">Read More</a>
                            </p>
                            <footer><a href="#" class="linkedin-link">LinkedIn</a></footer>
                        </blockquote>
                        <div class="popup">
                            <div class="popup-content">
                                <span class="close-btn" onclick="closePopup()">×</span>
                                <h3>Testimonials</h3>
                                <p>
                                    <span class="quote-mark">“</span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                    similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque
                                    repellendus vitae delectus dolor deleniti sed natus.
                                </p>
                                <div class="user-info">
                                    <img src="/image/images.jpeg" alt="User">
                                    <div>
                                        <h3>Aishwarya Ramachandran</h3>
                                        <p>News Analyst, Thomson Reuters<br>6 Years of Experience</p>
                                    </div>
                                </div>
                                <a href="#" class="linkedin-link">LinkedIn</a>
                            </div>
                        </div>
                        <div class="quate-card">
                            <div class="user-info">
                                <img src="/image/images.jpeg" alt="User">
                                <div>
                                    <h3>Mohit Singh</h3>
                                    <p>Data Scientist, Wipro<br>6 Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <blockquote>
                            <p>
                                <span class="quote-mark">“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque repellendus
                                vitae delectus dolor deleniti sed natus!...
                                <a onclick="openPopup()" class="read-more">Read More</a>
                            </p>
                            <footer><a href="#" class="linkedin-link">LinkedIn</a></footer>
                        </blockquote>
                        <div class="popup">
                            <div class="popup-content">
                                <span class="close-btn" onclick="closePopup()">×</span>
                                <h3>Testimonials</h3>
                                <p>
                                    <span class="quote-mark">“</span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                    similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque
                                    repellendus vitae delectus dolor deleniti sed natus.
                                </p>
                                <div class="user-info">
                                    <img src="/image/images.jpeg" alt="User">
                                    <div>
                                        <h3>Aishwarya Ramachandran</h3>
                                        <p>News Analyst, Thomson Reuters<br>6 Years of Experience</p>
                                    </div>
                                </div>
                                <a href="#" class="linkedin-link">LinkedIn</a>
                            </div>
                        </div>
                        <div class="quate-card">
                            <div class="user-info">
                                <img src="/image/images.jpeg" alt="User">
                                <div>
                                    <h3>Mohit Singh</h3>
                                    <p>Data Scientist, Wipro<br>6 Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <blockquote>
                            <p>
                                <span class="quote-mark">“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque repellendus
                                vitae delectus dolor deleniti sed natus!...
                                <a onclick="openPopup()" class="read-more">Read More</a>
                            </p>
                            <footer><a href="#" class="linkedin-link">LinkedIn</a></footer>
                        </blockquote>
                        <div class="popup">
                            <div class="popup-content">
                                <span class="close-btn" onclick="closePopup()">×</span>
                                <h3>Testimonials</h3>
                                <p>
                                    <span class="quote-mark">“</span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                    similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque
                                    repellendus vitae delectus dolor deleniti sed natus.
                                </p>
                                <div class="user-info">
                                    <img src="/image/images.jpeg" alt="User">
                                    <div>
                                        <h3>Aishwarya Ramachandran</h3>
                                        <p>News Analyst, Thomson Reuters<br>6 Years of Experience</p>
                                    </div>
                                </div>
                                <a href="#" class="linkedin-link">LinkedIn</a>
                            </div>
                        </div>
                        <div class="quate-card">
                            <div class="user-info">
                                <img src="/image/images.jpeg" alt="User">
                                <div>
                                    <h3>Mohit Singh</h3>
                                    <p>Data Scientist, Wipro<br>6 Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide">
                        <blockquote>
                            <p>
                                <span class="quote-mark">“</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque repellendus
                                vitae delectus dolor deleniti sed natus!...
                                <a onclick="openPopup()" class="read-more">Read More</a>
                            </p>
                            <footer><a href="#" class="linkedin-link">LinkedIn</a></footer>
                        </blockquote>
                        <div class="popup">
                            <div class="popup-content">
                                <span class="close-btn" onclick="closePopup()">×</span>
                                <h3>Testimonials</h3>
                                <p>
                                    <span class="quote-mark">“</span>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cum ex soluta nam
                                    similique sequi numquam eligendi itaque, maxime, aperiam, porro ipsum atque
                                    repellendus vitae delectus dolor deleniti sed natus.
                                </p>
                                <div class="user-info">
                                    <img src="/image/images.jpeg" alt="User">
                                    <div>
                                        <h3>Aishwarya Ramachandran</h3>
                                        <p>News Analyst, Thomson Reuters<br>6 Years of Experience</p>
                                    </div>
                                </div>
                                <a href="#" class="linkedin-link">LinkedIn</a>
                            </div>
                        </div>
                        <div class="quate-card">
                            <div class="user-info">
                                <img src="/image/images.jpeg" alt="User">
                                <div>
                                    <h3>Mohit Singh</h3>
                                    <p>Data Scientist, Wipro<br>6 Years of Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Add more slides here -->
                </div>
            </div>
            <button class="crousel-next-btn arrow-btn">&#8250;</button>
        </div>
    </section>


    <div class="why-choose-section section-gap">
        <div class="choose-container">
            <div class="heading">How to Choose the Right Specialization for your Executive Diploma in Data Science & AI in ${city}</div>
            <div class="content" id="content">
              <p>
                  It's hard even to choose a weekly menu for your meals; this decision will impact your entire future; remember, choosing a specialization means you have to focus on more than just what interests you.
                </p>
                <p>
                  Your interests must also align with your strengths, career aspirations, and the future of the industry. Luckily, this postgraduate program in data science and AI has five distinct tracks that have a super bright future when it comes to high-growth career opportunities.
                </p>
                <p>Here's how to make a confident choice, with parameters to guide your decision.</p>
                <p><b>1. Explore a "Day in the Life" of Roles in Each Specialization</b></p>
                <p>
                  Sometimes, the best way to choose is to imagine yourself in the roles each specialization leads to. Here's what you can do for each specialization before making a final choice.
                </p>
                <ul>
                  <li><b>NLP (Natural Language Processing):</b> Picture yourself designing a chatbot to handle customer queries in multiple languages, solving real-world communication challenges.</li>
                  <li><b>Deep Learning:</b> Imagine working on autonomous vehicle systems or developing AI models that recognize faces or diagnose medical images.</li>
                  <li><b>Data Engineering:</b> Think about creating a seamless pipeline that enables an organization to process billions of data points daily.</li>
                  <li><b>Business Analytics:</b> Envision leading meetings where you provide data-driven strategies to improve market share or customer satisfaction.</li>
                  <li><b>Data Analytics:</b> See yourself crafting impactful dashboards for decision-makers, translating raw numbers into powerful visuals.</li>
                </ul>
                <p>
                  This exercise helps you connect with the real-world impact of each specialization, making the choice simpler.
                </p>
                <p><b>2. Use Industry Demand as a Filter</b></p>
                <p>Analyze current job trends to narrow your options.</p>
                <ul>
                  <li><b>Deep Learning & NLP:</b> These fields are booming due to advancements in AI technologies like ChatGPT and DALL·E, making them excellent choices for future-proof careers.</li>
                  <li><b>Data Engineering:</b> As organizations handle ever-growing datasets, demand for Data Engineers who help make this data usable is evergreen.</li>
                  <li><b>Business Analytics:</b> A staple in industries like consulting, marketing, and operations, where data insights drive strategy.</li>
                  <li><b>Data Analytics:</b> Critical for organizations looking to make decisions based on clear, actionable data visualizations.</li>
                </ul>
                <p><b>3. Talk to Mentors, Alumni, or Industry Professionals</b></p>
                <p>Nothing beats advice from those who've been in your shoes.</p>
                <ul>
                  <li><b>Mentors:</b> Speak to program mentors through upGrad's live doubt-resolving sessions, which are guaranteed by the course.</li>
                  <li><b>Alumni:</b> Reach out to 30,000+ learners of this program or 10,000+ upGrad alumni who are leading professionals in their fields. Ask how their chosen specialization shaped their careers.</li>
                </ul>
                <p><b>4. Conduct a Self-Assessment: Strengths, Interests, and Work Style</b></p>
                <p>Ask yourself these three key questions:</p>
                <p><b>1. What Are My Strengths?</b></p>
                <ul>
                  <li>Do you excel at coding and algorithms? Consider Deep Learning or NLP.</li>
                  <li>Prefer strategic thinking and communication? Business Analytics might be your path.</li>
                  <li>Love building systems and processes? Data Engineering is your destiny.</li>
                </ul>
                <p><b>2. What Excites Me Most?</b></p>
                <ul>
                  <li>If language AI excites you, NLP is the way to go.</li>
                  <li>Enthralled by cutting-edge AI like generative models? Deep Learning fits the bill.</li>
                  <li>If you're driven by the satisfaction of seeing data come to life in a visual, actionable format, Data Analytics is ideal.</li>
                </ul>
                <p><b>3. How Do I Like to Work?</b></p>
                <ul>
                  <li>If you enjoy working independently with complex technical problems, Data Engineering or Deep Learning may suit you.</li>
                  <li>If you prefer collaborative roles that connect data to broader business goals, opt for Business Analytics.</li>
                </ul>
            </div>
            <a class="read-more" id="readMore">...Read More</a>
          </div>
    </div>

    <div class="apply-container">
        <h1>Apply Now</h1>
        <div class="form-benefits-container">
            <div class="form-container">
                <h2>Contact Us</h2>
                <form>
                  <div class="form-group">
                    <input type="text" id="name" name="name" placeholder=" " required>
                    <label for="name">Name</label>
                  </div>
                  <div class="form-group">
                    <input type="email" id="email" name="email" placeholder=" " required>
                    <label for="email">Email Address</label>
                  </div>
                  <div class="form-group">
                    <input type="tel" id="phone" name="phone" placeholder=" " required>
                    <label for="phone">Phone Number</label>
                  </div>
                  <div class="form-group">
                    <input type="text" id="location" name="location" placeholder=" ">
                    <label for="location">Location</label>
                  </div>
                  <button type="submit" class="submit-btn">Submit</button>
                </form>
              </div>
          
          <div class="benefits-section">
            <h2>Program Benefits</h2>
            <ul>
              <li>Masterclasses delivered by Purdue faculty and staff and IBM</li>
              <li>Data Science and GenAI program completion certificate</li>
              <li>Exposure to ChatGPT, GenAI, prompt engineering, and more</li>
              <li>Alumni Association Membership from Purdue University</li>
              <li>Simplilearn’s Career Assistance post program completion</li>
            </ul>
          </div>
        </div>
      </div>

      <footer id="footer" class="footer section-gap">

      
    
        <div class="container footer-top">
          <div class="row gy-4">
            <div class="col-lg-4 col-md-6 footer-about">
              <a href="index.html" class="d-flex align-items-center">
                <span class="sitename">FlexStart</span>
              </a>
              <div class="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
            </div>
    
            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
              </ul>
            </div>
    
            <div class="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
              </ul>
            </div>
    
            <div class="col-lg-4 col-md-12">
              <h4>Follow Us</h4>
              <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <div class="social-links d-flex">
                <a href=""><i class="bi bi-twitter-x"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
    
          </div>
        </div>
    
        <div class="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong class="px-1 sitename">FlexStart</strong> <span>All Rights Reserved</span></p>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you've purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href=“https://themewagon.com>ThemeWagon
          </div>
        </div>
    
      </footer>

</body>

</html>
    `;
  }

  module.exports = generateHTML;