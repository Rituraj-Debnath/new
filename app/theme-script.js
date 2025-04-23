// This script runs before React hydration to prevent flash of wrong theme
export function ThemeScript() {
  const codeToRunOnClient = `
    (function() {
      try {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
          document.documentElement.classList.remove('dark');
        } else {
          document.documentElement.classList.add('dark');
        }
      } catch (e) {
        console.error('Failed to apply theme:', e);
      }
    })()
  `;

  // Using dangerouslySetInnerHTML to inject the script
  return (
    <script
      dangerouslySetInnerHTML={{ __html: codeToRunOnClient }}
    />
  );
}