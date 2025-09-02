-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-09-2025 a las 18:02:39
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Electrodomésticos'),
(2, 'Tecnología'),
(3, 'Hogar'),
(4, 'Moda'),
(7, 'Deportes'),
(9, 'Útiles'),
(10, 'Herramientas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes_productos`
--

CREATE TABLE `imagenes_productos` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `producto_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `imagenes_productos`
--

INSERT INTO `imagenes_productos` (`id`, `url`, `producto_id`) VALUES
(2, 'https://media.falabella.com/falabellaPE/144976091_03/w=1500,h=1500,fit=pad', 1),
(3, 'https://media.falabella.com/falabellaPE/136523703_01/w=1500,h=1500,fit=pad', 2),
(4, 'https://media.falabella.com/falabellaPE/136523703_02/w=1500,h=1500,fit=pad', 2),
(5, 'https://media.falabella.com/tottusPE/43389007_1/w=1500,h=1500,fit=pad', 3),
(6, 'https://media.falabella.com/tottusPE/43389007_3/w=1500,h=1500,fit=pad', 3),
(7, 'https://media.falabella.com/falabellaPE/883410208_1/w=1500,h=1500,fit=pad', 4),
(8, 'https://media.falabella.com/falabellaPE/883410208_2/w=1500,h=1500,fit=pad', 4),
(9, 'https://media.falabella.com/falabellaPE/883410208_3/w=1500,h=1500,fit=pad', 4),
(10, 'https://media.falabella.com/falabellaPE/881999732_01/w=1500,h=1500,fit=pad', 5),
(11, 'https://media.falabella.com/falabellaPE/140397306_01/w=1500,h=1500,fit=pad', 6),
(12, 'https://media.falabella.com/falabellaPE/20406579_1/w=1500,h=1500,fit=pad', 7),
(13, 'https://media.falabella.com/falabellaPE/20257267_1/w=1500,h=1500,fit=pad', 8),
(14, 'https://media.falabella.com/falabellaPE/883411231_1/w=1500,h=1500,fit=pad', 11),
(19, 'https://imgs.search.brave.com/ia0odNdq9fCmegUz-MtSloJGo8XbLw_oxKiux-jW220/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk1MzU4Ni1NTEE4/MzcxNzQ0NDI4M18w/NDIwMjUtRS53ZWJw', NULL),
(20, 'https://imgs.search.brave.com/ia0odNdq9fCmegUz-MtSloJGo8XbLw_oxKiux-jW220/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9RX05QXzJY/Xzk1MzU4Ni1NTEE4/MzcxNzQ0NDI4M18w/NDIwMjUtRS53ZWJw', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `categoria_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `categoria_id`) VALUES
(1, 'Cafetera', 4200.00, 1),
(2, 'Computadora PC GAMER', 1889.00, 2),
(3, 'Audífono Bluetooth Panasonic ', 139.00, 2),
(4, 'Sofá Stuart 2 Cuerpos', 1999.00, 3),
(5, 'Juego de Comedor Luminus 6 Sillas', 799.00, 3),
(6, 'Centro de Entretenimiento Mesa para TV', 899.00, 3),
(7, 'Polera 100% Algodón Hombre Tommy Hilfiger', 449.80, 4),
(8, 'Jean Algodón Hombre Christian Lacroix', 99.90, 4),
(11, 'Máquina Trotadora Trot.2.5', 1999.00, 7),
(16, 'Taladro', 80.00, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'admin'),
(2, 'usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(70) NOT NULL,
  `id_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `id_rol`) VALUES
(2, 'adminuser', '$2b$10$sacBGc0eMs5jK8ggjfN/v.hBr1RLEPsEqCUcY/ViLWfN2UKlUt2bG', 1),
(3, 'clientuser', '$2b$10$lfCfhIaihc/aIiMMjP/qe.nIXpTuMmegmIcFkFrZNkr493D/0Dg4e', 2),
(4, 'pepito', '$2b$10$Y0mE9DAfiyqYxQyOJU0igOY7sm72HbamLHthRej8QuQDsRB4VE7Eq', 1),
(5, 'Ricardo Treviño', '$2b$10$PPA6sTD/8tLfnnPijMBPOudSD4lv6VK7/kQq.9QjBzDl6vxZ7j82q', 1),
(6, 'Carla Pérez', '$2b$10$vHxymMVnJAX.ytdPsGl6Y.o/dEHENGEm4aTJO8smG5xLUT9ha0Gx.', 2),
(8, 'ronaldiño', '$2b$10$E42Xl3q7VvlVmtQ7NuJhB.lHxieWZmtK69U5ZmHpEgKyhfIQdWBaG', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `imagenes_productos`
--
ALTER TABLE `imagenes_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `imagenes_productos`
--
ALTER TABLE `imagenes_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagenes_productos`
--
ALTER TABLE `imagenes_productos`
  ADD CONSTRAINT `imagenes_productos_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE SET NULL;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
