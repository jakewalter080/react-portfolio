import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Header = ({ currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = ['About Me', 'Portfolio', 'Contact', 'Resume'];