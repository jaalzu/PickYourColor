export const PreviewPanel = () => {
  return (
    <div className="space-y-6">
      
      {/* Navbar */}
      <nav 
        className="rounded-lg p-4 shadow-md"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="flex items-center justify-between">
          <h3 
            className="text-lg font-bold"
            style={{ color: 'var(--color-text)' }}
          >
            Brand Name
          </h3>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="hover:opacity-80"
              style={{ color: 'var(--color-text)' }}
            >
              Home
            </a>
            <a 
              href="#" 
              className="hover:opacity-80"
              style={{ color: 'var(--color-text)' }}
            >
              About
            </a>
            <a 
              href="#" 
              className="hover:opacity-80"
              style={{ color: 'var(--color-text)' }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Card 1 */}
        <div 
          className="rounded-lg p-6 shadow-md"
          style={{ 
            backgroundColor: 'var(--color-background)',
            border: '1px solid var(--color-primary)'
          }}
        >
          <h4 
            className="text-xl font-semibold mb-2"
            style={{ color: 'var(--color-primary)' }}
          >
            Card Title
          </h4>
          <p 
            className="mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            This is example text that uses your text color. It updates in real-time.
          </p>
          <button
            className="px-4 py-2 rounded hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--color-secondary)', color: '#fff' }}
          >
            Secondary
          </button>
        </div>

        {/* Card 2 */}
        <div 
          className="rounded-lg p-6 shadow-md"
          style={{ 
            backgroundColor: 'var(--color-background)',
            border: '1px solid var(--color-secondary)'
          }}
        >
          <h4 
            className="text-xl font-semibold mb-2"
            style={{ color: 'var(--color-secondary)' }}
          >
            Another Card
          </h4>
          <p 
            className="mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            More example text to showcase your color palette in action.
          </p>
          <button
            className="px-4 py-2 rounded hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
          >
            Accent
          </button>
        </div>

      </div>

      {/* Buttons showcase */}
      <div 
        className="rounded-lg p-6 shadow-md"
        style={{ backgroundColor: 'var(--color-background)' }}
      >
        <h4 
          className="text-lg font-semibold mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          Button Styles
        </h4>
        <div className="flex flex-wrap gap-3">
          <button
            className="px-6 py-2 rounded hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--color-primary)', color: '#fff' }}
          >
            Primary
          </button>
          <button
            className="px-6 py-2 rounded hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--color-secondary)', color: '#fff' }}
          >
            Secondary
          </button>
          <button
            className="px-6 py-2 rounded hover:opacity-90 transition"
            style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
          >
            Accent
          </button>
        </div>
      </div>

      {/* Text paragraph */}
      <div 
        className="rounded-lg p-6 shadow-md"
        style={{ backgroundColor: 'var(--color-background)' }}
      >
        <p 
          className="leading-relaxed"
          style={{ color: 'var(--color-text)' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          This paragraph demonstrates how your text color looks in longer content.
        </p>
      </div>

    </div>
  );
};