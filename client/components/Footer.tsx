import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "Home", href: "/" },
      { label: "Blogs", href: "/blogs" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
    ],
    social: [
      {
        label: "GitHub",
        href: "https://github.com/rudra-raghu108",
        icon: Github,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/rudra-raghuwanshi-8b76ab240",
        icon: Linkedin,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/_rudra_13_?igsh=MWgxYzR2MDg1bnJ3dg==",
        icon: Instagram,
      },
      {
        label: "Email",
        href: "mailto:rudra.raghuwanshi013@gmail.com",
        icon: Mail,
      },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff7c3d7d3a1f6403dad4e8964e7c82885%2Fa15886a8d84d4eec81640334c18fa4c4?format=webp&width=800"
                  alt="BlogSpace Logo"
                  className="w-full h-full object-contain"
                  style={{ filter: 'hue-rotate(280deg) saturate(1.2) brightness(1.1)' }}
                />
              </div>
              <span className="font-bold text-xl text-foreground">
                BlogSpace
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              A modern space for sharing development insights and projects.
              Explore cutting-edge web technologies, best practices, and
              innovative solutions.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-accent rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>rudra.raghuwanshi013@gmail.com</p>
              <p>Building amazing web experiences</p>
              <p>Open to collaboration</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} BlogSpace. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1 mt-4 sm:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500" /> using React &
            TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
