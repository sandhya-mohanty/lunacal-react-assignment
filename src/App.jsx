import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about-me');
  const [galleryImages, setGalleryImages] = useState([
    { id: 1, src: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg' },
    { id: 2, src: 'https://images.ctfassets.net/23aumh6u8s0i/3jY4eCzPqbJ8bP7RX8SnTe/d6252025eff38698a5ed4ffdbd02f580/nextjs_hero' },
    { id: 3, src: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg' },
    { id: 4, src: 'https://www.squash.io/wp-content/uploads/2023/11/javascript-series.jpg' },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: galleryImages.length + 1,
        src: URL.createObjectURL(file),
      };
      setGalleryImages([...galleryImages, newImage]);
    }
  };

  // Function to navigate to the previous image
  const handlePrevClick = () => {
    if (galleryImages.length > 3) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? galleryImages.length - 3 : prevIndex - 1
      );
    }
  };

  // Function to navigate to the next image
  const handleNextClick = () => {
    if (galleryImages.length > 3) {
      setCurrentIndex((prevIndex) =>
        prevIndex === galleryImages.length - 3 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 flex justify-center">
      {/* Left Empty Half (hidden on mobile) */}
      <div className="hidden lg:block lg:w-1/2"></div>

      {/* Right Widgets */}
      <div className="w-full lg:w-1/2 space-y-6">
        {/* Tab Widget */}
        <div className="bg-gray-700 p-5 sm:p-7 md:p-10 rounded-lg shadow-white">
          <div className="flex justify-between mb-4 bg-gray-900 rounded-full h-15">
            <button
              className={`px-4 sm:px-6 py-1.5 sm:py-2 m-1.5 sm:m-2 rounded-full ${activeTab === 'about-me' ? 'bg-gray-800 text-gray-200' : 'bg-gray-900'}`}
              onClick={() => setActiveTab('about-me')}
            >
              About Me
            </button>
            <button
              className={`px-4 sm:px-6 py-1.5 sm:py-2 m-1.5 sm:m-2 rounded-full ${activeTab === 'experiences' ? 'bg-gray-800 text-gray-200' : 'bg-gray-900'}`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
            </button>
            <button
              className={`px-4 sm:px-6 py-1.5 sm:py-2 m-1.5 sm:m-2 rounded-full ${activeTab === 'recommended' ? 'bg-gray-800 text-gray-200' : 'bg-gray-900'}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>

          <div className="px-3 py-4 sm:px-4 sm:py-6 bg-gray-700 rounded-lg text-sm sm:text-base md:text-lg">
            {activeTab === 'about-me' && (
              <p className="text-start">
                Hi there! I'm Sandhyarani Mohanty, an MCA graduate passionate about frontend development. Skilled in HTML, CSS, JavaScript, React, Redux,  Bootstrap, Tailwind CSS, and SQL, I'm committed to creating captivating user experiences and pushing boundaries in the digital space. Ready to bring my expertise and energy to innovative teams.
              </p>
            )}
            {activeTab === 'experiences' && (
              <p className="text-start">
                <span className="text-lg sm:text-xl font-bold">Project:</span> Task Tracker<br />
                Personal Project<br />
                March 2024 - Present<br /><br />

                Developed a task management web application using React.js, allowing users to organize and track tasks with different statuses. Implemented features such as adding, editing, and deleting tasks, as well as filtering and sorting tasks by priority, date, and assignee. Utilized local storage for data persistence across sessions, enhancing user experience.
              </p>
            )}
            {activeTab === 'recommended' && (
              <p className="text-start">
                <span className="font-bold">1. Focus on Skills:</span> Highlight the technologies and tools you used. This shows your technical proficiency.<br />
                <span className="font-bold">2. Detail Your Contributions:</span> Even small contributions in internships or projects should be mentioned to demonstrate your involvement.<br />
                <span className="font-bold">3. Use Action Verbs:</span> Start bullet points with action verbs like "Developed," "Collaborated," "Implemented," etc., to make your experience sound impactful.<br />
                <span className="font-bold">4. Include Relevant Projects:</span> If work experience is limited, personal or academic projects can fill the gap. Make sure to describe the project's scope, technologies used, and your specific contributions.<br />
                <span className="font-bold">5. Quantify When Possible:</span> If you can, include numbers or results (e.g., "Improved load time by 20%," "Implemented feature used by 100+ users"). This is less common for freshers, but any quantifiable achievements can stand out.
              </p>
            )}
          </div>
        </div>

        {/* Gallery Widget */}
        <div className="bg-gray-700 p-4 sm:p-5 md:p-6 rounded-lg shadow-lg h-85">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-bold bg-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl">
              Gallery
            </h2>
            <div>
              <label className="px-2 sm:px-3 py-1.5 sm:py-2 border-zinc-100 rounded-full mr-5 shadow-inner hover:bg-gray-600 cursor-pointer">
                + ADD IMAGE
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <button
                className="text-lg sm:text-xl px-1.5 sm:px-2 py-1 sm:py-1.5 bg-gray-800 shadow-zinc-200 mr-2 rounded-full hover:bg-gray-600"
                onClick={handlePrevClick}
                disabled={galleryImages.length <= 3}
              >
                ←
              </button>
              <button
                className="text-lg sm:text-xl px-1.5 sm:px-2 py-1 sm:py-1.5 bg-gray-800 rounded-full hover:bg-gray-600"
                onClick={handleNextClick}
                disabled={galleryImages.length <= 3}
              >
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.slice(currentIndex, currentIndex + 3).map((image) => (
              <div key={image.id} className="bg-gray-700 h-48 sm:h-64 rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={`Gallery ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
