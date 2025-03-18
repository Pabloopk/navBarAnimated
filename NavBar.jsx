// Importações necessárias para o funcionamento do componente
import Link from "next/link"; // Componente de navegação do Next.js
import React, { useState, useEffect } from "react"; // Hooks do React
import { useRouter } from "next/navigation"; // Hook para controle de navegação
import { motion } from "framer-motion"; // Biblioteca de animações para React
import Logo from "./Logo"; // Componente do logotipo
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Ícones das redes sociais

// 🔹 Componente de link personalizado para o menu desktop
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter(); // Obtém a rota atual do Next.js
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
      h-[1px] inline-block bg-white 
      absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} 
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

// 🔹 Componente de link para o menu mobile
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter(); // Obtém a rota atual

  const handleClick = () => {
    toggle(); // Fecha o menu ao clicar
    router.push(href); // Navega para a rota
  };

  return (
    <button
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-white`}
      >
        &nbsp;
      </span>
    </button>
  );
};

// 🔹 Componente principal da Navbar
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o menu mobile
  const [showHeader, setShowHeader] = useState(false); // Estado para mostrar o menu ao passar o mouse
  const [isMobile, setIsMobile] = useState(true); // Estado para verificar se está no mobile

  // Detecta se a tela é menor que 770px e define isMobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 770);
    };

    checkScreenSize(); // Verifica o tamanho da tela ao carregar
    window.addEventListener("resize", checkScreenSize); // Atualiza o estado ao redimensionar

    return () => window.removeEventListener("resize", checkScreenSize); // Remove o evento ao desmontar
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen); // Alterna o menu mobile
  };

  return (
    <div
      className="fixed md:relative top-0 w-full h-16 z-20"
      onMouseEnter={() => !isMobile && setShowHeader(true)} // Mostra o menu ao passar o mouse (apenas no desktop)
      onMouseLeave={() => !isMobile && setShowHeader(false)} // Esconde o menu ao tirar o mouse
    >
      {/* 🔹 Header fixo no topo */}
      <header
        className={`w-full px-32 py-8 font-medium flex items-center justify-between
         bg-black/85 text-slate-200
        z-10 lg:px-16 md:px-12 sm:px-8 shadow-sm 
        transition-transform duration-500
        ${
          showHeader || isMobile
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {/* 🔹 Logo - visível apenas no desktop */}
        <div className="items-start ml-5 justify-start hidden lg:flex top-2 translate-x-[-50%]">
          <Logo />
        </div>

        {/* 🔹 Botão do menu mobile */}
        <button
          className="right-4 mr-3 flex-col justify-center text-slate-400 items-center hidden lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* 🔹 Menu principal (desktop) */}
        <div className="w-full flex items-center justify-between lg:hidden">
          <div className="items-start justify-start top-2 translate-x-[-50%]">
            <Logo />
          </div>
          <nav className="flex items-center justify-center">
            <CustomLink href="/" title="Início" className="mr-4 rounded-md" />
            <CustomLink href="/service" title="Vídeos" className="mx-4 rounded-md" />
            <CustomLink href="/projects" title="Galeria" className="mx-4 rounded-md" />
          </nav>

          {/* 🔹 Ícones de redes sociais */}
          <nav className="flex items-end justify-end flex-wrap">
            <button className="mr-8 w-8">Lang</button>
            <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
              className="mr-3 text-xl" href="https://github.com/Pabloopk" target={"_blank"}>
              <FaWhatsapp />
            </motion.a>
            <motion.a className="text-xl mx-3" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/maibertts/" target={"_blank"}>
              <FaInstagram />
            </motion.a>
          </nav>
        </div>

        {/* 🔹 Menu Mobile */}
        {isOpen ? (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: "-28%", y: "15%" }}
            animate={{ scale: 1, opacity: 1 }}
            className="min-w-[70vw] flex flex-col justify-between z-30
                        items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        bg-dark/90 dark:bg-light/75 rounded-lg text-light dark:text-dark 
                        backdrop-blur-md py-32"
          >
            {/* 🔹 Links do menu mobile */}
            <nav className="flex items-center flex-col justify-center">
              <CustomMobileLink href="/" title="Início" toggle={handleClick} />
              <CustomMobileLink href="/service" title="Vídeos" toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Galeria" toggle={handleClick} />
            </nav>
          </motion.div>
        ) : null}
      </header>
    </div>
  );
};

export default NavBar;
