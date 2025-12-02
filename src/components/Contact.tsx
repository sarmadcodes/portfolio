import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, MessageCircle } from 'lucide-react';

// Mock portfolio data - replace with your actual data
const portfolioData = {
  personal: {
    email: 'Sarmadabbasi@gmail.com',
    phone: '+92 370 2114505',
    location: 'Karachi, Pakistan',
    socialLinks: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername',
      instagram: 'https://instagram.com/yourusername'
    }
  }
};

// Mock scroll animation hook
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = React.useRef(null);
  
  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return { ref, isVisible };
};

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [, setResult] = useState('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Prepare form data for Web3Forms
    const web3FormData = new FormData();
    web3FormData.append("access_key", "696e8720-284e-45e3-900f-f1512b20c057");
    web3FormData.append("name", formData.name);
    web3FormData.append("email", formData.email);
    web3FormData.append("subject", formData.subject);
    web3FormData.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: web3FormData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Thank you for your message! I will get back to you soon.');
      } else {
        setResult("Error sending message. Please try again.");
        alert('There was an error sending your message. Please try again or use the WhatsApp button.');
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
      alert('There was an error sending your message. Please try again or use the WhatsApp button.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Sarmad! I'd like to discuss a project with you. Let's connect!");
    window.open(`https://wa.me/923702114505?text=${message}`, '_blank');
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Email
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-4 flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">{personal.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-4 flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">{personal.phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full mr-4 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-700">{personal.location}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href={personal.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={personal.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={personal.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={`https://wa.me/923702114505?text=${encodeURIComponent("Hi Sarmad! I'd like to connect with you.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
