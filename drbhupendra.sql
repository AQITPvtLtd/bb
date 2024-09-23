-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2024 at 01:35 PM
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
(2, 'img2.png', 'Spine fracture', '12-09-2024', '<div class=\"blog-post\">\r\n  <h1 class=\"text-3xl font-bold mb-4\">Spine Fracture</h1>\r\n  <p class=\"text-lg mb-4\">A spine fracture is a serious issue and is defined as a break in the vertebrae, which can affect life similarly to any other fracture.</p>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Symptoms</h2>\r\n  <p class=\"text-lg mb-4\">Patients with spine fractures usually present with the following symptoms:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>Back pain –</strong> Most common complaint</li>\r\n    <li><strong>Difficulty to sit, stand, or walk</strong></li>\r\n    <li><strong>Sciatica-like pain in limbs –</strong> Radicular pain, tingling, numbness</li>\r\n    <li><strong>Weakness in limbs</strong></li>\r\n    <li><strong>Bladder/Bowel involvement –</strong> Incontinence</li>\r\n    <li><strong>Spinal deformity and change in posture –</strong> Usually in the case of untreated fractures</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Causes</h2>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>In young patients –</strong> Usually due to high-impact injuries like road traffic accidents, falls from heights, or sports injuries.</li>\r\n    <li><strong>In older patients –</strong> Osteoporosis is the leading cause, as low bone density makes bones vulnerable to fractures. Even trivial trauma like leaning forward or sneezing may cause spine fractures.</li>\r\n    <li><strong>Associated causes –</strong></li>\r\n    <ul class=\"list-disc pl-10\">\r\n      <li>Tumors – Often metastatic</li>\r\n      <li>Drug-induced – Long-term steroid consumption</li>\r\n    </ul>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Diagnosis</h2>\r\n  <p class=\"text-lg mb-4\">Diagnosis is based on clinical examination and various investigations, including:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>MRI –</strong> The investigation of choice</li>\r\n    <li>X-rays and CT scans</li>\r\n    <li><strong>Bone Density –</strong> BMD or DEXA scan to quantify osteoporosis</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Management</h2>\r\n  <p class=\"text-lg mb-4\">The management of spine fractures depends on the following factors:</p>\r\n  <ol class=\"list-decimal pl-5 mb-6\">\r\n    <li>Cause of the fracture</li>\r\n    <li>Type of fracture</li>\r\n    <li>Site of the fracture</li>\r\n  </ol>\r\n  <p class=\"text-lg mb-4\">Most spine fractures do not require surgery and can be managed conservatively (non-surgically) with:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li>Pain management with medication</li>\r\n    <li><strong>Bracing –</strong> Supports the back, improves overall strength, and prevents further collapse of the fracture</li>\r\n    <li><strong>Physical therapy –</strong> Helps maintain joint flexibility and prevent chest-related issues while the patient is bedridden</li>\r\n    <li><strong>Treatment of associated factors –</strong> Such as osteoporosis</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Surgery</h2>\r\n  <p class=\"text-lg mb-4\">Surgery is usually considered when:</p>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li>Conservative treatment fails</li>\r\n    <li>Pain and disability increase despite conservative treatment</li>\r\n    <li>Nerve compression causes weakness in limbs or bladder/bowel incontinence</li>\r\n    <li>Spinal deformity is present</li>\r\n  </ul>\r\n\r\n  <h2 class=\"text-2xl font-bold mb-4\">Types of Surgery</h2>\r\n  <ul class=\"list-disc pl-5 mb-6\">\r\n    <li><strong>In young patients –</strong> Spinal fixation with or without decompression of neural elements</li>\r\n    <li><strong>In older patients –</strong> Cementing of the affected vertebrae (Balloon kyphoplasty/vertebroplasty), a minimally invasive procedure with <strong><u class=\"text-blue-600\">maximum benefit and minimal intervention</u></strong></li>\r\n  </ul>\r\n  <p class=\"text-lg mb-4\">In some cases, spinal fixation may also be necessary along with cementing.</p>\r\n</div>\r\n', 'Spine fracture- Spine fracture is a serious issues and defined as break in vertebrae\r\nand can affect the life like any other fracture.\r\n'),
(3, 'img3.png', 'Spine Tumors ', '2024-09-23', ' <div style=\"background: #fff; padding: 20px; border-radius: 8px;\">\r\n        <h1 style=\"color: #2c3e50; font-size: 32px; font-weight: bold;\">Understanding Spine Tumors</h1>\r\n        <p>Spine tumors are abnormal growths that develop in or around the spinal cord and vertebrae. They can be benign (non-cancerous) or malignant (cancerous) and may originate from the spine itself or spread (metastasize) from other parts of the body.</p>\r\n\r\n        <h2 style=\"color: #2c3e50; font-size: 28px; font-weight: bold; margin-top: 30px;\">Types of Spine Tumors</h2>\r\n        <h3 style=\"color: #2c3e50; font-size: 24px; font-weight: bold; margin-top: 20px;\">1. Vertebral Column Tumors</h3>\r\n        <p>These affect the bones of the spine (vertebrae) and can either be primary (such as osteosarcomas) or metastatic.</p>\r\n\r\n        <h3 style=\"color: #2c3e50; font-size: 24px; font-weight: bold; margin-top: 20px;\">2. Metastatic Tumors</h3>\r\n        <p>A metastatic tumor of the spine refers to cancer that has spread (metastasized) from another part of the body to the bones of the spine or the spinal cord. Common cancers that metastasize to the spine include those of the breast, lung, prostate, kidney, and thyroid.</p>\r\n\r\n        <h4 style=\"color: #2c3e50; font-size: 20px; font-weight: bold; margin-top: 20px;\">Common Characteristics:</h4>\r\n        <ul style=\"margin-left: 20px; list-style-type: disc;\">\r\n            <li><strong>Location:</strong> Metastases usually occur in the vertebrae rather than the spinal cord itself. The thoracic spine is most commonly affected, followed by the lumbar and cervical regions.</li>\r\n            <li><strong>Multiple Lesions:</strong> Metastatic spine tumors often present as multiple lesions across several vertebrae.</li>\r\n        </ul>\r\n\r\n        <h3 style=\"color: #2c3e50; font-size: 24px; font-weight: bold; margin-top: 20px;\">3. Intramedullary Tumors</h3>\r\n        <p>These tumors develop inside the spinal cord, and are often gliomas or astrocytomas.</p>\r\n\r\n        <h3 style=\"color: #2c3e50; font-size: 24px; font-weight: bold; margin-top: 20px;\">4. Extramedullary Tumors</h3>\r\n        <p>These tumors grow outside the spinal cord but within its protective covering. Common examples include meningiomas and schwannomas.</p>\r\n\r\n        <h2 style=\"color: #2c3e50; font-size: 28px; font-weight: bold; margin-top: 30px;\">Symptoms of Spine Tumors</h2>\r\n        <ul style=\"margin-left: 20px; list-style-type: disc;\">\r\n            <li><strong>Pain:</strong> Typically in the back or neck, pain can worsen with movement or at night.</li>\r\n            <li><strong>Neurological Deficits:</strong> Symptoms include numbness, weakness, difficulty walking, or loss of sensation.</li>\r\n            <li><strong>Bowel or Bladder Dysfunction:</strong> This can occur especially with tumors compressing the spinal cord.</li>\r\n        </ul>\r\n\r\n        <h2 style=\"color: #2c3e50; font-size: 28px; font-weight: bold; margin-top: 30px;\">Diagnosis</h2>\r\n        <p>Several imaging techniques are used to diagnose spine tumors:</p>\r\n        <ul style=\"margin-left: 20px; list-style-type: disc;\">\r\n            <li><strong>MRI:</strong> The primary investigation used to detect spine tumors.</li>\r\n            <li><strong>PET CT Scan:</strong> Helps identify multiple metastatic sites.</li>\r\n            <li><strong>CT Scan:</strong> Useful for detailed study and surgical planning.</li>\r\n        </ul>\r\n    </div>', 'Spine tumors are abnormal growths that develop in or around the spinal cord and vertebrae. They can be benign (non-cancerous) or malignant (cancerous) and may originate from the spine itself or spread');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
