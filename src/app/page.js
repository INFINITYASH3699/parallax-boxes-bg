import ParallaxLayout from '../components/ParallaxLayout';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';

const sections = [
  {
    title: "Smooth Animations",
    content: "Experience buttery smooth animations that respond to your every scroll. Our advanced parallax system creates depth and immersion that captivates your users from the first moment they land on your site."
  },
  {
    title: "Responsive Design",
    content: "Built with mobile-first principles, our design adapts seamlessly across all devices. From smartphones to ultrawide monitors, your content looks stunning everywhere."
  },
  {
    title: "Interactive Elements",
    content: "Engage your users with interactive components that respond to mouse movements and scroll positions. Every element is designed to create a memorable user experience."
  },
  {
    title: "Modern Technology",
    content: "Powered by Next.js and Tailwind CSS, this implementation uses the latest web technologies to ensure optimal performance and maintainability."
  }
];

export default function Home() {
  return (
    <ParallaxLayout>
      <HeroSection />
      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          content={section.content}
          index={index}
        />
      ))}
      
      {/* Footer */}
      <footer className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-gray-300 mb-8">Join thousands of developers creating amazing experiences</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300">
            Start Building
          </button>
        </div>
      </footer>
    </ParallaxLayout>
  );
}