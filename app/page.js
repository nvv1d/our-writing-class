export default function Home() {
  return (
    <div>
      <h1>Welcome to the English Writing Class!</h1>
      <p>This is a place to share your writings and get feedback.</p>
      <nav>
        <ul>
          <li><a href="/submit">Submit Your Assignment</a></li>
          <li><a href="/wall">Wall of Excellence</a></li>
          <li><a href="/feedback">Feedback Section</a></li>
        </ul>
      </nav>

      {/* Add the online courses section here */}
      <section>
        <h2>online courses</h2>
        <h2>Learn Anything. On Your Schedule</h2>
        <div className="course-container">
          <div className="course-item">
            <img src="/placeholder.png" alt="Build Skills" />
            <h3>BUILD SKILLS</h3>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
            <a href="#" className="learn-more">
              LEARN MORE
            </a>
          </div>
          <div className="course-item">
            <img src="/placeholder.png" alt="Free Classes" />
            <h3>FREE CLASSES</h3>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
            <a href="#" className="learn-more">
              LEARN MORE
            </a>
          </div>
          <div className="course-item">
            <img src="/placeholder.png" alt="Methodology" />
            <h3>METHODOLOGY</h3>
            <p>
              Sample text. Click to select the text box. Click again or double
              click to start editing the text.
            </p>
            <a href="#" className="learn-more">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
