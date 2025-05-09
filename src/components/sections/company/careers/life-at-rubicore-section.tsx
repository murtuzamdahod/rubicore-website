import { Coffee, Users, Award, TrendingUp, Puzzle, Users2, Building2, Lightbulb } from "lucide-react"; // Example icons

const perks = [
  { name: "Competitive Salary & Equity", icon: <TrendingUp className="w-7 h-7 text-ruby-600 dark:text-ruby-500" /> },
  { name: "Comprehensive Health Benefits", icon: <Award className="w-7 h-7 text-ruby-600 dark:text-ruby-500" /> },
  { name: "Flexible Work Arrangements", icon: <Coffee className="w-7 h-7 text-ruby-600 dark:text-ruby-500" /> },
  { name: "Generous PTO & Parental Leave", icon: <Users className="w-7 h-7 text-ruby-600 dark:text-ruby-500" /> },
  { name: "Professional Development Budget", icon: <Puzzle className="w-7 h-7 text-ruby-600 dark:text-ruby-500" /> },
  { name: "Team Events & Offsites", icon: <Users className="w-7 h-7 text-ruby-600 dark:text-ruby-500" /> },
];

export default function LifeAtRubiCoreSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Life at RubiCore
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We believe in creating an environment where our team can thrive
            both professionally and personally. Discover our culture, values,
            and the perks of being part of the RubiCore family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Using lucide-react icons as an alternative for images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <Users2 className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <Building2 className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <Users className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <Lightbulb className="w-12 h-12 text-gray-600 dark:text-gray-400" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Perks & Benefits
            </h3>
            <ul className="space-y-4">
              {perks.map((perk) => (
                <li key={perk.name} className="flex items-center">
                  <div className="flex-shrink-0 bg-ruby-100 dark:bg-ruby-700/50 p-2 rounded-full mr-4">
                    {perk.icon}
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    {perk.name}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600 dark:text-gray-400">
                We are committed to diversity, inclusion, and creating a workplace where everyone feels valued and empowered to do their best work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
