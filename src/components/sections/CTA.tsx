import { Button } from '../ui/Button';

export const CTA = () => {
const underlineStyle = (color: string) => ({
  color: 'var(--color-text)',
  display: 'inline',
  backgroundImage: `linear-gradient(color-mix(in srgb, ${color} 80%, transparent), color-mix(in srgb, ${color} 65%, transparent))`,
  backgroundPosition: '0 calc(100% - 1px)',
  backgroundSize: '100% 6px',
  backgroundRepeat: 'no-repeat',
  whiteSpace: 'nowrap'
});

const gradientUnderlineStyle = {
  color: 'var(--color-text)',
  display: 'inline',
  backgroundImage: `linear-gradient(90deg, color-mix(in srgb, var(--color-primary) 100%, transparent) 0%, color-mix(in srgb, var(--color-secondary) 100%, transparent) 100%)`,
  backgroundPosition: '0 calc(100% - 1px)',
  backgroundSize: '100% 6px',
  backgroundRepeat: 'no-repeat',
  whiteSpace: 'nowrap'
};


  return (
    <section
      className="py-22 px-8 "
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium mb-8 md:mb-11" style={{ lineHeight: '1.2' }}>
          <span style={{ color: 'var(--color-text)' }}>
            Stop wasting your{' '}
            <span style={underlineStyle('var(--color-primary)')}>
              precious time.
            </span>
          </span>
          <br />
          <span style={{ color: 'var(--color-text)' }}>
            Start creating your{' '}
            <span style={underlineStyle('var(--color-secondary)')}>
              next big idea.
            </span>
          </span>
          <br />
          <span style={{ color: 'var(--color-text)' }}>
            And start{' '}
            <span style={gradientUnderlineStyle}>
              right here and now.
            </span>
          </span>
        </h2>

        <Button 
          variant="primary" 
          padding="13px 50px" 
          borderRadius="5px" 
          opacity={1}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};