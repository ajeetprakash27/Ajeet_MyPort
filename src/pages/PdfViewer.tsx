import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';

const PdfViewer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const file = searchParams.get('file');
  const title = searchParams.get('title') || 'Document';

  if (!file) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">No document specified</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title} | Ajeet Prakash Pandey</title>
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        {/* Header */}
        <header className="bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2"
              onClick={() => navigate('/#research')}
            >
              <ArrowLeft size={18} />
              Back
            </Button>
            <h1 className="text-sm sm:text-base font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
              {title}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => window.open(file, '_blank')}
            >
              <ExternalLink size={16} />
              <span className="hidden sm:inline">Open in New Tab</span>
            </Button>
            <Button
              variant="neon"
              size="sm"
              className="gap-2"
              asChild
            >
              <a href={file} download>
                <Download size={16} />
                <span className="hidden sm:inline">Download</span>
              </a>
            </Button>
          </div>
        </header>

        {/* PDF Viewer */}
        <div className="flex-1">
          <iframe
            src={file}
            className="w-full h-[calc(100vh-57px)]"
            title={title}
          />
        </div>
      </div>
    </>
  );
};

export default PdfViewer;
