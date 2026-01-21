import { FileText, Award, ExternalLink, Calendar, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ResearchSection = () => {
  const navigate = useNavigate();
  const publication = {
    title: 'Integrated Academic Management & Learning Hub With AI Chatbot and Surveillance',
    journal: 'International Journal of Novel Research and Development (IJNRD)',
    volume: 'Volume 11, Issue 1',
    date: 'January 2026',
    issn: '2456-4184',
    impactFactor: '8.76',
    paperId: 'IJNRD2601082',
    registrationId: '311657',
    authors: [
      'Harshavardhan Pandey',
      'Dr. Malatesh S H',
      'Kshitiz Kannojia',
      'Aman Kumar',
      'Ajeet Prakash Pandey'
    ],
    abstract: 'Attendance management in educational institutions is a crucial yet time-consuming task when handled manually, often resulting in inaccuracies, proxy attendance, and increased administrative workload. To address these challenges, this project presents a Face Recognition-Based Automated Attendance System that utilizes computer vision and machine learning techniques to record attendance accurately and efficiently without human intervention.',
    tags: ['AI', 'Machine Learning', 'Face Recognition', 'Computer Vision', 'Education Technology'],
    paperUrl: '/research/published-paper.pdf',
    certificateUrl: '/research/publication-certificate.pdf',
  };

  return (
    <section id="research" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Research</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Published <span className="gradient-text">Research Paper</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Publication Card */}
        <div className="glass-card p-8 lg:p-10 hover:neon-border transition-all duration-500">
          {/* Header with Journal Badge */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Published in</span>
                <p className="text-primary font-semibold">{publication.journal}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                ✓ Peer Reviewed
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Open Access
              </span>
            </div>
          </div>

          {/* Paper Title */}
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
            {publication.title}
          </h3>

          {/* Authors */}
          <div className="flex items-center gap-2 mb-6 text-muted-foreground">
            <Users size={16} />
            <p className="text-sm">
              {publication.authors.map((author, i) => (
                <span key={author}>
                  <span className={author === 'Ajeet Prakash Pandey' ? 'text-primary font-semibold' : ''}>
                    {author}
                  </span>
                  {i < publication.authors.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>

          {/* Publication Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 rounded-xl bg-background/50">
            <div className="text-center p-3">
              <Calendar className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Published</p>
              <p className="text-sm font-semibold text-foreground">{publication.date}</p>
            </div>
            <div className="text-center p-3">
              <FileText className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Volume</p>
              <p className="text-sm font-semibold text-foreground">{publication.volume}</p>
            </div>
            <div className="text-center p-3">
              <Award className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">Impact Factor</p>
              <p className="text-sm font-semibold text-foreground">{publication.impactFactor}</p>
            </div>
            <div className="text-center p-3">
              <BookOpen className="w-5 h-5 mx-auto mb-2 text-primary" />
              <p className="text-xs text-muted-foreground">ISSN</p>
              <p className="text-sm font-semibold text-foreground">{publication.issn}</p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">Abstract</h4>
            <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
              {publication.abstract}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {publication.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="neon"
              className="gap-2"
              onClick={() => navigate(`/view?file=${encodeURIComponent(publication.paperUrl)}&title=${encodeURIComponent('Research Paper - ' + publication.title)}`)}
            >
              <FileText size={18} />
              Read Full Paper
            </Button>
            <Button
              variant="glass"
              className="gap-2"
              onClick={() => navigate(`/view?file=${encodeURIComponent(publication.certificateUrl)}&title=${encodeURIComponent('Publication Certificate')}`)}
            >
              <Award size={18} />
              View Certificate
            </Button>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://www.ijnrd.org', '_blank')}
            >
              <ExternalLink size={18} />
              Visit Journal
            </Button>
          </div>

          {/* Paper ID Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span>Paper ID: <span className="text-foreground font-mono">{publication.paperId}</span></span>
            <span>Registration ID: <span className="text-foreground font-mono">{publication.registrationId}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
