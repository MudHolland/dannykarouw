
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, Briefcase, UserCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavItem = ({ to, children, icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary',
        isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground'
      )
    }
  >
    {React.createElement(icon, { className: 'mr-2 h-5 w-5' })}
    {children}
  </NavLink>
);

const DKLogo = () => (
  <div className="relative font-mono font-bold text-2xl tracking-tighter group">
    <div className="flex items-center">
      <motion.span 
        className="text-primary transform-gpu transition-transform duration-300 group-hover:scale-110 inline-block"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: -10 }}
      >
        <span className="inline-block transform scale-y-125">&gt;</span>
      </motion.span>
      <motion.span 
        className="text-blue-400 mx-[-2px] transform-gpu transition-transform duration-300 group-hover:scale-110 inline-block"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
      >
        /
      </motion.span>
      <motion.span 
        className="text-primary transform-gpu transition-transform duration-300 group-hover:scale-110 inline-block"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 10 }}
      >
        <span className="inline-block transform scale-y-125">&lt;</span>
      </motion.span>
    </div>
    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      DK
    </div>
  </div>
);

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Code },
    { path: '/showcases', label: 'Showcases', icon: Briefcase },
    { path: '/about', label: 'About', icon: UserCircle },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <DKLogo />
          <span className="text-xl font-bold gradient-text">Danny Karouw</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map(item => (
            <NavItem key={item.path} to={item.path} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border/40 shadow-lg pb-4"
        >
          <nav className="flex flex-col space-y-2 px-4">
            {navItems.map(item => (
               <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors hover:bg-primary/10 hover:text-primary',
                    isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                  )
                }
              >
                {React.createElement(item.icon, { className: 'mr-3 h-5 w-5' })}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
