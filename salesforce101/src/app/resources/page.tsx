import { FiBookOpen, FiUsers, FiVideo, FiExternalLink, FiAward, FiTool } from 'react-icons/fi';

export const metadata = {
  title: 'Resources - Salesforce 101',
  description: 'Curated collection of Salesforce learning resources, documentation, and community links.',
};

const officialResources = [
  {
    title: 'Salesforce Trailhead',
    description: 'Free, interactive learning platform with modules, projects, and superbadges.',
    url: 'https://trailhead.salesforce.com',
    icon: FiAward,
  },
  {
    title: 'Salesforce Developer Documentation',
    description: 'Comprehensive technical documentation for developers and admins.',
    url: 'https://developer.salesforce.com/docs',
    icon: FiBookOpen,
  },
  {
    title: 'Salesforce Help & Training',
    description: 'Official help articles, training resources, and support documentation.',
    url: 'https://help.salesforce.com',
    icon: FiTool,
  },
  {
    title: 'Trailblazer Community',
    description: 'Connect with millions of Salesforce professionals worldwide.',
    url: 'https://trailblazers.salesforce.com',
    icon: FiUsers,
  },
  {
    title: 'Salesforce+',
    description: 'Stream Salesforce events, shows, and learning content on-demand.',
    url: 'https://www.salesforce.com/plus',
    icon: FiVideo,
  },
];

const certificationResources = [
  {
    title: 'Certification Overview',
    description: 'Complete guide to all Salesforce certifications and career paths.',
    url: 'https://trailhead.salesforce.com/credentials',
  },
  {
    title: 'Exam Guides',
    description: 'Detailed exam guides for each certification with topic weights.',
    url: 'https://trailhead.salesforce.com/help',
  },
  {
    title: 'Maintenance Modules',
    description: 'Keep your certifications current with release update modules.',
    url: 'https://trailhead.salesforce.com/credentials/maintenanceoverview',
  },
];

const communityResources = [
  {
    title: 'Salesforce Stack Exchange',
    description: 'Q&A site for Salesforce administrators, developers, and users.',
    url: 'https://salesforce.stackexchange.com',
  },
  {
    title: 'Reddit r/salesforce',
    description: 'Active community for discussions, questions, and career advice.',
    url: 'https://reddit.com/r/salesforce',
  },
  {
    title: 'Salesforce User Groups',
    description: 'Find local user groups for in-person networking and learning.',
    url: 'https://trailblazercommunitygroups.com',
  },
  {
    title: 'Salesforce MVPs',
    description: 'Learn from recognized community leaders and experts.',
    url: 'https://trailhead.salesforce.com/community',
  },
];

const developerTools = [
  {
    title: 'VS Code Extensions',
    description: 'Salesforce Extensions Pack for Visual Studio Code.',
    url: 'https://marketplace.visualstudio.com/salesforce',
  },
  {
    title: 'Salesforce CLI',
    description: 'Command-line interface for Salesforce development and deployment.',
    url: 'https://developer.salesforce.com/tools/sfdxcli',
  },
  {
    title: 'Workbench',
    description: 'Web-based tool for interacting with Salesforce APIs.',
    url: 'https://workbench.developerforce.com',
  },
  {
    title: 'Developer Sandbox',
    description: 'Get a free Developer Edition org for learning and testing.',
    url: 'https://developer.salesforce.com/signup',
  },
];

export default function ResourcesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learning Resources</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Curated collection of official documentation, community resources, and tools to accelerate your Salesforce journey.
          </p>
        </div>

        {/* Official Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Official Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl glass-effect hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-salesforce-blue to-salesforce-indigo rounded-lg group-hover:scale-110 transition-transform">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-salesforce-blue transition-colors flex items-center gap-2">
                        {resource.title}
                        <FiExternalLink size={16} className="opacity-50" />
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                </a>
              );
            })}
          </div>
        </section>

        {/* Certification Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Certification Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl glass-effect hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-salesforce-blue transition-colors flex items-center gap-2">
                  {resource.title}
                  <FiExternalLink size={16} className="opacity-50" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Community Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Community & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityResources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl glass-effect hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-salesforce-blue transition-colors flex items-center gap-2">
                  {resource.title}
                  <FiExternalLink size={16} className="opacity-50" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Developer Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developerTools.map((tool) => (
              <a
                key={tool.title}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl glass-effect hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-2 group-hover:text-salesforce-blue transition-colors flex items-center gap-2">
                  {tool.title}
                  <FiExternalLink size={16} className="opacity-50" />
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Trailhead Integration Info */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-salesforce-blue to-salesforce-indigo text-white">
            <h2 className="text-3xl font-bold mb-4">Start Learning with Trailhead</h2>
            <p className="text-lg mb-6 opacity-90">
              Trailhead is Salesforce&apos;s free, interactive learning platform. Earn badges, complete hands-on challenges, and build your skills at your own pace.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-bold mb-1">100% Free</h4>
                  <p className="opacity-90">All modules and trails are completely free to access</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎮</span>
                <div>
                  <h4 className="font-bold mb-1">Gamified Learning</h4>
                  <p className="opacity-90">Earn points, badges, and ranks as you progress</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💻</span>
                <div>
                  <h4 className="font-bold mb-1">Hands-On Practice</h4>
                  <p className="opacity-90">Work in real Salesforce environments with guided challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <h4 className="font-bold mb-1">Career Credentials</h4>
                  <p className="opacity-90">Showcase your badges on LinkedIn and your resume</p>
                </div>
              </div>
            </div>
            <a
              href="https://trailhead.salesforce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-salesforce-blue rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Started on Trailhead
            </a>
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended YouTube Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl glass-effect text-center">
              <div className="text-4xl mb-3">📺</div>
              <h3 className="text-xl font-bold mb-2">Salesforce Official</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Official channel with product demos and announcements
              </p>
              <a
                href="https://youtube.com/salesforce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-salesforce-blue hover:underline"
              >
                Visit Channel →
              </a>
            </div>

            <div className="p-6 rounded-xl glass-effect text-center">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="text-xl font-bold mb-2">Salesforce Developers</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Technical tutorials for developers and architects
              </p>
              <a
                href="https://youtube.com/c/SalesforceDevelopers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-salesforce-blue hover:underline"
              >
                Visit Channel →
              </a>
            </div>

            <div className="p-6 rounded-xl glass-effect text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-2">Community Creators</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Learn from community experts and Salesforce MVPs
              </p>
              <a
                href="https://youtube.com/results?search_query=salesforce+tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-salesforce-blue hover:underline"
              >
                Search Tutorials →
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl glass-effect">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter for the latest Salesforce news, tutorials, and career tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-salesforce-blue"
              />
              <button className="px-6 py-3 bg-salesforce-blue text-white rounded-lg font-semibold hover:bg-salesforce-blue-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
