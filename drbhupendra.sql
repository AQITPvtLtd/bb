-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2024 at 01:31 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drbhupendra`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `img` varchar(200) NOT NULL,
  `heading` varchar(200) NOT NULL,
  `date` varchar(50) NOT NULL,
  `content` varchar(7000) NOT NULL,
  `shortcontent` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `img`, `heading`, `date`, `content`, `shortcontent`) VALUES
(2, 'img2.png', 'Spine fracture', '12-09-2024', '<div class=\"blog-post\">\r\n  <h1 class=\"text-3xl font-bold mb-4\">Spine Fracture</h1>\r\n  <p class=\"text-lg mb-4\">A spine fracture is a serious issue and is defined as a break in the vertebrae, which can affect life similarly to any other fracture.</p>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Symptoms</h2>\r\n  <p class=\"text-lg mb-4\">Patients with spine fractures usually present with the following symptoms:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>Back pain –</strong> Most common complaint</li>\r\n    <li><strong>Difficulty to sit, stand, or walk</strong></li>\r\n    <li><strong>Sciatica-like pain in limbs –</strong> Radicular pain, tingling, numbness</li>\r\n    <li><strong>Weakness in limbs</strong></li>\r\n    <li><strong>Bladder/Bowel involvement –</strong> Incontinence</li>\r\n    <li><strong>Spinal deformity and change in posture –</strong> Usually in the case of untreated fractures</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Causes</h2>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>In young patients –</strong> Usually due to high-impact injuries like road traffic accidents, falls from heights, or sports injuries.</li>\r\n    <li><strong>In older patients –</strong> Osteoporosis is the leading cause, as low bone density makes bones vulnerable to fractures. Even trivial trauma like leaning forward or sneezing may cause spine fractures.</li>\r\n    <li><strong>Associated causes –</strong></li>\r\n    <ul class=\"list-disc pl-10\">\r\n      <li>Tumors – Often metastatic</li>\r\n      <li>Drug-induced – Long-term steroid consumption</li>\r\n    </ul>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Diagnosis</h2>\r\n  <p class=\"text-lg mb-4\">Diagnosis is based on clinical examination and various investigations, including:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>MRI –</strong> The investigation of choice</li>\r\n    <li>X-rays and CT scans</li>\r\n    <li><strong>Bone Density –</strong> BMD or DEXA scan to quantify osteoporosis</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Management</h2>\r\n  <p class=\"text-lg mb-4\">The management of spine fractures depends on the following factors:</p>\r\n  <ol class=\"list-decimal pl-5 mb-6\">\r\n    <li>Cause of the fracture</li>\r\n    <li>Type of fracture</li>\r\n    <li>Site of the fracture</li>\r\n  </ol>\r\n  <p class=\"text-lg mb-4\">Most spine fractures do not require surgery and can be managed conservatively (non-surgically) with:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li>Pain management with medication</li>\r\n    <li><strong>Bracing –</strong> Supports the back, improves overall strength, and prevents further collapse of the fracture</li>\r\n    <li><strong>Physical therapy –</strong> Helps maintain joint flexibility and prevent chest-related issues while the patient is bedridden</li>\r\n    <li><strong>Treatment of associated factors –</strong> Such as osteoporosis</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Surgery</h2>\r\n  <p class=\"text-lg mb-4\">Surgery is usually considered when:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li>Conservative treatment fails</li>\r\n    <li>Pain and disability increase despite conservative treatment</li>\r\n    <li>Nerve compression causes weakness in limbs or bladder/bowel incontinence</li>\r\n    <li>Spinal deformity is present</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Types of Surgery</h2>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>In young patients –</strong> Spinal fixation with or without decompression of neural elements</li>\r\n    <li><strong>In older patients –</strong> Cementing of the affected vertebrae (Balloon kyphoplasty/vertebroplasty), a minimally invasive procedure with <strong><u class=\"text-blue-600\">maximum benefit and minimal intervention</u></strong></li>\r\n  </ul>\r\n  <p class=\"text-lg mb-4\">In some cases, spinal fixation may also be necessary along with cementing.</p>\r\n</div>\r\n', 'Spine fracture- Spine fracture is a serious issues and defined as break in vertebrae\r\nand can affect the life like any other fracture.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `Email` varchar(200) NOT NULL,
  `Phone` varchar(200) NOT NULL,
  `Query` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
