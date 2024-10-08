import Image, { StaticImageData } from 'next/image';
import { Linkedin } from 'lucide-react';
import Brook from "@/components/assets/brooke.png";
import Rhea from "@/components/assets/rhea.png";
import Nico from "@/components/assets/nico.png";
import Sasha from "@/components/assets/sasha.png";
import Juan from "@/components/assets/juan.png";

interface TeamMember {
  name: string;
  role: string;
  image: string | StaticImageData;
  url : string
}

const teamMembers: TeamMember[] = [
  { name: 'Brooke Hopkins', role: 'CEO', image: Brook , url : 'https://www.linkedin.com/in/bnhop/'},
  { name: 'Rhea Pokorny', role: 'Founding Engineer', image: Rhea , url : 'https://linkedin.com/in/rhea-bryce-pokorny-b67799121' },
  { name: 'Nico Nunez', role: 'Head of AI', image: Nico , url : 'https://linkedin.com/in/robert-doe'},
  { name: 'Sasha Malik', role: 'Engineer', image: Sasha , url : 'https://linkedin.com/in/sangram-singh-malik'},
  { name: 'Juan Guevara', role: 'Engineer', image: Juan , url : 'https://linkedin.com/in/juan-guevara-142439247' },
];

export default function TeamSection() {
  return (
    <section className="text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-2">Meet our team.</h2>
        <p className="text-2xl text-center mb-16 text-gray-400">unhinged = unstoppable</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.name} 
              className="bg-[#0A0A0A] rounded-lg p-8 flex items-center space-x-6"
            >
              {/* Left: Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-xl"
              />
              
              {/* Right: Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold">{member.name}</h3>
                <p className="text-lg text-gray-400">{member.role}</p>
                <a
                  href={`${member.url}`}
                  className="text-gray-400 hover:text-white transition-colors mt-4 inline-block"
                  aria-label={`${member.name}'s LinkedIn profile`}
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
