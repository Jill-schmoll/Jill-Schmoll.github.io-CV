<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jane Austen - English Major | Social Media Maven</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        header {
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 10px 0;
        }
        nav {
            display: flex;
            justify-content: space-around;
            padding: 10px;
        }
        nav a {
            color: #555;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        nav a:hover, nav a.active {
            color: #222;
        }
        .profile-header {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
        }
        .profile-pic {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #555;
            margin-right: 20px;
        }
        .profile-info {
            flex-grow: 1;
        }
        h1, h2 {
            color: #333;
            margin-bottom: 10px;
        }
        .post {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .post-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        .post-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: white;
            font-weight: bold;
            font-size: 24px;
        }
        .post-content {
            margin-bottom: 20px;
        }
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        .skill-item {
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            transition: transform 0.3s ease;
        }
        .skill-item:hover {
            transform: translateY(-5px);
        }
        .skill-icon {
            font-size: 24px;
            margin-bottom: 10px;
        }
        .timeline {
            position: relative;
            padding-left: 30px;
        }
        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background-color: #555;
        }
        .timeline-item {
            margin-bottom: 30px;
            position: relative;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: -34px;
            top: 0;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #555;
        }
        .project-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .project-item {
            background-color: #f0f0f0;
            border-radius: 8px;
            padding: 20px;
            text-align: center;
        }
        .project-icon {
            font-size: 36px;
            margin-bottom: 10px;
        }
        .engagement {
            display: flex;
            justify-content: space-around;
            border-top: 1px solid #e0e0e0;
            padding-top: 15px;
        }
        .engagement button {
            background: none;
            border: none;
            color: #555;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            transition: color 0.3s ease;
        }
        .engagement button:hover {
            color: #222;
        }
        .engagement button::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            background-size: contain;
            background-repeat: no-repeat;
        }
        .like::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23555'%3E%3Cpath d='M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z'/%3E%3C/svg%3E");
        }
        .comment::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23555'%3E%3Cpath d='M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z'/%3E%3C/svg%3E");
        }
        .share::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23555'%3E%3Cpath d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'/%3E%3C/svg%3E");
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
        </nav>
    </header>

    <div class="container">
        <section id="about" class="profile-header">
            <img src="/api/placeholder/150/150" alt="Jane Austen" class="profile-pic">
            <div class="profile-info">
                <h1>Jane Austen</h1>
                <p>📚 English Major | 💼 Aspiring Social Media Manager | 🖋️ Content Creator</p>
                <p>Bridging the gap between classic literature and modern digital marketing. Let's tell your brand's story!</p>
            </div>
        </section>

        <section id="skills" class="post">
            <div class="post-header">
                <div class="post-icon" style="background-color: #4CAF50;">S</div>
                <h2>Skills</h2>
            </div>
            <div class="post-content">
                <div class="skills-grid">
                    <div class="skill-item">
                        <div class="skill-icon">📝</div>
                        <p>Content Creation</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">📊</div>
                        <p>Social Media Strategy</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">✍️</div>
                        <p>Copywriting</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">🎭</div>
                        <p>Brand Storytelling</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">🧠</div>
                        <p>Analytical Thinking</p>
                    </div>
                    <div class="skill-item">
                        <div class="skill-icon">📚</div>
                        <p>Creative Writing</p>
                    </div>
                </div>
            </div>
            <div class="engagement">
                <button class="like">Like</button>
                <button class="comment">Comment</button>
                <button class="share">Share</button>
            </div>
        </section>

        <section id="experience" class="post">
            <div class="post-header">
                <div class="post-icon" style="background-color: #FFC107;">E</div>
                <h2>Experience</h2>
            </div>
            <div class="post-content">
                <div class="timeline">
                    <div class="timeline-item">
                        <h3>Social Media Intern</h3>
                        <p>@LiteraryPublishingHouse | Summer 2023</p>
                        <p>📈 Increased engagement by 25% through creative content strategies</p>
                        <p>✍️ Crafted compelling copy for various social media platforms</p>
                        <p>🔍 Analyzed metrics to optimize post performance</p>
                    </div>
                </div>
            </div>
            <div class="engagement">
                <button class="like">Like</button>
                <button class="comment">Comment</button>
                <button class="share">Share</button>
            </div>
        </section>

        <section id="education" class="post">
            <div class="post-header">
                <div class="post-icon" style="background-color: #2196F3;">E</div>
                <h2>Education</h2>
            </div>
            <div class="post-content">
                <h3>Bachelor of Arts in English Literature</h3>
                <p>@UniversityOfLiterature | Expected Graduation: May 2025</p>
                <p>📚 GPA: 3.8/4.0</p>
                <p>🏆 Dean's List: 2022, 2023</p>
                <p>📝 Relevant Coursework: Digital Storytelling, Media Studies, Creative Writing</p>
            </div>
            <div class="engagement">
                <button class="like">Like</button>
                <button class="comment">Comment</button>
                <button class="share">Share</button>
            </div>
        </section>

        <section id="projects" class="post">
            <div class="post-header">
                <div class="post-icon" style="background-color: #9C27B0;">P</div>
                <h2>Projects</h2>
            </div>
            <div class="post-content">
                <div class="project-grid">
                    <div class="project-item">
                        <div class="project-icon">📱</div>
                        <h3>Instagram Poetry Series</h3>
                        <p>Curated micro-poems inspired by classic literature, gaining 10k+ followers</p>
                    </div>
                    <div class="project-item">
                        <div class="project-icon">🎥</div>
                        <h3>YouTube Channel: "LitBits"</h3>
                        <p>Created engaging video content explaining literary concepts, amassing 50k+ views</p>
                    </div>
                    <div class="project-item">
                        <div class="project-icon">🖋️</div>
                        <h3>Blog: "The Digital Quill"</h3>
                        <p>Weekly blog posts on the intersection of literature and modern media</p>
                    </div>
                </div>
            </div>
            <div class="engagement">
                <button class="like">Like</button>
                <button class="comment">Comment</button>
                <button class="share">Share</button>
            </div>
        </section>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', (event) => {
            const engagementButtons = document.querySelectorAll('.engagement button');
            engagementButtons.forEach(button => {
                button.addEventListener('click', function() {
                    this.style.color = '#222';
                });
            });

            const navLinks = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('section');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
